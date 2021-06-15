import React , {useEffect,useState,Fragment} from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';
import {deposit,withdraw,checkSession,deleteTransaction} from "../../store/actions/auth";
import './dashboard.css'
function Dashboard(props) {
    let number;
    let userTransaction;
    let totalAmount;
    
    
    if(Object.keys(props.userSection.acttiveUser).length !== 0){


        let totalLength = props.userSection.acttiveUser.transaction.length;
        totalAmount = parseInt(props.userSection.acttiveUser.total);
        

        number =props.userSection.acttiveUser.transaction[totalLength-1].number;
         userTransaction =  props.userSection.acttiveUser.transaction;

        
    }
    function withdraw(id){
        
        let value = +prompt("Enter the value you want to withdraw");
        if(value < totalAmount){
        totalAmount = totalAmount - value;
        let time = new Date().toLocaleTimeString()
        userTransaction.push({
            
         number : number+1,
         type : "Withdraw",
         money : value,
         time : time

        })
        props.withdraw({
            id : id,
            newArrray :userTransaction,
            total : totalAmount
        })
    }
       else{
           alert(`Please enter amount the below than ${totalAmount}`);
       }

       }

    function deposit(id) {
     
     let value = +prompt("Enter the value you want to deposit");
     totalAmount = totalAmount+value;
     

     let time = new Date().toLocaleTimeString()

     userTransaction.push({

         number : number+1,
         type : "Deposit",
         money : value,
         time : time

     })
     props.deposit({
         id : id,
         newArrray : userTransaction,
         total : totalAmount

     })

        
    }

    function deleteTransaction(index,id) {
        let newTotal = props.userSection.acttiveUser.total;
       let user = userTransaction[index];
       if(user.type === "Deposit"){
        newTotal = parseInt(newTotal) - parseInt(user.money)
       }
       else{
        newTotal = parseInt(newTotal) + parseInt(user.money)
        
       }
       userTransaction.splice(index,1)
       props.deleteTransaction({
           id : id,
           total : newTotal,
           newArrray: userTransaction

       })
        
    }
    return ( localStorage.getItem('userToken') ?
        <>
        <h2 id="total">{props.userSection.acttiveUser.total} Rupees</h2>
        <a class="waves-effect waves-light btn-large black" id="withdraw" onClick={() =>{
            withdraw(props.userSection.acttiveUser._id)
        }} >Withdraw</a>
        <a class="waves-effect waves-light btn-large black" id="deposit" onClick={() =>{
            deposit(props.userSection.acttiveUser._id)
        }}>Deposit</a>
        <table>
            <tr><th>N#</th><th>Type</th><th>Cash</th><th>Time</th><th>Delete Transaction</th></tr>
            {
             props.userSection.acttiveUser.transaction ?  props.userSection.acttiveUser.transaction.map((item,index) => {
                return <tr><td>{item.number}</td><td>{item.type}</td><td>{item.money}</td><td>{item.time}</td>
                <td><a class="waves-effect waves-light btn red" onClick={ () =>{
                deleteTransaction(index,props.userSection.acttiveUser._id)
                }}>Delete</a></td></tr>
            }) : null
        }
        </table> 
        </>
         : <Redirect to="/login" />
    );
}
export default connect((store) =>{
    return store
},{deposit,withdraw,checkSession,deleteTransaction})(Dashboard)