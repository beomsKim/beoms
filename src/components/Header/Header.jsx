// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { trackClick } from "../../utils/googleAnalytics";
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-contents">
        <Link to="/" className="logo" onClick={() => trackClick("header_logo")}>BeomCheol Kim</Link>

        <nav className="nav-menu">
          <Link to="/" onClick={() => trackClick("header_home")}>Home</Link>
          <Link to="/lunch" onClick={() => trackClick("header_lunch")}>Lunch Roulette</Link>
          <Link to="/gallery" onClick={() => trackClick("header_gallery")}>Gallery1</Link>
          <Link to="https://next-image-gallery-board.vercel.app/" onClick={() => trackClick("header_gallery2")} target="_blank" rel="noreferrer">
            Gallery2
          </Link>

        </nav>
      </div>
    </header>
  );
};

export default Header;