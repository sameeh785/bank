import { createStore,applyMiddleware,combineReducers } from "redux";
import thunk from 'redux-thunk';

let initialUserData = {
    acttiveUser: {},
        // users : []
   
}
function userSection(state=initialUserData, action) {
    state = {...state}
    if(action.type == "USER-LOGIN"){
     state.acttiveUser = action.data
    }else if(action.type == "USER-SIGNUP"){
     state.acttiveUser = action.data
    } else if(action.type =="USER-LOGOUT"){
        state.acttiveUser = {}
    } else if(action.type == "USER-IN"){
        state.acttiveUser = action.data
    } else if(action.type == "Enter Deposit"){
        state.acttiveUser = action.data
    } else if(action.type == "Enter Withdraw"){
        state.acttiveUser = action.data
    } else if(action.type == "UPDATED-USER"){
        state.acttiveUser = action.data
    }
    return state
}

let allSections = combineReducers({userSection})

let myStore = createStore(allSections , {} , applyMiddleware(thunk))
export default myStore