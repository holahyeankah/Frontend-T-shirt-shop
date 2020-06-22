import {LOGOUT_USER } from './actionTypes/LogoutTypes';


export const logoutCurrentUser=()=>({
    type: LOGOUT_USER
});


const logoutAction=()=>(dispatch)=>{
    localStorage.removeItem('accessToken');
    dispatch(logoutCurrentUser({}))
}

export default logoutAction;