import React from 'react';
import logo from './logo.svg';
import './App.css';

import Converter from './component/Converter'

function App() {
  return (
    <div className="App">
      <div className="line">
        <Converter coinA="USD" coinB="BRL"/>
        <Converter coinA="BRL" coinB="USD"/>
      </div>
      <div className="line">
        <Converter coinA="CAD" coinB="BRL"/>
        <Converter coinA="BRL" coinB="CAD"/>      
      </div>
      <div className="line">
        <Converter coinA="EUR" coinB="BRL"/>
        <Converter coinA="BRL" coinB="EUR"/>        
      </div>
    </div>
  );
}

export default App;