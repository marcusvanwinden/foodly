import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from '../common/components/app/app';

ReactDOM.hydrateRoot(
  document.getElementById('root') as Element,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
