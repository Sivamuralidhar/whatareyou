import React from 'react';

import { useNavigate } from 'react-router-dom';
import '../styles.css';



const BlogPost = ({ post }) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/blog/${post.id}`);
    };


    // Define flashy header colors
    const headerColors = ["#1984c5", "#22a7f0", "#63bff0", "#a7d5ed", "#e2e2e2", "#e1a692", "#de6e56", "#e14b31", "#c23728", "#115f9a", "#1984c5", "#22a7f0", "#48b5c4", "#76c68f"];
    const randomColor = headerColors[Math.floor(Math.random() * headerColors.length)];

    return (
        <div className="blog-post" onClick={handleClick}>
            <h2 style={{ backgroundColor: randomColor }}>{post.title}</h2>
            <p>{post.snippet}</p>
            <p><small>By {post.author} on {post.date}</small></p>
            <div className="content">{post.content}</div>
        </div>

    );
}

export default BlogPost;

