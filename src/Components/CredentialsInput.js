import React, { useState } from 'react';
import './CredentialsInput.css';

import hide from '../assets/hide.png'
import show from '../assets/show.png'
import copy from '../assets/copy.png'

const CredentialsInput = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [credentials, setCredentials] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="credentials-container">
      <label>Credentials</label>
      <div className="input-container">
        <input
          type={showPassword ? 'text' : 'password'}
          value={credentials}
          onChange={(e) => setCredentials(e.target.value)}
          className="credentials-input"
        />
        <button onClick={toggleShowPassword} className="toggle-button">
          {showPassword ? <img src={hide}/> : <img src={show}/>}
        </button>
        <button className="copy-button" onClick={() => navigator.clipboard.writeText(credentials)}>
          <img src={copy}/>
        </button>
      </div>
    </div>
  );
};

export default CredentialsInput;
