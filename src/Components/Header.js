import React from 'react'
import './Header.css'
import { isVisible } from '@testing-library/user-event/dist/utils'
import { useState } from 'react';
const Header = () => {
  const [dropdownVisible,setDropdownVisible]=useState(false);
  const isDropdownVisible = ()=>{
    setDropdownVisible(true)
  }

  return (
    <header>
        <logo>
           <h2>Progress-Tracker</h2>
           <div className='icon-container'>
            <div>Welcome, Azad Chauhan</div>
            <div onClick={isDropdownVisible} className='user-logo'></div>
           </div>
        </logo>
    </header>


  )
}

export default Header