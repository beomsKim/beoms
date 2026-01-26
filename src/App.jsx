import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home/Home';
import LunchRoulette from './pages/LunchRoulette/LunchRoulette';
import ReactGA from "react-ga4";

const basename = import.meta.env.MODE === 'development' ? '/' : '/beoms';
const GA_ID = "G-N7Z4W8YEET"; // 발급받은 ID 넣기
ReactGA.initialize(GA_ID);

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