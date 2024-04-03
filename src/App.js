import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body.js/Body';

function App() {
  let background = true
    
  return (
    <div className="App">
      <Navbar background = {background}  />
      <Body  />
    </div>
  );
}

export default App;
