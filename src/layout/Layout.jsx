// src/layout/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import './layout.scss';

const Layout = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />

      <Analytics />
    </div>
  );
};

export default Layout;