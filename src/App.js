import React,{useEffect,useState} from 'react';
import {BrowserRouter,Route , Link } from "react-router-dom";
import { Provider, connect } from 'react-redux'
import mystore from "./store/store";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Slider from "./components/slider/slider";
import Signup from "./components/Signup/signup";
import Login from "./components/Login/login.js";
import { checkSession} from "./store/actions/auth";
import Dashboard from "./components/Dashboard/dashboard";

export default  function  Main(props){
   useEffect(() =>{
   checkSession({ token:localStorage.getItem('userToken') })
   console.log('sami')
  
   },[])
  
  return (
    <div>
        <Provider store={mystore}>
        <BrowserRouter>
        <Header/>
        <Route path='/signup' component={Signup}/>
        <Route path='/login' component={Login}/> 
        <Route path='/dashboard' component={Dashboard}/> 
        <Route exact path ="/" component={Slider} />
        <Footer/>
       </BrowserRouter>
 
       </Provider> 
    </div>
   ) ;
}