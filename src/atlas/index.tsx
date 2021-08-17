import React from 'react';
import ReactDOM from 'react-dom';
import './../assets/styles/index.css';
import { AtlasApp } from './AtlasApp';

ReactDOM.render(
  <React.StrictMode>
    <AtlasApp></AtlasApp>
  </React.StrictMode>,
  document.getElementById('atlas')
);
