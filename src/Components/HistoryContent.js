import React from "react";
import noHistory from '../assets/noHistory.png'
import '../Components/HistoryContainer.css'

function HistoryContainer(){
    return (<>
    <div className="history_container">
        <img className="nohistory_image" src={noHistory} alt="no History"/>
    </div>
    </>);
}
export default HistoryContainer;