import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import React, { useState } from 'react';
import {GoogleAuthProvider,signInWithPopup} from 'firebase/auth';
import './Login.css';
import {FcGoogle} from 'react-icons/fc';
import { auth } from '../../firebase';
import { useDispatch } from 'react-redux/es/exports';
import {logind} from '../../Reducers/userSlice'
const Login = () => {
    const [login,setLogin ] = useState(true);
    const [password,setPassword] = useState(null);
    const [showPassword, setshowPassword] = useState(false);
    const dispatch = useDispatch();

// googleAuth

const provider = new GoogleAuthProvider();
const googleAuth = () => {
signInWithPopup(auth,provider).then((res)=>{
    console.log(res.user);
    dispatch(logind(
      res.user,
    ));
})
}

  return  (
    <div className='login'>
        <div className="login__header">
                <img src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="" />
        </div>
        <div className="login__content">
            {login ? 
                    <div className="signin">
                        <h1 className="title">
                        Sign in
                        </h1>
                        <p>Stay updated on your professional world</p>
                        <div className="form">
                        <TextField id="outlined-text" sx={{ m: 1, width: '32ch' }} label="Email or Phone" type="text" />

                          <FormControl sx={{ m: 1, width: '32ch' }} variant="outlined">
                             <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                             <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e)=>  setPassword(e.target.value)}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={()=> setshowPassword((e)=> !e)}
                                            onMouseDown={(e) => e.preventDefault()}
                                            edge="end"
                                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

                        </div>
                        <a href="#">Forgot password?</a><br />
                        <button  className='sbtn'>Sign in</button>
                        <div className="or">
                            <span></span> <p>or</p> <span></span>
                        </div>
                        <button className='goolebtn' onClick={googleAuth}><FcGoogle /> Sign in with Google</button>
                        <div className="new_user">
                        <p>New to LinkedIn?</p>
                        <button onClick={()=> setLogin(false)}>Join now</button>

                        </div>
                    </div>
                    :
                    <div className="joinnow">`
                        <span>Join Now</span>
                        <button onClick={()=> setLogin(true)}>Create an Account</button>
                    </div> }
        </div>
        <div className="login__footer">
            <div className="copyright">
<img src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" alt="" />
                <p>© 2022</p>

            </div>
<a>User Agreement</a>
<a>Privacy Policy</a>
<a>Community Guidelines</a>
<a>Cookie Policy</a>
<a>Copyright Policy</a>
<a>Send Feedback</a>
<a>Language</a>

        </div>

    </div>
  );
}

export default Login