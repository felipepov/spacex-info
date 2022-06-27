import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import './App.scss';


// import reportWebVitals from './reportWebVitals';

document.body.classList.add('bg-primary');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
