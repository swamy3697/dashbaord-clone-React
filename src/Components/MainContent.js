import React from 'react';
import AgentContainer from './AgentContainer';
import PhoneContainer from './PhoneContainer';
import HistoryContainer from './HistoryContent';
import ApiKeys from './ApiKeys';
import Webhookcontainer from './WebHookContainer';
import BillingContainer from './BillingContainer';


function MainContent({ activeMenuItem }) {
  let content;
  switch (activeMenuItem) {
    case 'AI Agents':
      content = <AgentContainer/>;
      break;
    case 'Phones':
      content = <PhoneContainer/>;
      break;
    case 'History':
      content = <HistoryContainer/>;
      break;
    case 'API Keys':
      content = <ApiKeys/>;
      break;
    case 'Billing':
      content =  <BillingContainer/>;
      break;
    case 'WebHooks':
      content = <Webhookcontainer/>;
      break;
    default:
      content = <div></div>;
  }

  return <div className="main-content">{content}</div>;
}

export default MainContent;
