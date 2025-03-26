import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';


// Create root instance
const container = document.getElementById('root');
const root = createRoot(container);

// Hybrid rendering logic
const renderApp = () => (
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

if (container.hasChildNodes()) {
  // Hydrate in production (after react-snap prerendering)
  root.hydrate(renderApp());
} else {
  // Initial render in development
  root.render(renderApp());
}

reportWebVitals();
