/*import React from "react";
import ReactDOM from "react-dom";  // ✅ Use "react-dom/client"
import "./index.css";
import { Provider } from "react-redux";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import App from "./App";

import authReducer from "./Controllers/Redux/authSlice";
import bugReducer from "./Controllers/Redux/bugSlice";
import userReducer from "./Controllers/Redux/userSlice";

// ✅ Combine all reducers
const reducer = combineReducers({
  auth: authReducer,
  bugs: bugReducer,
  user: userReducer,
});

// ✅ Configure the Redux store
const store = configureStore({
  reducer,
});

// ✅ Use createRoot and remove duplicate render calls
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
*/

/*import React from "react";
import { createRoot } from "react-dom";
import { Provider } from "react-redux";
import store from "./Controllers/Redux/store";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container); // ✅ Correct for React 19

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
*/
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./Controllers/Redux/store"; // Ensure the path is correct
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

