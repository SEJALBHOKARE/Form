import React from 'react'
import { useState } from 'react';

import "./App.css"

const [login,setlogin]=useState(true)

const loginSwitch = () => {
  setlogin(!login)
}

function LoginForm() {
  return (
    <>
  <div id='Container'>
        <div id="user">
              <img src="src\assets\instagram (3).png" alt="" />
              <input hidden={login} type="text" name="" placeholder='Mobile Number or Email' id="" />
              <input hidden={login} type="text" name="" placeholder='Full Name' id="" />
              <input type="email" name="" id="" placeholder='Phone number, username, or email'/>
              <input type="text" name="" id="" placeholder='Password' />
              <button>{login?"Sign in":"Sign up"}</button>
          <div id='footer'>
            {login?"Don't have account?":"have an account?"} <span onClick={loginSwitch}>{login?"Sign up":"Log in"}</span>
          </div>
          </div>  
   </div>


    </>
  )
}

export default LoginForm