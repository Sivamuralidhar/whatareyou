import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">Instagram</a>
      </div>
      <div className="newsletter">
        <h3>Subscribe to our Newsletter</h3>
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
      <div className="links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
}

export default Footer;
