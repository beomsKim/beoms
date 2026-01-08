import React from 'react';
const basename = import.meta.env.MODE === 'development' ? '/' : '/beoms';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import LunchRoulette from './pages/LunchRoulette/LunchRoulette';

export default function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />

          <Route path="/lunch" element={<LunchRoulette />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}