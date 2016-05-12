import {PUSH_STATE} from 'shared/actionTypes';

export default function storeEnhancer(api) {
  return (storeCreator) => {
    return (reducer, initialState) => {
      const store = Object.assign(storeCreator(reducer, initialState), {ports: {}, api});

      const listener = (request, sender) => {
        store.dispatch({ ...request, tab: sender.tab });
      }

      api.onMessage(listener);

      api.onConnect(port => {
        const tabID = port.sender.tab.id;

        store.ports[tabID] = port;

        console.log(`Connected with tab: ${tabID}`);

        const sendState = () => {
          port.postMessage({
            type: PUSH_STATE,
            payload: store.getState()
          });
        };

        const unsubscribe = store.subscribe(sendState);

        port.onDisconnect.addListener(() => {
          unsubscribe();
          delete store.ports[tabID];
          console.log(`Disconnected from tab: ${tabID}`);
        });

        sendState();
      });

      return store;
    };
  };
};
