import React from 'react';
import { Avatar } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './header.css';  // Custom CSS if needed
import profile from "../../assest/images/profile.svg"
import search from "../../assest/images/search.svg"
import message from "../../assest/images/message.svg"
import dark from "../../assest/images/dark.svg"
import light from "../../assest/images/light.svg"

const Header = () => {
   return (
      <div className="header-menu">
      <div className='right-menu'>
      <div className="icons-container"><img src={search} /></div>
      <div className="icons-container"><img src={message} /><div className="notification-dot"></div></div>
      <div className="icons-container"><img src={dark} /></div>
      <div className="icons-container"><img src={light} /></div>
            <div style={{alignItems:"center",display:"flex"}}>
               <div className="avatar-container"><img src={profile} /></div>
               <span className="company-name">Acme Inc.</span>
               <DownOutlined className='down-icon'/>
            </div>
            </div>
      </div>
   );
};

export default Header;
