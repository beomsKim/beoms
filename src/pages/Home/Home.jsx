import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="home-card"
      >
        <h1 className="home-title">맛점 가이드</h1>
        <p className="home-description">
          결정 장애를 해결해 드릴게요.<br />
          버튼을 눌러 메뉴를 추천받으세요!!!!!
        </p>
        <button
          onClick={() => navigate('/lunch')}
          className="home-button"
        >
          점심 메뉴 추천받기
        </button>
      </motion.div>
    </div>
  );
};

export default Home;