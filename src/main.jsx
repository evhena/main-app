import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MainLayout from './MainLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Suspense fallback={'loading'}>
      <MainLayout />
    </Suspense>
  </React.StrictMode>
);
