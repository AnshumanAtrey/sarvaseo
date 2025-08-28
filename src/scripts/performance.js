// Performance optimizations
document.addEventListener('DOMContentLoaded', () => {
  // Lazy load images if any are added later
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // Preload critical resources on user interaction
  let hasInteracted = false;
  const preloadOnInteraction = () => {
    if (hasInteracted) return;
    hasInteracted = true;

    // Preload any additional resources that might be needed
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = '/favicon.svg';
    document.head.appendChild(link);
  };

  // Listen for first user interaction
  ['mousedown', 'touchstart', 'keydown'].forEach(event => {
    document.addEventListener(event, preloadOnInteraction, { once: true });
  });

  // Optimize scroll performance
  let ticking = false;
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        // Add scroll-based optimizations here if needed
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Service worker registration for caching (optional)
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Register service worker if available
      // navigator.serviceWorker.register('/sw.js');
    });
  }

  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    document.documentElement.style.setProperty('--animation-duration', '0.01ms');
    document.documentElement.style.setProperty('--transition-duration', '0.01ms');
  }

  // Monitor performance
  if ('PerformanceObserver' in window) {
    // Monitor Largest Contentful Paint
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime);
    });
    
    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Fallback for browsers that don't support LCP
    }

    // Monitor First Input Delay
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      entries.forEach(entry => {
        console.log('FID:', entry.processingStart - entry.startTime);
      });
    });
    
    try {
      fidObserver.observe({ entryTypes: ['first-input'] });
    } catch (e) {
      // Fallback for browsers that don't support FID
    }
  }
});