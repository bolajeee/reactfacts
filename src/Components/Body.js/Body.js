import React from "react";
import "./styles.css"


export default function Body(props) {

    const styles = {
        backgroundColor: props.darkBackground ? "#ffffff" : "#00000",
        color: props.darkBackground ? "#000000" : "#ffffff"
}
    
    return <>
        <div style={styles} className="container">
            <h1 className="header">Fun facts about React</h1>
            <ul className="list">
                <li className="listItem">Was first released in 2013</li>
                <li className="listItem">Was originally created by Jordan Walke</li>
                <li className="listItem">Has well over 100K stars on GitHub</li>
                <li className="listItem">Is maintained by Facebook</li>
                <li className="listItem">Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
        
    </>
}