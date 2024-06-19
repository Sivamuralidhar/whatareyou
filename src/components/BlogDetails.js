import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../styles.css';

const BlogDetails = ({ blogPosts }) => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === parseInt(id));

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      const newCommentObj = { id: comments.length + 1, text: newComment };
      setComments([...comments, newCommentObj]);
      setNewComment('');
    }
  };

  return (
    <div className="blog-details">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p><small>By {post.author} on {post.date}</small></p>
      <button className="close-btn"><Link to="/">Close</Link></button>
      <hr />
      <h3>Comments</h3>
      <div className="comments">
        <textarea
          rows="3"
          placeholder="Add your comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        ></textarea>
        <button onClick={handleAddComment}>Add Comment</button>
        <ul>
          {comments.map(comment => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BlogDetails;
