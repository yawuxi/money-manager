// react
import React from "react";
import { createRoot } from "react-dom/client";

// components
import App from './App'

// styles
import './index.scss'

const root = createRoot(document.getElementById('root'))
root.render(<App />)