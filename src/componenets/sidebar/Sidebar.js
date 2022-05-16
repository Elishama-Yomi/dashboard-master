import React from 'react'
import "./sidebar.css"
import {GridView, AccountBalanceWallet, Addchart, ForwardToInbox, PermIdentity, Logout } from '@mui/icons-material';


function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
          <div className='sidebarMenu'>
            <h3 className='sidebarTitle'>Dashboard</h3>
            <ul className="sidebarList">
               <li className="sidebarListItem">
                 <GridView className='sidebarIcon'/>
                  DashBoard
               </li>
               <li className="sidebarListItem">
                 <AccountBalanceWallet className='sidebarIcon'/>
                  Wallet
               </li>
               <li className="sidebarListItem">
                 <Addchart className='sidebarIcon' />
                  Statistics
               </li>
               <li className="sidebarListItem">
                 <ForwardToInbox className='sidebarIcon' />
                  Messages
               </li>
               <li className="sidebarListItem">
                 <PermIdentity className='sidebarIcon' />
                  Profile
               </li>

               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <br />
               <li className="sidebarListItem">
                 <Logout className='sidebarIcon' />
                  Log out
               </li>
             </ul>
          </div>
        </div>
    </div>
  )
}

export default Sidebar