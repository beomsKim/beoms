// src/components/Header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header-contents">
        <Link to="/" className="logo">My Portfolio</Link>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/lunch">Lunch Roulette</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;