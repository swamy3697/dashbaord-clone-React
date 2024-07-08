import React, { useState } from 'react';
import './WebhookForm.css';

const WebhookForm = () => {
  const [url, setUrl] = useState('');

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url) {
      // Add webhook logic here
      console.log('Webhook URL added:', url);
    }
  };

  return (
    <div className="webhook-form-container">
      <h3>Webhook URL</h3>
      <p>
        Check our <a href="/documentation" target="_blank" rel="noopener noreferrer">documentation</a> for detail
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          placeholder="Enter webhook URL"
          value={url}
          onChange={handleChange}
          className={`webhook-input ${url ? 'active' : ''}`}
        />
        <button 
          type="submit" 
          disabled={!url} 
          className={`webhook-button ${url ? 'active' : ''}`}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default WebhookForm;
