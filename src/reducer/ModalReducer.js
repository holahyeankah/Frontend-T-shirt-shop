import {SHOW_CART_MODAL, HIDE_CART_MODAL} from './action/ModalTypes';

const initialState={
    current:null,
}


export default(state=initialState, action)=>{

    switch(action.type){
        case SHOW_CART_MODAL:
            return{
                ...state,
                current:'cart'
            };
        
            case HIDE_CART_MODAL:

                return{
                    ...state,
                    current:null
                };
            

            default:
                 return state
    }


}