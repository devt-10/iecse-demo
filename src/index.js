import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

window.onbeforeunload = function () {
	window.scrollTo(0, 0);
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);