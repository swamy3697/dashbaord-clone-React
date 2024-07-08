import React from 'react';
import './MenuItem.css';

function MenuItem({ label, icon, selected, onClick  }) {
  return (
    <div className={`menu-item ${selected ? 'active' : ''}`} onClick={() => onClick(label)}>
      {icon && <img src={icon} alt="icon" className="menu-icon" />}
      <h3>{label}</h3>
    </div>
  );
}
export default MenuItem;
