import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./global.styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <HashRouter>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  // </HashRouter>
);

