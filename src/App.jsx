import React from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import LunchRoulette from './LunchRoulette';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#f2f4f6',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          width: '360px',
          padding: '40px 24px',
          backgroundColor: 'white',
          borderRadius: '32px',
          textAlign: 'center',
          boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
        }}
      >
        <h1 style={{ color: '#333', fontSize: '28px', marginBottom: '12px' }}>
          맛점 가이드
        </h1>
        <p style={{ color: '#666', marginBottom: '32px', lineHeight: '1.5' }}>
          결정 장애를 해결해 드릴게요.<br />
          버튼을 눌러 메뉴를 추천받으세요!!!!!
        </p>
        <button
          onClick={() => navigate('/lunch')}
          style={{
            width: '100%',
            padding: '18px',
            borderRadius: '18px',
            border: 'none',
            color: 'white',
            fontWeight: 'bold',
            fontSize: '16px',
            backgroundColor: '#3182f6',
            cursor: 'pointer',
          }}
        >
          점심 메뉴 추천받기
        </button>
      </motion.div>
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/lunch" element={<LunchRoulette />} />
      </Routes>
    </BrowserRouter>
  );
}