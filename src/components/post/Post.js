import { Comment, Handshake, MoreVert, Public, Send, Shortcut, ThumbUp } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Post.css'

const Post = ({time,message,likes,id,comments,username,upic,shares,mediaurl}) => {
  return (
    <div className='post'>
      <div className="post__header">
        
          <div className="user__info">
             <Avatar src={upic} />
             <div className="post__info">
               <h3> {username} </h3>
               <p>{new Date(time?.toDate()).toTimeString() } &nbsp; <Public /></p>
             </div>
          </div>
        <div className="post__menu">
        <IconButton >
            <MoreVert />
        </IconButton>
        </div>
      </div>
      <div className="post__title">
          {message}
        </div>
      <div className="post__content">
         
      </div>
      <div className="post__footer">
         <div className="social__ditails">
          <div className="likes">
            <div className="icon__group">
                <img src="https://static-exp1.licdn.com/sc/h/8ekq8gho1ruaf8i7f86vd1ftt" alt="" />
                <img src="https://static-exp1.licdn.com/sc/h/41j9d0423ck1snej32brbuuwg" alt="" />
                <img src="https://static-exp1.licdn.com/sc/h/cpho5fghnpme8epox8rdcds22" alt="" />
            </div> {likes}</div>
          <div className="comments">{comments} comments &nbsp; .</div>
          <div className="shares">{shares} shares </div>
         </div>
         <div className="social__action">
              <button><ThumbUp />  Like</button>
              <button><Comment /> Comments</button>
              <button> <Shortcut />Share</button>
              <button><Send /> Send</button>
         </div>
      </div>
    </div>
  )
}

export default Post