import React from "react";
import emptyImage from '../assets/empty.png';

function EmptyCard({info}){
    return (<>
    <img src={emptyImage} alt=" Content is Empty"/>
    <h3>
        {info}
    </h3>
    </>)
}
export default EmptyCard;