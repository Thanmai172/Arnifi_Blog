import React, { useEffect, useState } from 'react';
import API from '../api';
import { useParams, useNavigate } from 'react-router-dom';


const EditBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    Description: '',
    content: '',
    category: ''
  });


  
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await API.get(`/blogs`);
        const blogToEdit = res.data.find(b => b._id === id);
        if (blogToEdit) {
          setFormData(blogToEdit);
        } else {
          alert('Blog not found or you do not have permission');
        }
      } catch (err) {
        alert('Error fetching blog');
      }
    };

    fetchBlog();
  }, [id]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/blogs/${id}`, formData);
      alert('Blog updated!');
      navigate('/myblogs');
    } catch (err) {
      alert(err.response?.data?.message || 'Update failed');
    }
  };

  return (
    <div className="blog-form">
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={formData.title} placeholder="Title" onChange={handleChange} required />
        <input name="description" value={formData.description} placeholder="description" onChange={handleChange} required />
        <input name="content" value={formData.content} placeholder="content" onChange={handleChange} />
        <textarea name="category" value={formData.category} placeholder="category" rows="6" onChange={handleChange} required />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBlog;
