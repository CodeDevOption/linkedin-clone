import { ArrowDropDown, Article, BusinessCenter, Close, Equalizer, EventNote, InsertCommentRounded, InsertPhoto, MoreHoriz, Newspaper, Photo, Public, SmartDisplay } from '@mui/icons-material';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Snackbar } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react'
import { Post } from '../../components';
import { userSelector } from '../../Reducers/userSlice';
import './Feed.css';
import {useSelector}from'react-redux'
import { db } from '../../firebase';
import uuid from 'react-uuid'; 
import { collection, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore';
import { async } from '@firebase/util';

const Feed = () => {
  const [message,setMessage] = useState('');
  const [open , setOpen] = useState(false);
  const [createType, setCreateType ] = useState("text");
  const [data,setData] = useState([]);
  console.log(data);
  const handleOpen = () =>{
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
    setCreateType('text');
  }
  const user = useSelector(userSelector);
// snacbar


// Firebase Database \\

const addPost =  ()=> {
  const uid = uuid();
  const data = {
    pid:uid,
    username:user.displayName,
    upic:user.photoURL,
    time:serverTimestamp(),
    likes:0,
    comments:0,
    shares:0,
    mediaurl:null,
    message:message,

  }
  
  setDoc(doc(db,"posts",`${uid}`),data).then(  () => {
    setMessage("");
 
  })
console.log(uuid());
}


const backType = () =>{
  setCreateType("text");
}

// Fetch Data From Database

const fetchdata = ()=>{
  const collectionRef = collection(db,'posts');
  const quer = query(collectionRef,orderBy('time','desc'));
  onSnapshot(quer,(res)=>{
    setData(res.docs.map((doc) => doc.data()));
  })
}
useEffect(()=>{
  fetchdata();
},[])

  return (

    <div className='feed'>


      <Dialog 
      
        fullWidth
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle className='dialog-title' id="customized-dialog-title" style={{display:"flex",justifyContent:"space-between",alignItems:"center"}} onClose={handleClose}>
        <h3>Create a post</h3> <Close style={{cursor:"pointer",fontSize:"1.5rem",color:"#00000099"}} onClick={handleClose} />
        </DialogTitle>
        <DialogContent dividers>
          <div className="post_creator">
            {
              createType == "text" ?(
                <>
              <div className="post_creator_header">
              <Avatar src={user.photoURL} />
              <div className="user">
              <h1>{user.displayName}</h1>
              <button><Public /> <h3>Anyone</h3> <ArrowDropDown style={{fontSize:"1.3rem"}} /></button >
              </div>
              </div>
              <textarea value={message} onChange={(e) => setMessage(e.target.value)}  autoFocus placeholder='What do you want to talk about?'></textarea>
              <button  className='hashtag'>Add hashtag</button>
              </>  
              ): createType == "photo" ? (
               <h1>This is the Photo  <button onClick={backType}>back</button> </h1>
              ): createType == "video" ? (
                <h1>This is the Video  <button onClick={backType}>back</button></h1>
              ):createType == "doc" ? (
                <h1>This is the doucment  <button onClick={backType}>back</button> </h1>
              ): <h1>zip  <button onClick={backType}>back</button> </h1>
            }
              <div className="categorys">
                  <div className="left">
                    <IconButton onClick={()=> setCreateType('photo')}>
                         <Photo />
                    </IconButton>
                    <IconButton onClick={()=> setCreateType('video')}>
                          <SmartDisplay />
                    </IconButton>
                      <IconButton onClick={()=> setCreateType('doc')}>
                          <Article />
                      </IconButton>
                      <IconButton>
                          <BusinessCenter />
                      </IconButton>
                      <IconButton>
                          <Equalizer />
                      </IconButton>
                      <IconButton>
                          <MoreHoriz />
                      </IconButton>
                  </div>
                  <div className="midle">
                  <button><InsertCommentRounded /> <h3>Anyone</h3></button >
                  </div>
                  <div className="right">
                  <button onClick={addPost} disabled={message? false : true}  >Post</button>

                  </div>
              </div>
          </div>
        </DialogContent>

      </Dialog>

        <div className="post__create">
          <div className="post__create_top">
            <Avatar src={user.photoURL} />
            <button onClick={handleOpen}> <span>Start a post</span></button>
          </div>
          <div className="post__create_bottom">
            <div   className="post_photo create_items">
              <InsertPhoto  style={{ fill: '#378fe9' }}/> <span>Photo</span>
            </div>
            <div className="post_video create_items">
              <SmartDisplay style={{ fill: '#5f9b41' }} /> <span>Video</span>
            </div>
            <div className="post_event create_items">
              <EventNote style={{ fill: '#c37d16' }} /> <span>Event</span>
            </div>
            <div className="post_article create_items">
              <Newspaper style={{ fill: '#e16745' }} /> <span>Write article</span>
            </div>
          </div>
        </div>
       
            <button className="shortbtn">
            <span></span> <p>Sort by: <strong>Top</strong><ArrowDropDown /></p>
            </button>
          {/* Posts  */}
          {data.map((data)=>(

            
            <Post 
                  time={data.time} 
                  message={data.message} 
                  likes={data.likes} 
                  id={data.pid} 
                  comments={data.comments} 
                  key={data.pid} 
                  username={data.username}
                  upic={data.upic}
                  shares={data.shares}
                  mediaurl={data.mediaurl}
             />

          ))}
    </div>
  )
}

export default Feed