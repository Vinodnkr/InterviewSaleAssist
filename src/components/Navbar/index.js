import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {MdOutlinePerson2} from 'react-icons/md'
import {CiBookmark} from 'react-icons/ci'
import {IoBagOutline} from 'react-icons/io5'
import './index.css' // Assuming you have a separate CSS file for your navbar styles

function Navbar() {
  return (
    <div className="nav_bar">
      <h1 className="nav_heading">TANN TRIM</h1>
      <div className="icons_container">
        <FaSearch style={{fontSize: '30px'}} />
        <MdOutlinePerson2 style={{fontSize: '30px'}} />
        <CiBookmark style={{fontSize: '30px'}} />
        <IoBagOutline style={{fontSize: '30px'}} />
      </div>
    </div>
  )
}

export default Navbar
