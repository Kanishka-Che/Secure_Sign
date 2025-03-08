import React,{useState} from 'react'
import "./Login.css"
import "../../App.scss"
import{Link} from "react-router-dom"
import Axios from 'axios'

import video from '../../LoginAssets/video-01.mp4';
import logo01 from '../../LoginAssets/logo-01.png';

import { FaUserShield } from "react-icons/fa";
import {BsFillShieldLockFill } from "react-icons/bs";

import { AiOutlineSwapRight } from "react-icons/ai";


const Login = () => {
    const[loginUserName,setLoginUserName]=useState('')
    const[loginPassword,setLoginPassword]=useState('')
    
    
      const CreateUser =()=>{
        
          Axios.post('http://localhost:3002/login',{
    
           
            LoginUserName:loginUserName,
            LoginPassword:loginPassword
          }).then((response)=>{
           console.log(response)
          })
      }


  return (
    <div className='loginPage flex'>
    <div className="container flex">

      <div className="videoDiv">
      <video src={video} autoPlay muted loop controls></video>

      <div className="textDiv">
        <h2 className="titel">Create And sell Extraordinary Products</h2>

        <p>Adopt The peace of naturel</p>
      </div>

      <div className="footerDiv flex">
        <span className='text'>Don't have an account</span>
        <Link to={'/register'}>
        <button className='btn'>Sign Up</button>
        </Link>
      </div>
      </div>

      <div className="formDivflex">
        <div className="headerDiv">
         <img src={logo01} alt="Logo Image" />
         <h3>Welcome Back</h3>
        </div>

        <form action="" className='from grid'>
          <span className='showMessage'>Login Status will go here</span>
        
        <div className="inputDiv">
        <label htmlFor="username">Username</label>
         <div className="input flex">
           <FaUserShield className="icon"/>
            <input type='text' id="username" placeholder='Enter Username'
            onChange={(event)=>{
              setLoginUserName(event.target.value) 

            }}/>
        </div>
        </div>

        <div className="inputDiv">
        <label htmlFor="Password">Password</label>
         <div className="input flex">
           <BsFillShieldLockFill className="icon"/>
            <input type='Password' id="Password" placeholder='Enter Password'
            onChange={(event)=>{
              setLoginPassword(event.target.value) 

            }}/>
        </div>
        </div>

        <button type='submit' className='btn flex' onClick={}>
          <span>Login</span>
          <AiOutlineSwapRight className="icon" />
        </button>


        <a href='/dashboard'>Dashboard</a>

        <span className='forgotPassword'>
          Forgot your password?<a href="">Click Here</a>
        </span>

        </form>

      </div>
        
      </div>
    </div>
  )
}

export default Login
