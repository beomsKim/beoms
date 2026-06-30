import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { trackClick } from "../../utils/googleAnalytics";
import './ProjectPopup.scss';

const ProjectPopup = ({ isOpen, item, onClose }) => {
  // 링크 이동 함수
  const goToService = () => {
    if (!item.path) return;
    if (item.isExternal) {
      window.open(item.path, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = item.path;
    }
  };
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
              {!item.isClosed && (
                <button
                  className="confirm-btn"
                  onClick={() => {
                      trackClick("popup_go_service" + `_${item.title}`);
                      goToService();
                    }
                  }
                >
                  서비스 바로가기
                </button>
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