import React, { useState } from 'react';
import API from '../api';
// frontend/src/pages/CreateBlog.js

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    category: ''
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1])); // decode JWT
    const authorName = payload.name; // 👈 extract name from token

    await API.post(
      '/blogs',
      { ...formData, authorName }, // 👈 include authorName
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert('Blog created successfully!');
  } catch (err) {
    console.error('Error:', err);
    alert(err.response?.data?.message || 'Server Error');
  }
};

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" placeholder="Title" onChange={handleChange} />
      <input name="description" placeholder="Description" onChange={handleChange} />
      <input name="content" placeholder="Content" onChange={handleChange} />
      <input name="category" placeholder="Category" onChange={handleChange} />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateBlog;
