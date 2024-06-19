import React, { useState, useEffect } from 'react';
import Header from '../src/components/Header';
import BlogPost from '../src/components/BlogPost';
import BlogDetails from '../src/components/BlogDetails';
import Footer from '../src/components/Footer';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  const [filter, setFilter] = useState('');
  const [sort, setSort] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);

  // Sample blog posts with varying content lengths
  const initialBlogPosts = [
    { id: 1, title: 'First Blog Post', snippet: 'This is the first blog post.', author: 'Author 1', date: '2024-06-19', category: 'Tech', content: 'This is a short blog post.' },
    { id: 2, title: 'Second Blog Post', snippet: 'This is the second blog post.', author: 'Author 2', date: '2024-06-18', category: 'Health', content: 'This is a longer blog post with more content. It will take more space.' },
    { id: 3, title: 'Third Blog Post', snippet: 'Snippet of the third blog post.', author: 'Author 3', date: '2024-06-17', category: 'Lifestyle', content: 'Short content.' },
    { id: 4, title: 'Fourth Blog Post', snippet: 'Snippet of the fourth blog post.', author: 'Author 4', date: '2024-06-16', category: 'Tech', content: 'A bit more content in the fourth blog post. It is not too long.' },
    { id: 5, title: 'Fifth Blog Post', snippet: 'Snippet of the fifth blog post.', author: 'Author 5', date: '2024-06-15', category: 'Travel', content: 'This is a travel blog post with a lot of content. The post is detailed and covers many aspects of the travel experience.' },
    { id: 6, title: 'Sixth Blog Post', snippet: 'Snippet of the sixth blog post.', author: 'Author 6', date: '2024-06-14', category: 'Food', content: 'Food blog post with recipe details and cooking tips.' },
    { id: 7, title: 'Seventh Blog Post', snippet: 'Snippet of the seventh blog post.', author: 'Author 7', date: '2024-06-13', category: 'Lifestyle', content: 'Short lifestyle post.' },
    { id: 8, title: 'Eighth Blog Post', snippet: 'Snippet of the eighth blog post.', author: 'Author 8', date: '2024-06-12', category: 'Tech', content: 'Tech post with insights into the latest gadgets and technology trends.' },
    { id: 9, title: 'Ninth Blog Post', snippet: 'Snippet of the ninth blog post.', author: 'Author 9', date: '2024-06-11', category: 'Health', content: 'Health blog post with tips on maintaining a healthy lifestyle. The content is moderately long and includes various tips and advice.' },
    { id: 10, title: 'Tenth Blog Post', snippet: 'Snippet of the tenth blog post.', author: 'Author 10', date: '2024-06-10', category: 'Travel', content: 'A short travel blog post.' },
    { id: 11, title: 'Eleventh Blog Post', snippet: 'Snippet of the eleventh blog post.', author: 'Author 11', date: '2024-06-09', category: 'Tech', content: 'Tech blog post with in-depth analysis of the latest technology trends.' },
    { id: 12, title: 'Twelfth Blog Post', snippet: 'Snippet of the twelfth blog post.', author: 'Author 12', date: '2024-06-08', category: 'Food', content: 'Food blog post with recipes and cooking tips. This post has a lot of content to cover various recipes and techniques.' },
    { id: 13, title: 'Thirteenth Blog Post', snippet: 'Snippet of the thirteenth blog post.', author: 'Author 13', date: '2024-06-07', category: 'Lifestyle', content: 'Lifestyle blog post with advice on daily routines and habits.' },
    { id: 14, title: 'Fourteenth Blog Post', snippet: 'Snippet of the fourteenth blog post.', author: 'Author 14', date: '2024-06-06', category: 'Travel', content: 'Travel blog post with a brief description of the destination.' },
    { id: 15, title: 'Fifteenth Blog Post', snippet: 'Snippet of the fifteenth blog post.', author: 'Author 15', date: '2024-06-05', category: 'Health', content: 'Health blog post discussing recent health trends and tips for staying fit.' },
    { id: 16, title: 'Sixteenth Blog Post', snippet: 'Snippet of the sixteenth blog post.', author: 'Author 16', date: '2024-06-04', category: 'Tech', content: 'A tech blog post with reviews of the latest gadgets. The content is short and to the point.' },
    { id: 17, title: 'Seventeenth Blog Post', snippet: 'Snippet of the seventeenth blog post.', author: 'Author 17', date: '2024-06-03', category: 'Food', content: 'A food blog post with detailed recipes and tips. This post is lengthy and covers multiple recipes in detail.' },
    { id: 18, title: 'Eighteenth Blog Post', snippet: 'Snippet of the eighteenth blog post.', author: 'Author 18', date: '2024-06-02', category: 'Lifestyle', content: 'A lifestyle blog post with quick tips and advice. The content is short.' },
    { id: 19, title: 'Nineteenth Blog Post', snippet: 'Snippet of the nineteenth blog post.', author: 'Author 19', date: '2024-06-01', category: 'Travel', content: 'A travel blog post that is short and concise.' },
  ];

  useEffect(() => {
    // Shuffle blog posts on each page load
    const shuffledPosts = shuffleArray(initialBlogPosts);
    setBlogPosts(shuffledPosts);
  }, []);

  // Function to shuffle array
  const shuffleArray = (array) => {
    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex !== 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }



  return (
    <Router>
      <div className="App">
        <Header setFilter={setFilter} setSort={setSort} />
        <main className="content">
          <Routes>
          <Route path="/" element={blogPosts.map(post => (
                <BlogPost key={post.id} post={post} />
              ))} /> 
              <Route path="/blog/:id" element={<BlogDetails blogPosts={blogPosts} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
