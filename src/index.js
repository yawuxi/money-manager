// react
import React from "react";
import { createRoot } from "react-dom/client";

// additional functional
import { BrowserRouter } from "react-router-dom";

// components
import App from './App'

// styles
import './index.scss'

const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)