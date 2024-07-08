import React from "react";
import './AddAgentBtn.css';

function AddAgentBtn({ name, icon }) {
  return (
    <div className="btn_container_add">
        <img className="btn_icon" aria-hidden="true" alt="plus-icon" src={icon} />
        <span>{name}</span>
    </div>
  );
}

export default AddAgentBtn;
