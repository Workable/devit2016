export default api => store => next => action => {
  if (typeof action !== 'function') {
    const {background, foreground, tab, ...rest} = action;
    if (background) {
      api.sendMessage(rest);
    } else if (foreground && tab) {
      api.sendMessageToTab(action.tab.id, rest);
    }
  }
  return next(action);
};
