import React,{useEffect,useState} from 'react';
import {BrowserRouter,Route , Link } from "react-router-dom";
import {connect} from 'react-redux';
import { logout} from '../../store/actions/auth'

import  "./header.css";
 function Header(props){
  function logout() {
    localStorage.removeItem('userToken');
    props.logout(props.history)
  }
    return (
         <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo" style={{marginLeft:"70px"}}>BOP</a>
          {Object.keys(props.userSection.acttiveUser).length === 0 ? <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li ><a  style={{fontSize : "20px"}}><Link to='/signup'>Signup</Link></a></li>
            <li><a style={{fontSize : "20px"}}><Link to='/login'>Login</Link></a></li> </ul>:   <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li ><a style={{fontSize : "20px"}} onClick={logout}>Logout</a></li> </ul> }
         
         
          
      
           
         
        </div>
      </nav>
    );
}
export default connect((store) =>{
  return store
},{logout})(Header)