import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
//Create a “store” prop for the Provider component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
      <Provider store ={store}>
        <App />
        </Provider>
    </React.StrictMode>
);

/*
 index.js (which is the root of your React application)
 QQ
 prop? 2.8
q1 l8-l13 Wrap the App component with the Provider component that you just imported from react-redux

Create a “store” prop for the Provider component, and supply it the value of your redux store

 */