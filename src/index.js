import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter, BrowserRouter } from "react-router-dom";
import "./global.styles.css"
import { GlobalContextProvider } from './context/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  // <HashRouter>
  <GlobalContextProvider>
    <BrowserRouter>
      <React.StrictMode>
        
          <App />
        {/* </GlobalContextProvider> */}
      </React.StrictMode>
    </BrowserRouter>
    </GlobalContextProvider>
  // </HashRouter>
);

