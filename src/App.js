import { useEffect } from "react";
import fetchMenu from "./services/fetchMenu";

import { ConnectedRouter } from "connected-react-router";
import { Provider } from "react-redux";
import store from "./sdk/store";
import history from "./sdk/history";
import Routes from "./routes";

export default function App() {
  useEffect(() => {
    fetchMenu();
  }, []);
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className="App">
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}
