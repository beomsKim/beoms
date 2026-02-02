import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from "react-ga4";
import useScrollTop from "./hooks/useScrollTop";
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import LunchRoulette from './pages/LunchRoulette/LunchRoulette';
import Gallery from './pages/Gallery/Gallery';

const GA_ID = "G-N7Z4W8YEET";
ReactGA.initialize(GA_ID);

export default function App() {

  useScrollTop(); // ✅ 이제 Router 안

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/lunch" element={<LunchRoulette />} />
        <Route path="/gallery" element={<Gallery />} />
      </Route>
    </Routes>
  );
}