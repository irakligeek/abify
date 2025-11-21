// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-Q208LW3FKS';

// Track page views
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    });
  }
};

// Track custom events
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  event({
    action: 'button_click',
    category: 'engagement',
    label: `${buttonName}_${location}`,
  });
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  event({
    action: 'form_submit',
    category: 'conversion',
    label: formName,
  });
};

// Track demo video views
export const trackDemoVideoClick = () => {
  event({
    action: 'demo_video_click',
    category: 'engagement',
    label: 'watch_demo_video_button',
  });
};

// Track CTA clicks
export const trackCTAClick = (ctaLocation) => {
  event({
    action: 'cta_click',
    category: 'conversion',
    label: ctaLocation,
  });
  
  // Track Google Ads conversion for dashboard CTAs
  if (typeof window !== 'undefined' && window.gtag_report_conversion) {
    window.gtag_report_conversion();
  }
};