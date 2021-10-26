import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// This is the entrypoint used by React to render the react component App from App.js 
// into the #root element in public/html. There is no need to modify this, as long as
// your app is still exported from App.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
