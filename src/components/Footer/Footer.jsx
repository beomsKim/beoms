// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-contents">
        <p>© 2026 beomsKim. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/beomsKim" target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
      <Link to="/gallery">Gallery1</Link><br />
      <Link to="https://next-image-gallery-board.vercel.app/" target="_blank" rel="noreferrer">Gallery2</Link>
    </footer>
  );
};

export default Footer;