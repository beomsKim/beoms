import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackClick } from "../../utils/googleAnalytics";
import './ProjectPopup.scss';

const ProjectPopup = ({ isOpen, item, onClose }) => {
  // 팝업 열림 여부에 따라 헤더 z-index를 팝업 dim 아래로 동적 조정
  useEffect(() => {
    const header = document.querySelector('.header');
    if (!header) return;
    if (isOpen) {
      header.style.zIndex = '1';
    } else {
      header.style.zIndex = '';
    }
    return () => {
      header.style.zIndex = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <div
          className="popup-overlay"
          onClick={() => {
            trackClick("popup_close_dim");
            onClose();
          }}
        >
          <motion.div 
            className="popup-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫힘 방지
          >
            <button
              className="close-btn"
              onClick={() => {
                trackClick("popup_close_x");
                onClose();
              }}
            >
              ×
            </button>
            <div className="popup-header">
              <h3>{item.title}</h3>
              {item.isClosed && <span className="badge">Closed</span>}
            </div>
            <div className="popup-body">
              <p><strong>Period</strong> {item.date}</p>
              {item.contribution && (
                <p><strong>Work</strong> {item.contribution}</p>
              )}
              <p><strong>Role</strong> {item.role}</p>
              
              <div className="message-box">
                {(item.description || "상세 내용을 확인해보세요.")}
                {/* isClosed 여부에 따라 다른 메시지 노출 */}
                {(item.closedMessage || "")}
              </div>
            </div>
            <div className="popup-footer" style={{ display: 'flex', gap: '10px' }}>
              {/* 운영 중인 서비스일 때만 '서비스 이동' 버튼 노출 */}
              {!item.isClosed && item.path && (
                <a
                  className="confirm-btn"
                  href={item.path}
                  target={item.isExternal ? '_blank' : '_self'}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  onClick={() => trackClick(`popup_go_service_${item.title}`)}
                >
                  서비스 바로가기
                </a>
              )}
              <button
                className="cancel-btn"
                onClick={() => {
                  trackClick("popup_close_btn");
                  onClose();
                }}
              >
                닫기
              </button>              
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;