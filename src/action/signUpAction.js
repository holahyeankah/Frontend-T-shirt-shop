import axios from 'axios';
import toastr from 'toastr';
import { SET_CURRENT_USER, SIGN_UP_ERROR, DELETE_ERROR_MESSAGE } from './actionTypes/signUpTypes';
import jwt from 'jsonwebtoken';

const URL='http://localhost:3005/customer/register' 

export const setCurrentUser=(user)=>({
type: SET_CURRENT_USER,
user

});

export const signUpError=(error)=>({
    type: SIGN_UP_ERROR,
    error
    
    });


export const deleteErrorMessageSuccess=()=>({
    type: DELETE_ERROR_MESSAGE,
    
    
    });
    export const deleteErrorMessage=()=>(dispatch)=>{
        dispatch(deleteErrorMessageSuccess())
    }

   export const signUpAction=(userData)=>(dispatch)=>{
       console.log('i am called')
        // const user={user:userDetails};
        return axios.post(URL, userData)
        .then(res=>{
            console.log(res.data)
const {message}= res.data;
const {token}= res.data;
localStorage.setItem('accessToken', token);
dispatch(setCurrentUser(jwt.decode(token)));
toastr.success('registered successfully')
return true

        }).catch(error=>{
            dispatch(signUpError(error.response))
            toastr.warning('Registration fail')
        })
    }

    export default signUpAction;

