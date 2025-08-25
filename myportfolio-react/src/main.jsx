import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { SkinProvider } from "./context/SkinProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SkinProvider>
      <App />
    </SkinProvider>
  </React.StrictMode>
);
