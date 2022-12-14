import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    /* The contents to be rendered (ie, the entire App) needs to be wrapped in essentially an entire div in order to be rendered on the screen. */
    <div>
    {/* HashRouter allows this React app to be functional with GitHub pages, GitHub doesn't allow sharing to their servers. This stores the location to a "hash" instead to bypass this issue, and allows for the illusion of a single-page application. */}
     <HashRouter>
      <App />
    </HashRouter>
    </div>

);

reportWebVitals();
