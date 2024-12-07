// src/Slice/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
        state.currentUser = action.payload; // Assuming payload contains user data
      },
  
    
  },
});

export const { addUser,loginUser } = userSlice.actions;
export default userSlice.reducer;
