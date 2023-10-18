import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();
  const payload = {
    email : email,
    password : password,
  }

  const logInFunc = async () => {
    
    try{
    const response = await fetch('http://127.0.0.1:8000/signin', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)

    }).then((response)=>{
      if(response.status!==200){
        alert("Invalid Credentials")
      } else {
        navigate('/users_portal')
      }
      })
    
  } catch(error){
    console.log(error)
  }
  
  }
  return (
    <>
    <div className='form'>
      <div className='loginbox'>
    <form>
    <h3>Log In</h3>
            <div class="input-boxes">
              <div class="input-box">
                <label for="name">Username:<br/>
                <input type="text" onChange={(event) => { setEmail(event.target.value)}} class="signup_input-boxes" name='Username' placeholder="Enter username" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="password">Password:<br/>
                <input type="password" className="signup_input-boxes" onChange={(event) => { setPassword(event.target.value)}} name='password' placeholder="Enter password" required/>
                </label>
              </div>
              <div class="button input-box">
                <button type="button" className="submit_btn" onClick={logInFunc} value="Log In">Log In</button>
              </div>
            </div>

      </form>
      </div>
      </div>
      </>
  )
}

export default Login
