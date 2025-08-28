// Global error handling and validation
class ErrorHandler {
  constructor() {
    this.init();
  }

  init() {
    // Global error handler
    window.addEventListener('error', (event) => {
      console.error('Global error:', event.error);
      this.showUserFriendlyError('Something went wrong. Please refresh the page.');
    });

    // Unhandled promise rejection handler
    window.addEventListener('unhandledrejection', (event) => {
      console.error('Unhandled promise rejection:', event.reason);
      this.showUserFriendlyError('An unexpected error occurred. Please try again.');
    });

    // Validate critical elements on load
    this.validateCriticalElements();
  }

  validateCriticalElements() {
    const criticalElements = [
      '#modules-section'
    ];

    criticalElements.forEach(selector => {
      const element = document.querySelector(selector);
      if (!element) {
        console.warn(`Critical element missing: ${selector}`);
      }
    });
  }

  showUserFriendlyError(message) {
    // Create error notification
    const errorDiv = document.createElement('div');
    errorDiv.className = 'fixed top-4 right-4 bg-white/90 backdrop-blur-sm border border-gray-400 text-gray-900 px-4 py-3 rounded z-50';
    errorDiv.innerHTML = `
      <div class="flex items-center">
        <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <span>${message}</span>
        <button class="ml-4 text-gray-600 hover:text-gray-900" onclick="this.parentElement.parentElement.remove()">
          ×
        </button>
      </div>
    `;

    document.body.appendChild(errorDiv);

    // Auto-remove after 5 seconds
    setTimeout(() => {
      if (errorDiv.parentElement) {
        errorDiv.remove();
      }
    }, 5000);
  }

  validateLocalStorage() {
    try {
      const testKey = 'test';
      localStorage.setItem(testKey, 'test');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn('localStorage not available:', e);
      return false;
    }
  }

  // Graceful degradation for missing features
  checkFeatureSupport() {
    const features = {
      localStorage: this.validateLocalStorage(),
      intersectionObserver: 'IntersectionObserver' in window,
      serviceWorker: 'serviceWorker' in navigator,
      customElements: 'customElements' in window
    };

    console.log('Feature support:', features);
    return features;
  }
}

// Initialize error handler
document.addEventListener('DOMContentLoaded', () => {
  window.errorHandler = new ErrorHandler();
});