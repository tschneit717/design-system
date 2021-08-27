import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';
import App from './App';

if (document.getElementById('root')) {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
