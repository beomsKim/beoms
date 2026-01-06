// src/pages/Roulette/Roulette.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MENU_DATA } from './menuData';
import './LunchRoulette.css';

const Roulette = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [yesterdayMenu, setYesterdayMenu] = useState('');
  const [heavy, setHeavy] = useState(null);
  const [result, setResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const startSpin = () => {
    setIsSpinning(true);
    setResult(null);

    const filtered = MENU_DATA.filter(
      (item) => item.heavy === heavy && item.name !== yesterdayMenu.trim()
    );

    setTimeout(() => {
      const finalPick =
        filtered.length > 0
          ? filtered[Math.floor(Math.random() * filtered.length)]
          : { name: '추천 메뉴 없음', comment: '다시 골라볼까요?' };
      setResult(finalPick);
      setIsSpinning(false);
    }, 1800);
  };

  return (
    <div className="roulette-container">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="s1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="roulette-card"
          >
            <h1 className="roulette-title">어제 먹은 점심은?</h1>
            <input
              className="roulette-input"
              placeholder="예: 김치찌개"
              value={yesterdayMenu}
              onChange={(e) => setYesterdayMenu(e.target.value)}
            />
            <button onClick={() => setStep(2)} className="roulette-button">
              다음
            </button>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="s2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            className="roulette-card"
          >
            <h1 className="roulette-title">어떻게 먹고 싶어?</h1>
            
            <div className="choice-box" onClick={() => setHeavy(true)}>
              <div className={`check-circle ${heavy === true ? 'active' : ''}`}>
                {heavy === true && <Check size={14} color="white" />}
              </div>
              <span>든든하게 먹을래요</span>
            </div>

            <div className="choice-box" onClick={() => setHeavy(false)}>
              <div className={`check-circle ${heavy === false ? 'active' : ''}`}>
                {heavy === false && <Check size={14} color="white" />}
              </div>
              <span>가볍게 먹을래요</span>
            </div>

            <button
              disabled={heavy === null}
              onClick={() => setStep(3)}
              className="roulette-button"
            >
              룰렛 확인하기
            </button>
          </motion.div>
        )}

        {step === 3 && (
          <motion.div
            key="s3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="roulette-card"
          >
            <h1 className="roulette-title" style={{ textAlign: 'center' }}>
              {isSpinning ? '고르는 중...' : '오늘의 메뉴!'}
            </h1>

            <div className="slot-window">
              <motion.div
                animate={isSpinning ? { y: [-2000, 0] } : { y: 0 }}
                transition={
                  isSpinning
                    ? { duration: 0.5, repeat: Infinity, ease: 'linear' }
                    : { type: 'spring', stiffness: 200, damping: 20 }
                }
              >
                {isSpinning
                  ? [...Array(50)].map((_, i) => (
                      <div key={i} className="slot-item">🍱 맛집 찾는 중 🍱</div>
                    ))
                  : <div className="slot-item">{result?.name || 'Ready?'}</div>}
              </motion.div>
            </div>

            {!isSpinning && result && (
              <p className="result-comment">{result.comment}</p>
            )}

            <button
              onClick={isSpinning ? null : startSpin}
              className="roulette-button"
              style={{ marginTop: '20px' }}
            >
              {result ? '다시 돌리기' : '룰렛 돌리기'}
            </button>

            <div className="go-main" onClick={() => navigate('/')}>
              메인으로 가기
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Roulette;