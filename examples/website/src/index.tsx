// import GitHubCorners from '@uiw/react-github-corners';
// import ReactDOM from 'react-dom/client';
import 'antd/dist/reset.css';
import React from 'react';
import ReactClient from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import Route from './route';

ReactClient.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Route />
    </HashRouter>
  </React.StrictMode>,
);
