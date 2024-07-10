import React from 'react';
import './Header.css';
import Brandlogo from './Brandlogo';
import person from "../assets/person.png";

function Header() {
  return (
    <div className="header">
          <Brandlogo />
      <div className="profile-pic">
        <span className='loginbtn'>Sign Up</span>
      </div>
    </div>
  );
}

export default Header;
