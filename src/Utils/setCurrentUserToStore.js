import jwt from 'jsonwebtoken';
import {setCurrentUser} from '../action/LoginAction';
import logoutAction from '../action/LogoutAction';

const setCurrentUserToStore=(store)=>{
const token=localStorage.getItem('accesToken');

if(token){

    const decodedToken=jwt.decode(token);
    try{
        const isExpired=(decodedToken.exp< (Date.now()/1000));

        if(!isExpired){
            store.dispatch(setCurrentUser(decodedToken))
        } else{
            store.dispatch(logoutAction())

        }
    } catch(error){

        store.dispatch(logoutAction())
    }
    
}




}

export default setCurrentUserToStore;