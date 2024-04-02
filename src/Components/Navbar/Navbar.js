import React from "react";
import "./styles.css"

export default function Navbar() {
    const [darkBackground, setDarkBackground] = React.useState(true) 
    
    const styles = {
        backgroundColor: darkBackground ? "#fff" : "#000",
        color: darkBackground ? "#000000" : "#ffffff",
        borderColor: darkBackground ? "#000000" : "#ffffff"
     
    }
    
    function handleClick() {
        setDarkBackground(prevDarkBackground => {
            return !prevDarkBackground
        })

      

    }


    return <>
        <div style={styles} className="navbar">
            <div className="logo">
            <img src="../images/logo.png"></img>
            <p className="logoText">React Facts</p>
            </div>

            <div className="backgPicker">
            <p className={darkBackground? "#000": "dark"} >Light</p>
            <div onClick={handleClick} className="toggleSwitch"></div>
            <p className={darkBackground? "dark": "light"} >Dark</p>
            </div>
            
        </div>
    </>
}