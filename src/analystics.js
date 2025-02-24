import ReactGA from "react-ga4";

// Initialize GA4 with your Measurement ID
export const initGA = () => {
  ReactGA.initialize("G-NWJ0W6FEK0",{
    debug: true, 
  });
};

// Track page views
export const trackPageView = (path) => {
  ReactGA.send({ hitType: "pageview", page: path });
};

// Track custom events
export const trackEvent = (category, action, label, value) => {
  ReactGA.event({
    category: category, // Required
    action: action, // Required
    label: label, // Optional
    value: value, // Optional
  });
};

// Track user scroll depth
export const trackScrollDepth = (percentage) => {
  ReactGA.event({
    category: "Scroll",
    action: "User scrolled",
    label: `Scrolled ${percentage}%`,
    value: percentage,
  });
};
