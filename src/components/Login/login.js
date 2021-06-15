import React , {useEffect , useState} from "react";
import { connect} from "react-redux";
import { login } from "../../store/actions/auth";
import "./login.css";
function Login(props){
  let [userEmail,setUser]= useState('');
  let [userPassword,setPassword]= useState('');

  function name(event) {
     setUser(event.target.value)
     console.log(userEmail)
    
  }
  function password(event) {
    setPassword(event.target.value)
    console.log(userPassword)
   
 }

 function submitForm(event) {

  event.preventDefault();
  props.login({email : userEmail, password : userPassword},props.history)

   
 }
    return  <div class="container marg">
    <div class="row">
    <form class="col s12" id="reg-form" onSubmit={submitForm}>
  <div class="row">
    <div class="input-field col s12">
      <input id="email" type="email" class="validate" onChange={name} required/>
      <label for="email">Email</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12">
      <input id="password" type="password" class="validate"  onChange={password} required />
      <label for="password">Password</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s6">
    </div>

    <div class="input-field col s6">
      <button class="btn btn-large btn-register waves-effect waves-light black" type="submit"  name="action">Register
       
      </button>
    </div>
  </div>
</form>

</div></div>

}

export default connect((store) =>{
  return store
},{login})(Login)