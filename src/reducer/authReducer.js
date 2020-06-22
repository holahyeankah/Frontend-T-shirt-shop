import {SET_CURRENT_USER, SET_CURRENT_USER_FAIL, DELETE_ERROR_MESSAGE} from '../action/actionTypes/LoginTypes';
import {LOGOUT_USER} from  '../action/actionTypes/LogoutTypes';

const initialState={
isAuthenticated: false,
    user:{},
    error:{}
}


export const auth= (state=initialState, action)=>{

    switch(action.type){
   case SET_CURRENT_USER:{
   return {
       ...state,
       isAuthenticated:(action.user),
       user:action.user
   };
 
   }
   case SET_CURRENT_USER_FAIL:{
       return{
           ...state,
           isAuthenticated:false,
           user:{},
           error:action.error
       };
       
}
case DELETE_ERROR_MESSAGE:{

    return{
        ...state,
        isAuthenticated:false,
        error:{}
    }
}

case LOGOUT_USER:{
    return{
        ...state,
        ...initialState

    }
}

        default: 
        return state
    }
}

