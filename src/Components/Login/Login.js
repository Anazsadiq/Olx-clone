
import React, {useState, useContext } from 'react';
import Logo from '../../olx-logo.png';
import { FirebaseContext } from '../../Store/FirebaseContext';
import './Login.css';
import {useHistory} from 'react-router-dom';

export default function Login({name}) {
  console.log(name);
  const history=useHistory()
  const [email,setEmail]=useState('');
  const [pass,setPass]=useState('');
  const {firebase}=useContext(FirebaseContext)
  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,pass).then(()=>{
      alert('Logged In')
    })
    .then(()=>{
      history.push("/")
    }).catch((error)=>{
      alert(error.message)
    })
    
  
  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="100px" height="100px" class="center" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder='Enter your email'
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
            onChange={(e)=>setPass(e.target.value)}
            placeholder='*******'
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={event =>  window.location.href='/signup'}>Signup</a>
      </div>
    </div>
  );

  }
