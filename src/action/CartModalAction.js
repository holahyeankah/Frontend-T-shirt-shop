import {SHOW_CART_MODAL, HIDE_CART_MODAL} from './action/ModalTypes';

export const showCartModal=()=>(dispatch)=>{
    dispatch({
        type:SHOW_CART_MODAL
    })
}

export const hideCartModal=()=>(dispatch)=>{
    dispatch({
        type:HIDE_CART_MODAL
    })
}