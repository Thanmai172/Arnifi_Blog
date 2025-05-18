import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog, showActions = false, onDelete }) => {
  return (
    <div className="blog-card">
      <p><strong>Name:</strong> {blog.authorName || 'Unknown Author'}</p>
      <p><strong>Description:</strong> {blog.description}</p>
      <p><strong>Content:</strong> {blog.content}</p>
      <p><strong>Category:</strong> {blog.category}</p>

      {showActions && (
        <div className="blog-actions" style={{ marginTop: '1rem' }}>
          <Link to={`/edit/${blog._id}`} className="btn btn-edit" style={{ marginRight: '1rem' }}>
            Edit
          </Link>
          <button
            className="btn btn-delete"
            onClick={() => onDelete && onDelete(blog._id)}
            style={{ cursor: 'pointer' }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogCard;
