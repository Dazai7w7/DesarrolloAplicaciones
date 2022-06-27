import React from "react";
import logo from "../../imgs/logo.png"
import "./Sidebar.css"
const Sidebar =() => {
    return(
       <div className="Sidebar">
           {}
            <div className="logo">
                <img src={logo} alt="Imagen logo" />
                <span>
                    Ronda
                </span>
            </div>
       </div> 
    )
}

export default Sidebar; 