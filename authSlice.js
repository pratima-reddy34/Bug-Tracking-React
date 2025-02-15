/*import {createSlice} from '@reduxjs/toolkit'
const slice = createSlice({
    name:"auth",
    initialState:{
        admin:false,
        LoggedIn:false,
    },
    reducers: {
        signIn:(state,action)=>{
            const {name,password} = action.payload;
    
            state. LoggedIn = true;
    
            state.admin = true;
    
            console.log(state);
        },
        signOut:(state)=>{
            state. LoggedIn =false;
            state.admin = false;
    
        },
        createUser: (state,action)=>{
        }
    }
})*/


import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        admin: false,
        LoggedIn: false,
    },
    reducers: {
        signIn: (state, action) => {
            const { name, password } = action.payload;


            state.LoggedIn = true;  // ✅ Removed extra space
            state.admin = true;
            
        },
        signOut: (state) => {
            state.LoggedIn = false; // ✅ Fixed extra space
            state.admin = false;
        },
        createUser: (state, action) => {
            // Define logic for user creation if needed
        }
    }
});

// ✅ Export actions correctly
export const { signIn, signOut, createUser } = authSlice.actions;

// ✅ Export reducer correctly
export default authSlice.reducer;

    