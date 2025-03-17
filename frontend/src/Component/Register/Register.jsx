import React,{useState} from 'react'
import "./Register.scss"
import "../../App.scss"
import{Link,useNavigate} from "react-router-dom"
import Axios from 'axios'


import video from '../../LoginAssets/video-01.mp4';
import logo01 from '../../LoginAssets/logo-01.png';
import { FaUserShield } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {BsFillShieldLockFill } from "react-icons/bs";

import { AiOutlineSwapRight } from "react-icons/ai";


const Register = () => {


  const[email,setEmail]=useState('')
  const[userName,setUserName]=useState('')
  const[password,setPassword]=useState('')
  const navigateTo= useNavigate()


  const CreateUser = (e) => {
    e.preventDefault();
    
    Axios.post('http://localhost:3002/register', {
      Email: email,
      UserName: userName,
      password: password
    })
    .then(() => {
      console.log("User registered successfully");
      navigateTo('/');
      setEmail('');
      setUserName('');
      setPassword('');
    })
    .catch((error) => {
      console.error("Error registering user:", error);
    });
  };
  


  return (
    <div className='registerPage flex'>
    <div className="container flex">

      <div className="videoDiv">
      <video src={video} autoPlay muted loop controls></video>

      <div className="textDiv">
        <h2 className="titel">Create And Sell Extraordinary Products</h2>

        <p>Adopt The peace of Naturel</p>
      </div>

      <div className="footerDiv flex">
        <span className='text'>Have an account</span>
        <Link to={'/'}>
        <button className='btn'>Login</button>
        </Link>
      </div>
      </div>

      <div className="formDivflex">
        <div className="headerDiv">
         <img src={logo01} alt="Logo Image" />
         <h3>Let Us Know you!</h3>
        </div>

        <form action="" className='from grid'>
         
        
        <div className="inputDiv">
        <label htmlFor="email">Email</label>
         <div className="input flex">
         <MdEmail className="icon"/>
            <input type='email' id="email" placeholder='Enter Email' onChange={(event)=>{
               setEmail(event.target.value) 

            }}/>
        </div>
        </div>


         <div className="inputDiv">
                <label htmlFor="username">Username</label>
                 <div className="input flex">
                   <FaUserShield className="icon"/>
                    <input type='text' id="username" placeholder='Enter Username'
                    onChange={(event)=>{
                      setUserName(event.target.value) 
       
                   }}
                    
                    />
                </div>
          </div>

        <div className="inputDiv">
        <label htmlFor="Password">Password</label>
         <div className="input flex">
           <BsFillShieldLockFill className="icon"/>
            <input type='Password' id="Password" placeholder='Enter Password' 
            onChange={(event)=>{
              setPassword(event.target.value) 

           }}
            
            />
        </div>
        </div>

        <button type='submit' className='btn flex' onSubmit={CreateUser}>
          <span>Register</span>
          <AiOutlineSwapRight className="icon" />
        </button>

        <span className='forgotPassword'>
          Forgot your password?<a href="">ClickHere</a>
        </span>

        </form>

      </div>
        
      </div>
    </div>
  )
}

export default Register
