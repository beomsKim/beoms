// src/utils/googleAnalytics.js
import ReactGA from "react-ga4";

export const trackClick = (label) => {
  ReactGA.event({
    category: "Button",
    action: "Click",
    label: label,
  });
  console.log(`GA Click Tracked: ${label}`);
};

export const trackAction = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label,
  });
};