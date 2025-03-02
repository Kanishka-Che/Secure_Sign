import React from 'react'
import "./Register.css"
import "../../App.scss"
import{Link} from "react-router-dom"

import video from '../../LoginAssets/video-01.mp4';
import logo01 from '../../LoginAssets/logo01.jpeg';

import { TfiEmail } from "react-icons/tfi";
import {BsFillShieldLockFill } from "react-icons/bs";

import { AiOutlineSwapRight } from "react-icons/ai";


const Register = () => {
  return (
    <div className='registerPage flex'>
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
         
        
        <div className="inputDiv">
        <label htmlFor="email">Email</label>
         <div className="input flex">
         <TfiEmail className="icon"/>
            <input type='email' id="email" placeholder='Enter Email'/>
        </div>
        </div>

        <div className="inputDiv">
        <label htmlFor="Password">Password</label>
         <div className="input flex">
           <BsFillShieldLockFill className="icon"/>
            <input type='Password' id="Password" placeholder='Enter Password'/>
        </div>
        </div>

        <button type='submit' className='btn flex'>
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
