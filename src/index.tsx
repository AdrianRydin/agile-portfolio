import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Landing from './components/landing-page';
import Team from './components/team';
import Contact from './components/contact-us';
import FindUs from './components/find-us';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Landing/>
    <Team/>
    <Contact/>
    <FindUs/>
  </React.StrictMode>
);
