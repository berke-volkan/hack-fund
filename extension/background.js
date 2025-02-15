chrome.webNavigation.onCompleted.addListener((details) => {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      files: ['https://raw.githubusercontent.com/berke-volkan/hack-fund/refs/heads/web-extension/server/google_ads.js']
    }, () => {
      if (chrome.runtime.lastError) {
        console.error("injection failed: ", chrome.runtime.lastError);
      } else {
        console.log("Ad injected into tab:", details.tabId);
      }
    });
  }, { url: [{ urlMatches: 'http://*/*' }, { urlMatches: 'https://*/*' }] });
