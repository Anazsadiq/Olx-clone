import React, {useState,useContext} from 'react';
import {useHistory} from 'react-router-dom';
import Logo from '../../olx-logo.png';
import {FirebaseContext} from '../../Store/FirebaseContext';
import './Signup.css';

export default function Signup() {

  const history=useHistory()
  const [username, setUsername] = useState('');
  const [email,setEmail]=useState('');
  const [phone,setPhone]=useState('');
  const [pass,setPass]=useState('');
  const {firebase}=useContext(FirebaseContext)
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(firebase)
    firebase.auth().createUserWithEmailAndPassword(email,pass).then((result)=>{
      result.user.updateProfile({displayName:username}).then(()=>{
        firebase.firestore().collection('users').add({
          id:result.user.uid,
          username:username,
          phone:phone
      }).then(()=>{
        history.push("/login")
      })
    })
  })
  }
  
  
  return (
    <div>
      <div className="signupParentDiv">
        <img width="100px" height="100px" class="center" alt="description" src={Logo}/>
        <form onSubmit={handleSubmit}>
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
            onChange={(e)=>setEmail(e.target.value)}
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
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
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
          <button>Signup</button>
        </form>
        <a onClick={event =>  window.location.href='/login'}>Login</a>
      </div>
    </div>
  );
}
