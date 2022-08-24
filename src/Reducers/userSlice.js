import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  user:null,
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logind: (state, action) => {
      state.user = action.payload;
    },
    logout:(state) =>{
      state.user = null;
    }
  },
  
});

export const { logind , logout } = userSlice.actions;

export const userSelector = (state) => state.user.user;

export default userSlice.reducer;
