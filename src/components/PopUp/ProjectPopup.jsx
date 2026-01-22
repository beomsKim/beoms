import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './ProjectPopup.scss';

const ProjectPopup = ({ isOpen, item, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && item && (
        <div className="popup-overlay" onClick={onClose}>
          <motion.div 
            className="popup-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()} // 팝업 내부 클릭 시 닫힘 방지
          >
            <button className="close-btn" onClick={onClose}>×</button>
            <div className="popup-header">
              <h3>{item.title}</h3>
              <span className="badge">Closed Service</span>
            </div>
            <div className="popup-body">
              {/* 데이터에 내용이 있으면 보여주고 없으면 기본 문구 */}
              <p>{item.closedMessage || "현재 서비스가 종료되어 상세 페이지 이동이 제한됩니다."}</p>
            </div>
            <button className="confirm-btn" onClick={onClose}>확인</button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectPopup;