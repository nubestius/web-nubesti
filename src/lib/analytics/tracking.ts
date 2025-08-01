// Google Analytics Event Tracking Helper
// This file provides functions to track specific user interactions

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    trackSecurityDemo: () => void;
    trackPricingView: () => void;
    trackContactForm: () => void;
  }
}

// Enhanced event tracking for cybersecurity-focused actions
export const trackingEvents = {
  // Demo and trial tracking
  securityDemo: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'security_demo_request', {
        event_category: 'engagement',
        event_label: 'cybersecurity_demo',
        value: 1
      });
    }
  },

  // Pricing interest tracking
  pricingView: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pricing_page_view', {
        event_category: 'interest',
        event_label: 'pricing_engagement',
        value: 1
      });
    }
  },

  // Contact and lead generation
  contactForm: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_form_submit', {
        event_category: 'conversion',
        event_label: 'lead_generation',
        value: 10
      });
    }
  },

  // Product feature interaction
  featureEngagement: (featureName: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'feature_interaction', {
        event_category: 'product',
        event_label: featureName,
        value: 2
      });
    }
  },

  // AI Red Team specific tracking
  redTeamInterest: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'ai_redteam_interest', {
        event_category: 'core_service',
        event_label: 'red_team_engagement',
        value: 5
      });
    }
  },

  // Integration exploration
  integrationInterest: (integrationType: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'integration_exploration', {
        event_category: 'technical',
        event_label: integrationType,
        value: 3
      });
    }
  },

  // Blog and content engagement
  contentEngagement: (contentType: string, contentTitle: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'content_engagement', {
        event_category: 'education',
        event_label: `${contentType}: ${contentTitle}`,
        value: 2
      });
    }
  },

  // Language switching (multilingual tracking)
  languageSwitch: (fromLang: string, toLang: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'language_switch', {
        event_category: 'user_preference',
        event_label: `${fromLang}_to_${toLang}`,
        value: 1
      });
    }
  },

  // Video engagement
  videoPlay: (videoTitle: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'video_play', {
        event_category: 'media',
        event_label: videoTitle,
        value: 3
      });
    }
  },

  // Newsletter signup
  newsletterSignup: () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'newsletter_signup', {
        event_category: 'engagement',
        event_label: 'email_subscription',
        value: 5
      });
    }
  }
};

// Utility function to add tracking to existing buttons
export const addTrackingToButton = (selector: string, eventFunction: () => void) => {
  if (typeof window !== 'undefined') {
    const button = document.querySelector(selector);
    if (button) {
      button.addEventListener('click', eventFunction);
    }
  }
};

// Auto-track common elements when DOM is loaded
export const initAutoTracking = () => {
  if (typeof window !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      // Auto-track pricing links
      document.querySelectorAll('a[href*="pricing"]').forEach(link => {
        link.addEventListener('click', trackingEvents.pricingView);
      });

      // Auto-track contact links
      document.querySelectorAll('a[href*="contact"]').forEach(link => {
        link.addEventListener('click', trackingEvents.contactForm);
      });

      // Auto-track demo buttons
      document.querySelectorAll('[data-content*="Demo"], [data-content*="demo"]').forEach(button => {
        button.addEventListener('click', trackingEvents.securityDemo);
      });

      // Auto-track AI Red Team links
      document.querySelectorAll('a[href*="ai-red-team"]').forEach(link => {
        link.addEventListener('click', trackingEvents.redTeamInterest);
      });

      // Auto-track video modals
      document.querySelectorAll('.video-modal-toggle').forEach(button => {
        button.addEventListener('click', () => {
          trackingEvents.videoPlay('How it works demo');
        });
      });
    });
  }
};

// Initialize auto-tracking
if (typeof window !== 'undefined') {
  initAutoTracking();
}
