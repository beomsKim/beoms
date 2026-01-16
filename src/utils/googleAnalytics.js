// src/utils/googleAnalytics.js
import ReactGA from "react-ga4";

// 가장 많이 쓰는 클릭 추적
export const trackClick = (label) => {
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: label,
  });
};

// 특정 동작(예: 룰렛 결과 확인) 추적
export const trackAction = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};