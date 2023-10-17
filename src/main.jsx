import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot from 'react-dom/client'

import App from './App';

const root = document.getElementById('root');

const reactRoot = createRoot(root); // Create a root instance

reactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
