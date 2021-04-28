import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Navbar from './Navbar'
import Variable from './Variable';
import StateProps from './StateProps';

ReactDOM.render(
  <React.StrictMode>
    <Navbar/>
    <App />
    <Variable/>
    <StateProps/>
  </React.StrictMode>,
  document.getElementById('root')
);
