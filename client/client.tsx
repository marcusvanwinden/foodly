import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/app/app';

ReactDOM.hydrateRoot(document.getElementById('root') as Element, <App />);
