import React from "react";
import "./switchStyles.css"

export default function Switch(props) {
    

    return<>
       <label className="switch" style={{border: props.dback ? "none" : "1px solid #fff"}} >
            <input type="checkbox" onClick={props.clicked} ></input>
                    <span className="slider" ></span>
        </label>
        </>
}