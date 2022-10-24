import React, { useState } from 'react';

import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [pass, setPass] = useState('');
  
  
  
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            placeholder='Enter your username'
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange = {(e)=> setEmail (e.target.value)}
            placeholder='Enter your email'
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="text"
            id="lname"
            name="phone"
            defaultValue="+91"
            maxlength="13"
            pattern="\d{10}"
            value={phone}
            onChange = {(e)=> setPhone (e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={pass}
            onChange = {(e)=> setPass (e.target.value)}
            placeholder='*******'
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
  );
}
