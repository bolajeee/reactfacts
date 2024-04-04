import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Body from './Components/Body.js/Body';

function App() {
  let background = true
  
  const [darkBackground, setDarkBackground] = React.useState({ background })


  function handleClick() {    
        setDarkBackground(prevDarkBackground => {
            return !prevDarkBackground
        })
    
    }
    
  return (
    <div className="App">
      <Navbar handleClick={handleClick} darkBackground={darkBackground} />
      <Body darkBackground={darkBackground} />
    </div>
  );
}

export default App;
