import React from 'react'
import HamburgerDrawer from './HamburgerDrawer'
import './Navbar.css'

function Navbar({setCategory}) {
  return (
    <div className='nav'>
        <div className='icon'>
            <HamburgerDrawer setCategory={setCategory}/>
        </div>
        <img style={{cursor: "pointer", height:"40px", display:"block", borderRadius: "5px", marginLeft:"auto"}}src="https://cdn.jim-nielsen.com/ios/512/news-break-local-breaking-2018-09-12.png" />
        <span style={{fontSize: "30px", marginRight: "auto",  marginLeft: "2px"}}>News Arena</span>
    </div>
  )
}

export default Navbar