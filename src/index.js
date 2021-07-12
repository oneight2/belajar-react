import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import Navbar from './reactjsdasar/Navbar'
// import Variable from './reactjsdasar/Variable';
// import StateProps from './reactjsdasar/StateProps';
// import Map from './reactjsdasar/Map';
// import Lifecyle from './reactjsdasar/Lifecyle';

import 'bootstrap/dist/css/bootstrap.min.css';
import Crud from './crud'
import Navbarcomponent from './crud/Navbarcomponent'

ReactDOM.render(
  <React.StrictMode>
    {/* <Navbar/>
    <App />
    <Variable/>
    <StateProps/> */}
    {/* <Map/> */}
    {/* <Lifecyle/> */}
    <Navbarcomponent/>
    <Crud/>
  </React.StrictMode>,
  document.getElementById('root')
);
