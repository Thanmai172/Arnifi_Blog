import React, { useEffect, useState } from 'react';
import API from '../api';
import BlogCard from '../components/BlogCard';

const MyBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  const handleDelete = async (id) => {
    try {
      await API.delete(`/blogs/${id}`);
      setBlogs(blogs.filter(blog => blog._id !== id));
    } catch (error) {
      console.error('Failed to delete blog:', error);
    }
  };

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const token = localStorage.getItem('token');
        const payload = JSON.parse(atob(token.split('.')[1]));
        const username = payload.name;

        const res = await API.get('/blogs');
        const userBlogs = res.data.filter(blog => blog.authorName === username);

        setBlogs(userBlogs);
      } catch (err) {
        console.error('Error fetching blogs:', err);
      }
    };

    fetchMyBlogs();
  }, []);

  return (
    <div className="blog-container">
      <h2>My Blogs</h2>
      {blogs.length === 0 ? (
        <p>You haven’t posted any blogs yet.</p>
      ) : (
        blogs.map(blog => (
          <BlogCard
            key={blog._id}
            blog={blog}
            showActions={true}
            onDelete={handleDelete}
          />
        ))
      )}
    </div>
  );
};

export default MyBlogs;
