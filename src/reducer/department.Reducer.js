
import {GET_DEPARTMENT, GET_DEPARTMENT_FAIL} from './actionTypes/cartTypes';

const initialState={
    error:{}
}



export const department=(state=initialState=[], action)=>{

    switch(action.type){

        case GET_DEPARTMENT:{
            return{
                ...state,
                department: action.department
            }
        };
            case GET_DEPARTMENT_FAIL:{
                return{
                    ...state,
                    error: action.error
                }
            };
     
        

        default: return state;
    }
}
