import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import reducer from "./component/Reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

function Main() {
  const store = createStore(reducer);
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));

serviceWorker.unregister();
