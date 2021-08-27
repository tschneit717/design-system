import React from 'react';
import ReactDOM from 'react-dom';
import './../assets/styles/index.css';
import { AtlasApp } from './AtlasApp';

// Start the mocking conditionally.
if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./utils/mocks/browser');
  worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <AtlasApp></AtlasApp>
  </React.StrictMode>,
  document.getElementById('atlas')
);
