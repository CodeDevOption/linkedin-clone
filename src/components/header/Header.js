
import { Search ,Home,People,Work,Notifications,AccountCircle,ArrowDropDown } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import { userSelector } from '../../Reducers/userSlice';
import './Header.css'
import { useSelector } from 'react-redux/es/hooks/useSelector';

const Header = () => {
   const user = useSelector(userSelector);
   console.log(user.photoURL);

  return (
    <div className='header'>
      <div className="header_container">
        
      <div className="header__left">
            <div className="logo">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin__logo" />
            </div>
            <div className="search_bar">
              <input type="text" placeholder='Search' />
              <Search />
            </div>
        </div>
        <div className="header__right">
          <div className="header__right_links">
            <div className="navbarlink active">
              <Home />
              <span>Home</span>
            </div>
            <div className="navbarlink">
              <People />
              <span>My Network</span>
            </div>
            <div className="navbarlink">
              <Work />
              <span>Jobs</span>
            </div>
            <div className="navbarlink">
              <Notifications />
              <span>Notifications</span>
            </div>
          </div>
          <div className="user_avatar">
          <Avatar src={user.photoURL} />
            <span>Me <ArrowDropDown /></span>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Header