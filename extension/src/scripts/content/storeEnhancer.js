export default function storeEnhancer(api) {
  return (storeCreator) => {
    return (reducer, initialState) => {
      const store = Object.assign(storeCreator(reducer, initialState), {api});

      const listener = request => store.dispatch(request);

      const onDisconnect = () => {
        store.port = null;
        console.log('Disconnected from background script');
      };

      api.onMessage(listener);

      const port = api.connect();

      port.onMessage.addListener(listener);
      port.onDisconnect.addListener(onDisconnect);

      store.port = port;

      console.log('Connected to background script');

      return store;
    };
  };
}
