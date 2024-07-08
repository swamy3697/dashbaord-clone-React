import React from "react";
import './Brandlogo.css';
import logo from '../assets/download.png';
function Brandlogo(){

    return (

        <div className="logo">
      <img src={logo} alt="Retell AI Logo" className="logo-image" />
      <span className="logo-text">Mobishaala</span>
    </div>
    );
}
export default Brandlogo