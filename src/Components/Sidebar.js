import React from 'react';
import MenuItem from './MenuItem';
import './Sidebar.css';

import android from '../assets/android.png';
import api_icon from '../assets/api_icon.png';
import Billing from '../assets/billing_icon.png';
import call from '../assets/call.png';
import history from '../assets/history.png';
import webhook from '../assets/webhook.png';

import Api_doc from './Api_doc';
function Sidebar({activeMenuItem,onMenuItemClick}) {
  return (
    <div className="sidebar">
    <MenuItem label="AI Agents" icon={android} selected={activeMenuItem === 'AI Agents'} onClick={onMenuItemClick} />
    <MenuItem label="Phones" icon={call} selected={activeMenuItem === 'Phones'} onClick={onMenuItemClick} />
    <MenuItem label="History" icon={history} selected={activeMenuItem === 'History'} onClick={onMenuItemClick} />
    <MenuItem label="API Keys" icon={api_icon} selected={activeMenuItem === 'API Keys'} onClick={onMenuItemClick} />
    <MenuItem label="Billing" icon={Billing} selected={activeMenuItem === 'Billing'} onClick={onMenuItemClick} />
    <MenuItem label="WebHooks" icon={webhook} selected={activeMenuItem === 'WebHooks'} onClick={onMenuItemClick} />
    <div className="api-docs">
      <Api_doc />
    </div>
  </div>
);
}

export default Sidebar;
