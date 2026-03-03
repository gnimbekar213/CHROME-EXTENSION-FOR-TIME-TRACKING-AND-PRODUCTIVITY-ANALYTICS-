let startTime = Date.now();

chrome.tabs.onActivated.addListener(() => {
  startTime = Date.now();
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo) => {
  if (changeInfo.status === "complete") {
    startTime = Date.now();
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getTime") {
    const timeSpent = Math.floor((Date.now() - startTime) / 1000);
    sendResponse({ timeSpent });
  }
  return true;
});