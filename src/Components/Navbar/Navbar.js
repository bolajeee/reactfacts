import React from "react";
import "./styles.css"

export default function Navbar(props) {

    const {darkBackground} = props

       const styles = {
        backgroundColor: darkBackground ? "#ffffff" : "#00000",
        color: darkBackground ? "#000000" : "#ffffff",
        borderColor: darkBackground ? "#000000" : "#ffffff"
}
    return <>
        <div style={styles} className="navbar">
            <div className="logo">
            <img src="../images/logo.png"></img>
            <p className="logoText">React Facts</p>
            </div>

            <div className="backgPicker">
            <p>Light</p>
            <div className="toggleSwitch"></div>
            <p>Dark</p>
            </div>
            
        </div>
    </>
}