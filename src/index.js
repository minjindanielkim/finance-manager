import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ClerkProvider } from '@clerk/clerk-react';
import { Analytics } from "@vercel/analytics/react"

const publicKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ClerkProvider publishableKey={publicKey}>
    <App />
    <Analytics />
  </ClerkProvider>
);

reportWebVitals();
