import React from "react";
import noHistory from '../assets/noHistory.png'
import '../Components/HistoryContainer.css'

function HistoryContainer(){
    return (<>
    <div className="history_container">
    <div>
    <img className="nohistory_image" src={noHistory} alt="no History"/>
  <h1>
    No History
  </h1>
    </div>
    </div>
    </>);
}
export default HistoryContainer;