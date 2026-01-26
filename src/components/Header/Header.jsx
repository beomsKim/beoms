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
        </nav>
      </div>
    </header>
  );
};

export default Header;