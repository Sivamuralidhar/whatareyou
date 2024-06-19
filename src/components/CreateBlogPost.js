import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const CreateBlogPost = ({ addBlogPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now(),
      title,
      content,
      category,
      snippet: content.substring(0, 100),
      author: 'Author', // Replace with actual author if needed
      date: new Date().toISOString().split('T')[0], // Current date
    };
    addBlogPost(newPost);
    navigate('/');
  };

  return (
    <div className="create-blog-post">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="stylish-button">Submit</button>
      </form>
    </div>
  );
};

export default CreateBlogPost;
