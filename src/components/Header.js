import React from 'react';

const Header = ({ setFilter, setSort }) => {
  return (
    <header>
      <div className="logo">Are you victim</div>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
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
