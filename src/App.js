import React, { useState } from 'react';
import Sidebar from './Components/Sidebar.js';

import Header from './Components/Header.js';

import MainContent from './Components/MainContent.js';
import './App.css';



function App() {

  const [activeMenuItem, setActiveMenuItem] = useState('AI Agents');

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
  };


  return (
    <div className="App">
      <Header />
      <div className="container">
      <Sidebar activeMenuItem={activeMenuItem} onMenuItemClick={handleMenuItemClick} />
      <div className='content'>
      <MainContent activeMenuItem={activeMenuItem} />
      </div>

      </div>
    </div>
  );
}

export default App;
