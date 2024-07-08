import React from "react";
import AddAgentBtn from "./AddAgentBtn";
import './Agent_container.css';

import plus from '../assets/plus.png';
import EmptyCard from "./EmptyCard";
function PhoneContainer(){
    return (<div className="container">
    <div className="agent_container">
    <AddAgentBtn name= "Add Phone Number" icon={plus}/>
    </div>
    <div className="Content">
        <EmptyCard info={"Add a phone to start the journey"}/>
    </div>
    
    </div>)
}
export default PhoneContainer;