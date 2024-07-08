import React from "react";
import '../Components/webhookContainer.css';

import WebhookForm from "./webhookForm";
const textClasses = 'text-foreground';
const mutedTextClasses = 'text-muted-foreground';
function Webhookcontainer(){

    return (
    <div className="webhook-container">
         <h1 id="titleTag" className={`text-2xl font-bold ${textClasses}`}>Webhook Settings</h1>
         <p id="webhook-discription" className={`${mutedTextClasses} mt-2`}>
         Configure your webhook URL to receive real-time event notifications.
      </p>
        <WebhookForm/>

    </div>
)
}
export default Webhookcontainer;