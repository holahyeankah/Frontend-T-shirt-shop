import axios from 'axios';
import toastr from 'toastr';
import { SET_CURRENT_USER, SET_CURRENT_USER_FAIL, DELETE_ERROR_MESSAGE } from './actionTypes/LoginTypes';
import jwt from 'jsonwebtoken';

const URL='http://localhost:3005/customer/login' 

export const setCurrentUser=(user)=>({
type: SET_CURRENT_USER,
user

});

export const setCurrentUserError=(error)=>({
    type: SET_CURRENT_USER_FAIL,
    error
    
    });


export const delete_error_message=()=>({
    type: DELETE_ERROR_MESSAGE,
    
    
    });

   export const loginAction=(userDetails)=>(dispatch)=>{
       console.log('i am called')
        // const user={user:userDetails};
        return axios.post(URL, userDetails)
        .then(res=>{
            console.log(res.data)
const {message}= res.data;
const {token}= res.data;
localStorage.setItem('accessToken', token);
dispatch(setCurrentUser(jwt.decode(token)));
toastr.success(message);


return true

        }).catch(error=>{
            dispatch(setCurrentUserError(error.response))
            toastr.warning( 'Login fail')
        })
    }

    export default loginAction;

