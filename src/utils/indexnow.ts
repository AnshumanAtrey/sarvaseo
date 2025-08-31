// IndexNow utility functions for instant search engine indexing

const INDEXNOW_KEY = '0177dad855f84bc3900bf90ee223115c';
const SITE_HOST = 'sarvaseo.com';
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

/**
 * Submit a single URL to IndexNow for instant indexing
 */
export async function submitUrlToIndexNow(url: string): Promise<boolean> {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: [url]
      })
    });

    return response.ok;
  } catch (error) {
    console.error('IndexNow submission failed:', error);
    return false;
  }
}

/**
 * Submit multiple URLs to IndexNow for instant indexing
 */
export async function submitUrlsToIndexNow(urls: string[]): Promise<boolean> {
  try {
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify({
        host: SITE_HOST,
        key: INDEXNOW_KEY,
        keyLocation: KEY_LOCATION,
        urlList: urls
      })
    });

    return response.ok;
  } catch (error) {
    console.error('IndexNow bulk submission failed:', error);
    return false;
  }
}

/**
 * Submit current page to IndexNow (client-side)
 */
export function submitCurrentPageToIndexNow(): void {
  if (typeof window !== 'undefined') {
    const currentUrl = window.location.href;
    
    fetch('/api/indexnow', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: currentUrl
      })
    }).then(response => {
      if (response.ok) {
        console.log('Page submitted to IndexNow successfully');
      }
    }).catch(error => {
      console.error('Failed to submit page to IndexNow:', error);
    });
  }
}

/**
 * Auto-submit page to IndexNow on page load
 */
export function autoSubmitToIndexNow(): void {
  if (typeof window !== 'undefined') {
    // Submit after page is fully loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        submitCurrentPageToIndexNow();
      }, 2000); // Wait 2 seconds to avoid impacting page performance
    });
  }
}