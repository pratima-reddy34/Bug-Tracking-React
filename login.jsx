/*import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import {signIn} from '../../Controllers/Redux/authSlice'

import './login.css'

export default ()=>{
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name:"",
        password:""
    })


    function inputChanged(e) {
        setFormInput({
            ...formInput,
            [e.target.name]:e.target.value
       })
    }
    function submit(e){
        dispatch(signIn(formInput));
        e.preventDefault();

    }
    return(
        <div className="loginBG">
            <form className='login-panel'>
                <h1>Login:</h1>
                < input name='name' placeholder='Name' onChange={inputChanged} value={formInput.name}></input>
                <input name='password' type='password' placeholder='Password' onChange={inputChanged} value={formInput.password}></input>
                <button type='submit' onClick={submit}>Login</button>
            
            </form>
        </div>
    )
}
*/
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "../../Controllers/Redux/authSlice"; // Ensure this is correctly exported

import "./login.css";

const LoginComponent = () => { // ✅ Named function instead of anonymous export
    const dispatch = useDispatch();
    const [formInput, setFormInput] = useState({
        name: "",
        password: ""
    });

    function inputChanged(e) {
        setFormInput({
            ...formInput,
            [e.target.name]: e.target.value
        });
    }

    function submit(e) {
        e.preventDefault();  // ✅ Prevent default first before dispatching
        dispatch(signIn(formInput));
    }

    return (
        <div className="loginBG">
            <form className="login-panel">
                <h1>Login:</h1>
                <input 
                    name="name" 
                    placeholder="Name" 
                    onChange={inputChanged} 
                    value={formInput.name}
                />
                <input 
                    name="password" 
                    type="password" 
                    placeholder="Password" 
                    onChange={inputChanged} 
                    value={formInput.password}
                />
                <button type="submit" onClick={submit}>Login</button>
            </form>
        </div>
    );
};

export default LoginComponent; // ✅ Named export
