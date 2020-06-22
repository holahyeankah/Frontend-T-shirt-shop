import {combineReducers} from 'redux';
import {auth} from './authReducer';
import {LOGOUT_USER} from  '../action/actionTypes/LogoutTypes';

import cartReducer from './cartReducer';

const appReducer=combineReducers({
    auth:auth,
   cart: cartReducer,
});

export const rootReducer=(state, action)=>{
    // if(action.type=== LOGOUT_USER){

    //     state.cart.total=null
    // }
    return appReducer(state, action);
}

export default rootReducer;