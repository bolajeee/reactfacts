import React from "react";
import "./navStyles.css"
import Switch from "../switch/Switch";


export default function Navbar(props) {
    const [darkBackground, setDarkBackground] = React.useState({this.props.background})
    
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
            <p style={{color: darkBackground? "#000": "#808080"}} >Light</p>

             <Switch clicked={handleClick} dback={darkBackground} />

            <p style={{color: darkBackground? "#808080": "#fff"}} >Dark</p>
            </div>
            
        </div>
    </>
}