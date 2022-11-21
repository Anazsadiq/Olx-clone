import React, { useState, Fragment, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header'
import {FirebaseContext,AuthContext} from '../../Store/FirebaseContext'
import {useHistory} from 'react-router-dom'

const Create = () => { 
  const {firebase}=useContext(FirebaseContext)
  const {user}=useContext(AuthContext)
  const [name,setName] = useState('');
  const [category,setCategory]=useState('');
  const [price,setPrice]=useState('');
  const [image,setImage]=useState(null);
  const date = new Date()
  const history = useHistory()
  const handleSubmit=()=>{
        firebase.storage().ref(`/image/${image.name}`).put(image).then(({ref})=>{
          ref.getDownloadURL().then((url)=>{
           
            firebase.firestore().collection('products').add({
              name,
              category,
              price,
              url,
              userId:user.uid,
              createAt:date.toDateString()
            })
            history.push('/')
          })
    })
  }
  return (
    <>
      <Header />
      <card>
        <div className="centerDiv">
        
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              name="Name"
              value={name}
              id="fname"
            onChange={(e)=>setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              name="category"
              value={category}
              id="fname"
              onChange={(e)=>setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number"  name="Price" 
            value={price}id="fname"
            onChange={(e)=>setPrice(e.target.value)}
            />
            <br />
  
          <br />
          <img  alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) : '' } ></img>
          
        
            <br />
            <input  onChange={(e)=>{
              setImage(e.target.files[0])
            }} type="file" />
            <br/>
            <button onClick={handleSubmit} className="uploadBtn">Submit</button>
          
        </div>
      </card>
    </>
  );
};

export default Create;
