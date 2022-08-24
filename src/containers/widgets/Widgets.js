import { Add, ArrowForward, Info, KeyboardArrowDown } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import './Widgets.css';

const FollowPeople = ()=>{
  return(
 <div className="item">
  <Avatar />      
  <div className="user__info">
    <h3>Lahiru Sadaruwan</h3>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, fuga!</p>
    <button> <Add /> <p> Follow </p></button>
  </div>
 </div>
  )
}

const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets__top">
        <div className="widgets__top_header">
          <h3>Add to your feed</h3>
          <Info />
        </div>
        <FollowPeople   />
        <FollowPeople   />
        <FollowPeople   />
        <a href="#">View all recommendations <ArrowForward /></a>
      </div>
      <div className="widgets__bottom">
        <div></div>
        <div className="about">
        <a href='#'> About </a>
        <a href='#'>Accessibility</a>
        <a href='#'>Help Center</a>
        <a href='#'>Privacy & Terms <KeyboardArrowDown /> </a>
        <a href='#'>Ad Choices</a>
        <a href='#'>Advertising</a>
        <a href='#'>Business Services <KeyboardArrowDown /> </a>
         <a href='#'> Get the LinkedIn app </a>
         <a href="#">More</a> 
         <div className="coparation"><img src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="" /> LinkedIn Corporation © 2022</div>

        </div>
      </div>
    </div>
  )
}

export default Widgets