import React from 'react'
import "./navbar.css"
import {Search, NotificationsNone} from '@mui/icons-material';

function Navbar() {
  return (
    <div>
       <div className="topbar">
        <div className="topbarWrapper">
           <div className="topLeft">
              <span className='logo'>SideHustle-Grp 50</span>
           </div>
           <div  className="topRight">
             <div className='topbarIconContainer'>
              <Search />
              <span className='topIconBadge'></span>
             </div>
             <div className='topbarIconContainer'>
              <NotificationsNone/>
              <span className='topIconBadge1'>2</span>
             </div>
             <img src="/images/Img_0174.JPG" alt="" className='topAvatar' />
           </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar