export default {
  sendMessageToTab: (tabId, msg) => {
    chrome.tabs.sendMessage(tabId, msg);
  },

  onMessage: (listener) => {
    chrome.runtime.onMessage.addListener(listener);
  },

  onConnect: (listener) => {
    chrome.runtime.onConnect.addListener(listener);
  }
};
