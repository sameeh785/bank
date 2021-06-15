import axios from "axios";
// import myStore from "../store";


export  const  signup = (payload,history) => async(dispatch) =>{

    try{
       
 
    let resp = await axios.post('/signup',payload);
    localStorage.setItem('userToken',resp.data.token)
    dispatch({
        type : "USER-IN",
        data : resp.data.user
    })
     history.push("/dashboard");
    }
    catch(e){
        console.log(e.response.data)
    }
}

export const login = (payload,history) => async(dispatch) =>{
        try{
        let res = await axios.post('/login',payload)
        localStorage.setItem('userToken',res.data.token)
        dispatch({
            type : "USER-LOGIN",
            data : res.data.user
        })
        history.push('/dashboard')
        }
        catch(e){
            console.log(e.response.data)
        }
    }

export const checkSession =  (token) =>async(dispatch) =>{
   
  try {
      if(token){
    let respond = await axios.post('/session',token);

    dispatch({
    type : "USER-SIGNUP",
    data : respond.data
    })}
   
  } catch (e) {
    console.log(e.response.data)
  }

}

export const logout = (history) => async(dispatch) =>{
    try{
       dispatch({
           type : "USER-LOGOUT"
       })
       history.push('/login')
    }
    catch(e){
      console.log('User cant logout')
    }

}

export const deposit = (payload) => async(dispatch) =>{
    try{
     let res = await axios.put('/deposit',payload)
     
    //  console.log(res)
     dispatch({
         type : "Enter Deposit",
         data : res.data
     })
    
    }
    catch(e){
        console.log(e.response.data)

    }
    
}

export const  withdraw = (payload) => async(dispatch) =>{
   try{
      let respond = await axios.put('/withdraw',payload);
      dispatch({
          type : "Enter Withdraw",
          data : respond.data
      })

   }
   catch (e){
       console.log(e.response.data)
   }
}


export const deleteTransaction = (payload) => async(dispatch) =>{

   try{
    let respond = await axios.put('/deleteTransaction',payload)
    dispatch({
        type : "UPDATED-USER",
        data : respond.data
    })
   }
   catch(e){
       console.log(e.response.data)
   }
}