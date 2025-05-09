import React from 'react';
import ReactDOM from 'react-dom/client';
import { App, PageComponent } from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <PageComponent />
  </React.StrictMode>
);
