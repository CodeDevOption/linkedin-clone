import { AccountCircle, AddCircleOutline, Bookmark, PersonAdd } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import { userSelector } from '../../Reducers/userSlice';
import './Sidebar.css';
import {useSelector} from 'react-redux'
import { auth } from '../../firebase';

const Sidebar = () => {
  const user = useSelector(userSelector);
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <div className="profile__cover">

            </div>
          <div className='profile_ditalis'>
          <div className="profile__img">
          <Avatar src={auth.currentUser.photoURL}   />
         
            </div>
                <div>{user.displayName}</div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, aspernatur.</p>
          </div>
          <div className="connections">
                <div className="left">
                  <span>Connections</span>
                  <span>Connect with alumni</span>
                </div>
                <PersonAdd />
          </div>
          <div>
          
            <a href="#"><Bookmark /> <span>&nbsp; My Items</span></a>

          </div>
        </div>
        <div className="sidebar__bottom">
              <div className="community">
                <a href="#"><span>Groups</span></a>
                <div className="events">
                  <a href="#"> <span>Events</span> </a>
                  <AddCircleOutline titleAccess='Create an event' /> 
                </div>
                <a href="#"><span>Followed Hashtags</span></a>
              </div>
              <a href="#">Discover more</a>
        </div>
    </div>
  )
}

export default Sidebar