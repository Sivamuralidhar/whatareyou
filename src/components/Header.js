import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setFilter, setSort }) => {
  return (
    <header>
      <div className="logo">Are you victim</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/create">Create Post</Link>
      </nav>
      <div className="controls">
        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">Filter by Category</option>
          <option value="Tech">Tech</option>
          <option value="Health">Health</option>
          {/* Add more categories here */}
        </select>
        <select onChange={(e) => setSort(e.target.value)}>
          <option value="">Sort by</option>
          <option value="date">Date</option>
          <option value="popularity">Popularity</option>
          {/* Add more sorting options here */}
        </select>
      </div>
    </header>
  );
}

export default Header;


