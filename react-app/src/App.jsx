import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Listing from './components/Listing';

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  }

  return (
    <>
      <Header isMenuVisible = {isMenuVisible} toggleMenu = {toggleMenu}/>
      <div className = 'main-container'>
        <SideMenu isMenuVisible = {isMenuVisible}/>
        <Listing/>
      </div>
    </>
  );
}

export default App;
