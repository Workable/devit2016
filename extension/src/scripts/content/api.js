export default {
  sendMessage(msg) {
    chrome.runtime.sendMessage(msg);
  },

  onMessage(listener) {
    chrome.runtime.onMessage.addListener(listener);
  },

  connect(name = 'default_port') {
    return chrome.runtime.connect({ name });
  }
};
