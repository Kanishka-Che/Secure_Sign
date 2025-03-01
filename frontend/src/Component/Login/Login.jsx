import React from 'react'
import "./Login.css"
import{Link} from "react-router-dom"

import video from '../../LoginAssets/video-01.mp4';
import logo01 from '../../LoginAssets/logo01.jpeg';

import { FaUserShield } from "react-icons/fa";

const Login = () => {
  return (
    <div className='loginPage flex'>
    <div className="container flex">

      <div className="videoDiv">
      <video src={video} autoPlay muted loop controls></video>

      <div className="textDiv">
        <h2 className="titel">Products</h2>

        <p>Adopt The peace of naturel</p>
      </div>

      <div className="footerDiv flex">
        <span className='text'>don't have an account</span>
        <Link to={'/register'}>
        <button className='btn'>Sign Up</button></Link>
      </div>
      </div>

      <div className="formDivflex">
        <div className="headerDiv">
         <img src={logo01} alt="Logo Image" />
         <h3>Welcome Back</h3>
        </div>

        <form action="" className='from grid'>
          <span>Login Status will go here</span>
          <div className="inputDiv">
  <label htmlFor="username">Username</label>
  <div className="input flex">
    <FaUserShield className="icon"/>
    <input type='text' id="username" placeholder='Enter Username'/>
  </div>
</div>

        </form>

      </div>
        
      </div>
    </div>
  )
}

export default Login
