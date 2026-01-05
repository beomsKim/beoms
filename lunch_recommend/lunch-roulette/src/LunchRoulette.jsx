import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { MENU_DATA } from './MenuData';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#f2f4f6',
    color: '#333',
    fontFamily: 'Pretendard, sans-serif',
  },
  card: {
    width: '360px',
    padding: '40px 24px',
    backgroundColor: 'white',
    borderRadius: '32px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '8px',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    padding: '16px',
    borderRadius: '14px',
    border: '1px solid #eee',
    backgroundColor: '#f9fafb',
    fontSize: '16px',
    marginBottom: '24px',
    outline: 'none',
    boxSizing: 'border-box',
  },
  choiceBox: {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
    borderRadius: '14px',
    border: '1px solid #eee',
    marginBottom: '12px',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '18px',
    borderRadius: '18px',
    border: 'none',
    color: 'white',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    cursor: 'pointer',
    backgroundColor: '#3182f6',
  },
  slotWindow: {
    height: '80px',
    backgroundColor: '#f2f4f6',
    borderRadius: '20px',
    margin: '30px 0',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #e5e8eb',
  },
  slotItem: {
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '22px',
    fontWeight: '800',
    color: '#3182f6',
  },
};

const LunchRoulette = () => {
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
    <div style={styles.container}>
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="s1"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -50, opacity: 0 }}
            style={styles.card}
          >
            <h1 style={styles.title}>어제 먹은 점심은?</h1>
            <input
              style={styles.input}
              placeholder="예: 김치찌개"
              value={yesterdayMenu}
              onChange={(e) => setYesterdayMenu(e.target.value)}
            />
            <button onClick={() => setStep(2)} style={styles.button}>
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
            style={styles.card}
          >
            <h1 style={styles.title}>어떻게 먹고 싶어?</h1>
            <div style={styles.choiceBox} onClick={() => setHeavy(true)}>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  marginRight: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: heavy === true ? 'none' : '1px solid #ddd',
                  backgroundColor: heavy === true ? '#3182f6' : '#fff',
                }}
              >
                {heavy === true && <Check size={14} color="white" />}
              </div>
              <span>든든하게 먹을래요</span>
            </div>

            <div style={styles.choiceBox} onClick={() => setHeavy(false)}>
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  borderRadius: '50%',
                  marginRight: '12px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: heavy === false ? 'none' : '1px solid #ddd',
                  backgroundColor: heavy === false ? '#3182f6' : '#fff',
                }}
              >
                {heavy === false && <Check size={14} color="white" />}
              </div>
              <span>가볍게 먹을래요</span>
            </div>

            <button
              disabled={heavy === null}
              onClick={() => setStep(3)}
              style={{
                ...styles.button,
                backgroundColor: heavy === null ? '#ccc' : '#3182f6',
              }}
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
            style={styles.card}
          >
            <h1 style={{ textAlign: 'center', fontSize: '24px', fontWeight: 'bold' }}>
              {isSpinning ? '고르는 중...' : '오늘의 메뉴!'}
            </h1>

            <div style={styles.slotWindow}>
              <motion.div
                animate={isSpinning ? { y: [-2000, 0] } : { y: 0 }}
                transition={
                  isSpinning
                    ? { duration: 0.5, repeat: Infinity, ease: 'linear' }
                    : { type: 'spring', stiffness: 200, damping: 20 }
                }
              >
                {isSpinning
                  ? [...Array(10)].map((_, i) => (
                      <div key={i} style={styles.slotItem}>🍱 맛집 찾는 중 🍱</div>
                    ))
                  : <div style={styles.slotItem}>{result?.name || 'Ready?'}</div>}
              </motion.div>
            </div>

            {!isSpinning && result && (
              <p style={{ fontWeight: '600', color: '#4e5968' }}>{result.comment}</p>
            )}

            <button
              onClick={isSpinning ? null : startSpin}
              style={{ ...styles.button, marginTop: '20px' }}
            >
              {result ? '다시 돌리기' : '룰렛 돌리기'}
            </button>

            <div
              onClick={() => navigate('/')}
              style={{
                marginTop: '20px',
                color: '#8b95a1',
                fontSize: '14px',
                cursor: 'pointer',
              }}
            >
              메인으로 가기
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LunchRoulette;