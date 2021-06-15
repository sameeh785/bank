import React,{useEffect,useState} from 'react';
import "./footer.css";
export default function Footer(){
    return (
        <footer className="foot">
            <ol >
            <li style={{fontSize : "20px"}}>Contact Us</li>
            <li style={{fontSize : "20px"}}>About Us</li>
            <li style={{fontSize : "20px"}}>Term of Policy </li>
            </ol>
            <ul>
       <li><i class="fa fa-facebook-f" style={{fontSize : '24px', color : 'white'}}></i></li> 
       <li><i class="fa fa-instagram" style={{fontSize : '24px', color : 'white'}}></i></li> 
       <li><i class="fa fa-linkedin" style={{fontSize : '24px', color : 'white'}}></i></li> 
      
      </ul>
      <br/>
      </footer>
    );
}