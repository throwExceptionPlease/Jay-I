import React from "react";
import ReactDOM from "react-dom/client";
import "./index.module.css";
import App from "./App.tsx";

const rootElement = document.getElementById("root")

const root = ReactDOM.createRoot(rootElement as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)