import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import  { App, Apps } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apps />
    <App />
  </React.StrictMode>,
);
