import { useEffect } from "react";

export const useAnalytics = () => {
  // Track page view
  const pageView = (title) => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: title || document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  };

  // Track custom event
  const event = (action, params) => {
    if (window.gtag) {
      window.gtag("event", action, params);
    }
  };

  return {
    pageView,
    event,
  };
};

// Initialize analytics on app mount
export const useInitAnalytics = () => {
  useEffect(() => {
    // Track initial page view
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }
  }, []);
};
