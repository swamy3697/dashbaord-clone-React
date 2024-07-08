import React from 'react';
import './BillingHistory.css';

const BillingHistory = () => {
  return (
    <div className="billing-history">
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Cost</th>
            <th>Minutes</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Add table rows here */}
        </tbody>
      </table>
      <p className="note">* We charge at the end of each month. The amount shown is an estimate based on usage up to yesterday. For the final and accurate billing amount, please refer to your invoice, which will be provided at the end of the month.</p>
    </div>
  );
};

export default BillingHistory;
