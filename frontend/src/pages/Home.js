import React, { useEffect, useState } from 'react';
import API from '../api';
import BlogCard from '../components/BlogCard';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const res = await API.get('/blogs');
      setBlogs(res.data);
    };
    fetchBlogs();
  }, []);

  return (
    <div className="blog-container">
      <h2>All Blogs</h2>
      {blogs.map(blog => <BlogCard key={blog._id} blog={blog} />)}
    </div>
  );
};

export default Home