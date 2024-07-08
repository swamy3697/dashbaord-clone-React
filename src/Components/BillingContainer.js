import React, { useState } from 'react';
import './billingContainer.css';
import BillingHistory from './BillingHistory';
import PaymentMethods from './PaymentMethods';

const BillingContainer = () => {
  const [activeTab, setActiveTab] = useState('paymentMethods');

  return (
    <div className="billing-container">
      <h1>Billing</h1>
      <div className="tabs">
        <button 
          className={activeTab === 'paymentMethods' ? 'active' : ''} 
          onClick={() => setActiveTab('paymentMethods')}
        >
          Payment methods
        </button>
        <button 
          className={activeTab === 'billingHistory' ? 'active' : ''} 
          onClick={() => setActiveTab('billingHistory')}
        >
          Billing history
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'paymentMethods' && <PaymentMethods/>}
        {activeTab === 'billingHistory' && <BillingHistory />}
      </div>
    </div>
  );
};

export default BillingContainer;
