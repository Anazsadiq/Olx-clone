import React, {useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContext, FirebaseContext} from '../../Store/FirebaseContext';
import {useHistory} from 'react-router-dom'
function Header() {
 const history = useHistory()
 const {user} = useContext(AuthContext)
 const {firebase} = useContext(FirebaseContext)
 
  return ( 
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <a  onClick={event =>  window.location.href='/login'}>{user ? user.displayName : 'Login' }</a>
           <hr />
        </div>
            {user && <a onClick={()=>{
              firebase.auth().signOut()
              history.push('/')
            }}>Logout</a>}
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={event =>  window.location.href='/create'}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
