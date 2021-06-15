import React,{useEffect,useState } from "react";
import "./signup.css";
import { connect } from "react-redux";
import {signup} from '../../store/actions/auth'


function Signup(props){
  

    let [userName,setName] = useState('');
    let [userEmail,setEmail] = useState('')

    let [userPassword,setPassword] = useState('')
    let [userTransaction,setTransaction] = useState([])
    
    let userFirstTransaction = {
      number : 0,
      type : '',
      money : '',
      time : ''
    }
    function name(event){
      setName(event.target.value)
      console.log(userName)
    }
    function email(event){
      setEmail(event.target.value)
      console.log(userEmail)

    }

    function password(event){
      setPassword(event.target.value)
      console.log(userPassword)

    }

    function transaction(event){
       userFirstTransaction.type = event.target.name;
       userFirstTransaction.money= event.target.value;
       userFirstTransaction.number = 1;
       let date = new Date();
       userFirstTransaction.time = date.toLocaleTimeString()

       
      // userTransaction.push(userFirstTransaction);
      // setTransaction([...userTransaction])
      // console.log(userTransaction)
      
    }
    function submit(evt) {
      evt.preventDefault();
      userTransaction.push(userFirstTransaction);
      setTransaction([...userTransaction])
      props.signup({ name : userName, email : userEmail , password : userPassword ,total : userFirstTransaction.money , transaction : userTransaction},props.history)
      
      
    }
   
    return  <div>
    <div class="container marg">
        <div class="row">
        <form class="col s12" id="reg-form">
        <div class="row">
        <div class="input-field col s12">
          <input id="first_name" type="text" onChange={name} class="validate" required />
          <label for="first_name">First Name</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
        <input id="email" type="email" onChange={email} class="validate" required/>
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" onChange={password} class="validate" required />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="number" type="number" class="validate" onChange={transaction} min="1" name="Deposit" required />
          <label for="number">Enter Amount</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
        </div>

        <div class="input-field col s6">
          <button class="btn btn-large btn-register waves-effect waves-light black" type="submit" onClick={submit} name="action">Register
           
          </button>
        </div>
      </div>
    </form>
 
   </div>
  
   

   </div>
   
   <br/>
   <br/>
 
</div>
    
}


export default connect((store) =>{
  return store
},{signup})(Signup)