// src/pages/Roulette/Roulette.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Share2, Download } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { trackClick } from "../../utils/googleAnalytics";
import html2canvas from 'html2canvas';
import { MENU_DATA } from '../../data/menuData';
import './lunchRoulette.scss';

const Roulette = () => {
  const navigate = useNavigate();
  const cardRef = useRef(null); // 캡처할 영역을 지정하기 위한 Ref
  const [step, setStep] = useState(0);
  const [yesterdayMenu, setYesterdayMenu] = useState('');
  const [heavy, setHeavy] = useState(null);
  const [result, setResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);
  const [searchParams] = useSearchParams();

  // URL 파라미터로 공유된 메뉴가 있는지 확인
  useEffect(() => {
    const menuParam = searchParams.get('menu');
    if (menuParam) {
      // MENU_DATA에서 해당 메뉴 찾기
      const sharedMenu = MENU_DATA.find(m => m.name === menuParam);
      if (sharedMenu) {
        setResult(sharedMenu);
        setStep(3); // 바로 결과 화면으로
      }
    }
  }, [searchParams]);

  // --- [공유 기능 함수들] ---
  // 1. 이미지로 저장하기
  const downloadAsImage = async () => {
    if (!cardRef.current) return;

    const canvas = await html2canvas(cardRef.current, {
      scale: 3,
      onclone: (clonedDoc) => {
        // 캡처용 복제본에서 텍스트가 들어있는 요소들을 선택
        const textElements = clonedDoc.querySelectorAll('.slot-item, .result-name');
        textElements.forEach(el => {
          el.style.display = 'flex';
          el.style.alignItems = 'center';
          el.style.justifyContent = 'center';
          // 폰트가 아래로 쏠린다면 미세하게 보정 (예: 2px 위로)
          el.style.paddingBottom = '2px'; 
        });
      }
    });

    const image = canvas.toDataURL('image/png', 1.0);
    const link = document.createElement('a');
    link.href = image;
    link.download = `점심추천_${result.name}.png`;
    link.click();
  };

  // 2. 결과 URL 공유하기 (Web Share API)
  const shareResult = async () => {
    // 현재 URL 뒤에 메뉴 ID나 이름을 파라미터로 붙임
    const shareUrl = `${window.location.origin}${window.location.pathname}?menu=${encodeURIComponent(result.name)}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: '오늘의 점심 메뉴!',
          text: `나의 점심 추천 메뉴는 [${result.name}]야! 너도 골라봐!`,
          url: shareUrl,
        });
      } catch (err) { console.log(err); }
    } else {
      await navigator.clipboard.writeText(shareUrl);
      alert('공유 링크가 클립보드에 복사되었어요!');
    }
  };

  // --- [룰렛 기능 함수들] ---
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
    }, 1000);
  };
  
  // URL 생성 함수
  const openMap = (platform) => {
    if (!result) return;

    const menuName = result.name;
    
    // 위치 정보를 가져오는 함수
    const getUrl = (lat, lng) => {
      // 위도(lat), 경도(lng)가 있으면 검색어에 포함하거나 좌표 기반 URL 생성
      // 대부분의 지도 앱은 검색어에 '근처'만 붙여도 현재 브라우저 위치를 자동으로 참고
      const query = encodeURIComponent(`근처 ${menuName} 맛집`);
      
      if (platform === 'naver') {
        // 좌표가 있다면 좌표 기반으로 검색 (더 정확함)
        return lat && lng 
          ? `https://map.naver.com/v5/search/${query}?c=${lng},${lat},15,0,0,0,dh`
          : `https://map.naver.com/v5/search/${query}`;
      } else {
        return lat && lng
          ? `https://www.google.com/maps/search/${query}/@${lat},${lng},15z`
          : `https://www.google.com/maps/search/${query}`;
      }
    };

    // 브라우저 GPS 활용
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          window.open(getUrl(latitude, longitude), '_blank');
        },
        () => {
          // 위치 권한 거부 시 그냥 일반 검색 열기
          window.open(getUrl(), '_blank');
        }
      );
    } else {
      // GPS 지원 안 하는 브라우저일 때
      window.open(getUrl(), '_blank');
    }
  };

  return (
    <div className="roulette-container">
      <AnimatePresence mode="wait">

        {/* 0단계: 인트로 가이드 화면 */}
        {step === 0 && (
          <motion.div
            key="s0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="roulette-card intro-card"
          >
            {/* 상단 장식 아이콘 애니메이션 */}
            <motion.div 
              className="intro-icon"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              🍱
            </motion.div>

            <motion.h1 
              className="roulette-title centered"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              오늘 뭐 먹지 가이드
            </motion.h1>

            <motion.p 
              className="intro-desc"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              매일 반복되는 점심 고민,<br />
              <strong>100가지 음식 데이터</strong>로 해결해 드릴게요! ✨
            </motion.p>

            <motion.div 
              className="guide-tip"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span>💡 어제 먹은 메뉴는 자동으로 제외돼요!</span>
            </motion.div>

            <motion.button 
              onClick={() => {
                trackClick("Roulette_step1");
                setStep(1);
              }} 
              className="roulette-button start-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              점심 메뉴 추천받기
            </motion.button>
          </motion.div>
        )}

        {/* 1단계: 어제 먹은 메뉴 입력 화면 */}
        {step === 1 && (
          <motion.div
            key="s1"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            className="roulette-card step-card"
          >
            <div className="step-indicator">1 / 2</div>
            
            <div className="title-group">
              <h1 className="roulette-title">어제 어떤 메뉴를 드셨나요?</h1>
              <p className="sub-title">중복된 메뉴는 추천에서 자동으로 제외해 드릴게요.</p>
            </div>

            <div className="input-wrapper">
              <span className="input-icon">🔍</span>
              <input
                className="roulette-input custom-input"
                placeholder="예: 김치찌개, 돈가스"
                value={yesterdayMenu}
                onChange={(e) => setYesterdayMenu(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && setStep(2)}
              />
            </div>

            <div className="input-helper">
              <span>먹은 게 기억나지 않는다면 비워두셔도 돼요!</span>
            </div>

            <button 
              onClick={() => {
                trackClick("Roulette_step2");
                setStep(2);
              }} 
              className="roulette-button next-btn"
            >
              다음 단계로
            </button>
          </motion.div>
        )}

        {/* 2단계: 메뉴 선택 화면 */}
        {step === 2 && (
          <motion.div
            key="s2"
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -30, opacity: 0 }}
            className="roulette-card step-card"
          >
            <div className="step-indicator">2 / 2</div>

            <div className="title-group">
              <h1 className="roulette-title">어떤 스타일이 당기시나요?</h1>
              <p className="sub-title">기분에 따라 오늘의 메뉴 스타일을 골라보세요.</p>
            </div>

            <div className="choice-container">
              <motion.div 
                className={`choice-card ${heavy === true ? 'active' : ''}`} 
                onClick={() => {
                  trackClick("Roulette_heavy");
                  setHeavy(true);
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="choice-icon">🍖</div>
                <div className="choice-info">
                  <span className="choice-label">든든하게</span>
                  <span className="choice-sub">고기나 밥으로 꽉 채운 한 끼</span>
                </div>
                <div className={`choice-check ${heavy === true ? 'active' : ''}`}>
                  {heavy === true && <Check size={16} color="white" strokeWidth={3} />}
                </div>
              </motion.div>

              <motion.div 
                className={`choice-card ${heavy === false ? 'active' : ''}`} 
                onClick={() => {
                  trackClick("Roulette_light");
                  setHeavy(false);
                }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="choice-icon">🥗</div>
                <div className="choice-info">
                  <span className="choice-label">가볍게</span>
                  <span className="choice-sub">속 편하고 깔끔한 스타일</span>
                </div>
                <div className={`choice-check ${heavy === false ? 'active' : ''}`}>
                  {heavy === false && <Check size={16} color="white" strokeWidth={3} />}
                </div>
              </motion.div>
            </div>

            <button
              disabled={heavy === null}
              onClick={() => {
                trackClick("Roulette_step3");
                setStep(3);
                // startSpin(); // 다음으로 넘어가면서 바로 룰렛 시작!
              }}
              className={`roulette-button confirm-btn ${heavy !== null ? 'ready' : ''}`}
            >
              룰렛 돌리기
            </button>
          </motion.div>
        )}
        
        {/* 3단계: 룰렛 결과 화면 */}
        {step === 3 && (
          <motion.div
            key="s3"
            ref={cardRef} // 여기를 캡처 영역으로 지정
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="roulette-card result-card"
          >
            <div className="result-header">
              <motion.span 
                animate={isSpinning ? { 
                  rotate: [0, 360]
                } : { 
                  rotate: 0 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: isSpinning ? Infinity : 0,
                  ease: "linear" 
                }}
                className="header-emoji"
              >
                {isSpinning ? "🌀" : "✨"}
              </motion.span>
              <h1 className="roulette-title centered">
                {isSpinning ? '메뉴를 고르고 있어요' : '오늘의 추천 메뉴!'}
              </h1>
            </div>

            <div className={`slot-machine ${isSpinning ? 'spinning' : ''}`}>
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
                        <div key={i} className="slot-item">🍱 맛집 찾는 중</div>
                      ))
                    : <div className="slot-item result-name">{result?.name || 'Ready?'}</div>}
                </motion.div>
              </div>
            </div>

            {!isSpinning && result && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }}
                className="result-info"
              >
                <p className="result-comment">{result.comment}</p>
                
                {/* 공유 버튼 */}
                <div className="share-action-group">
                  <button
                    onClick={() => {
                      trackClick("Roulette_image_down");
                      downloadAsImage();
                    }}
                    className="share-btn image"
                  >
                    <Download size={16} /> 이미지 저장
                  </button>
                  <button
                    onClick={() => {
                      trackClick("Roulette_result_share");
                      shareResult();
                    }}
                    className="share-btn link"
                  >
                    <Share2 size={16} /> 결과 공유
                  </button>
                </div>

                {/* 검색 버튼 */}
                <div className="map-action">
                  <span className="map-label">어디서 먹을까요?</span>
                  <div className="map-buttons">
                    <button
                      onClick={() => {
                        trackClick("Roulette_map_naver");
                        openMap('naver');
                      }}
                      className="map-btn naver"
                    >
                      네이버 지도
                    </button>
                    <button
                      onClick={() => {
                        trackClick("Roulette_map_google");
                        openMap('google');
                      }}
                      className="map-btn google"
                    >
                      구글 지도
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            <div className="action-group">
              <button
                onClick={() => {
                  trackClick("Roulette_start");
                  if (!isSpinning) {
                    startSpin();
                  }
                }}
                className={`roulette-button retry-btn ${isSpinning ? 'disabled' : ''}`}
              >
                {result ? '한 번 더 돌리기 🔄' : '룰렛 돌리기'}
              </button>

              <div 
                className="go-main-link" 
                onClick={() => {
                  trackClick("Roulette_reStart");
                  setStep(1);
                  setYesterdayMenu('');
                  setHeavy(null);
                  setResult(null);
                }}
              >
                처음부터 다시 하기
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Roulette;