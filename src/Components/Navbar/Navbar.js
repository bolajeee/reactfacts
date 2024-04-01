import React from "react";
import "./styles.css"

export default function Navbar() {
    return <>
        <div className="navbar">
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