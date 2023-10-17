import React from 'react'
import {Link} from 'react-router-dom';
import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Sign_up = () => {
  const [email,setEmail] = useState();
  const [name, setName]=useState();
  const [password, setPassword]=useState();
  // const navigate = useNavigate();
  const payload = {
    name: name,
    email: email,
    password: password,
  }

  const signUpFunc = async () => {
  //   try{
  //   const response = await fetch('http://127.0.0.1:8080/signup', {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(payload)

  //   }).then((response)=>{
  //     if(response.status!==200){
  //       alert("Please Enter Valid Details")
  //     } else {
  //       navigate('/login')
  //     }
  //     })
  //   console.log("Signup Check"+response)
  // } catch(error){
  //   console.log(error)
  // }
  // navigate('/login')
  }
  return (
    <>
    <div className='form'>
    <div className='left1'>
    <h2>Progress Tracker</h2>
    <img height="300px" src={require("../images/sign-up.png")} alt={"sign up"}/>
    </div>
    <div className='form_div'>
    <form>
    <div className='sign_or_admin_login'><h3>Sign Up</h3> <h3>/</h3> <Link to="/admin_login" style={{textDecoration:'none'}}><h4 id="adminlogin_Heading"><button className="admin_login_btn">Admin Login</button></h4></Link></div>
            <div class="input-boxes">  
              <div class="input-box">
                <label for="name">Username:<br/>
                <input type="text" class="signup_input-boxes" name='Username' onChange={(event) => { setName(event.target.value)}} placeholder="Enter username" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="email">Email:<br/>
                <input type="text" class="signup_input-boxes" name='email' onChange={(event) => { setEmail(event.target.value)}} placeholder="Enter email" required/>
                </label>
              </div>
              <div class="input-box">
              <label for="password">Password:<br/>
                <input type="password" class="signup_input-boxes" name='password' onChange={(event) => { setPassword(event.target.value)}} placeholder="Enter password" required/>
                </label>
              </div>
              <div class="button input-box">
                <button type='button' onClick={signUpFunc} className="submit_btn" value="Sign up">Sign Up</button>
              </div><br/>
              <h5>Already Have an Account! <Link to="/login" style={{textDecoration:'none'}}>LogIn Here</Link></h5>
            </div>
      </form>
      </div>
      </div>
      </>
  );
}

export default Sign_up
