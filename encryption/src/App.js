import React from 'react';
import logo from './logo.svg';
import './App.css';
import * as CryptoJS from "crypto-js";
function App() {
  const handleClick = () => {
    console.log('Button clicked');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <button onClick={handleClick}>Click here to generate Encyption Key</button>
      </header>
    </div>
  );
}

export default App;
