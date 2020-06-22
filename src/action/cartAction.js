import {ADD_TO_CART, ADD_TO_CART_FAIL, REMOVE_ITEM, REMOVE_ITEM_FAIL, UPDATE_CART_ITEM, SET_TOTAL_CART, SET_TOTAL_CART_FAIL, UPDATE_CART_ITEM_FAIL, GET_DEPARTMENT, GET_DEPARMENT_FAIL} from './actionTypes/cartTypes';
import axios from 'axios';
import toastr from 'toastr';
const jwt = require('jsonwebtoken');

export const cartError=(error)=>({
    type: SET_TOTAL_CART_FAIL,
    error
    
    });

 
    export const setCurrentUserError=(error)=>({
        type: ADD_TO_CART_FAIL,
        error
        
        });

const token=localStorage.getItem("accessToken")


export const addToCart=(data)=>(dispatch)=>{
    console.log('cart items')

    axios.post('http://localhost:3005/shoppingcart', data, {
        headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${token}`}
    })
      
    
    .then(res=>{

        console.log(data)
dispatch({type:ADD_TO_CART,
     addedProduct:res.data,
     total:res.data.total
    
    });
// toastr.success('carted successfully');
      
    }).catch(error=>{
        dispatch(setCurrentUserError(error.response))
        // toastr.warning( 'cart fail')

    })
}
// const token=localStorage.getItem("accessToken");

export const getCartItem = () => dispatch => {
   return  axios.get('http://localhost:3005/shoppingcart', {
        headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${token}`}
    })   
    .then(res=>{

        // console.log(data)
 dispatch({type:
    SET_TOTAL_CART,
      data: res.data,
     addedProduct:res.data.item,
     total:res.data.totalItem,
     subTotal:res.data.subTotal,
     totalDiscount:res.data.totalDiscount,
     finalPrice:res.data.finalPrice
    });
    return res;
    
    }).catch(error=>{
        dispatch(cartError({
            status:error.response,
            data:error.response
        }))
        // toastr.warning( 'cart fail')

    })

}
export const updateCartQuantity=(id, itemQuantity)=>(dispatch)=>{
    const item={quantity: itemQuantity}
    
   return axios.put(`http://localhost:3005/shoppingcart/${id}`, item, {
        headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${token}`}
    })
      
    
    .then(res=>{

        // console.log(data)
dispatch({type:
    UPDATE_CART_ITEM,
     addedProduct:res.data.updatedItem.item,
     total:res.data.total
});
return res
    
    }).catch(error=>{
        dispatch({type: UPDATE_CART_ITEM_FAIL,
           error:error.response
        })
        // toastr.warning( 'cart fail')

    })

}

export const deleteCart=(id)=>(dispatch)=>{
    
    return axios.delete(`http://localhost:3005/shoppingcart/${id}`, {
        headers:{'Content-Type':'application/json', 'Authorization':`Bearer ${token}`}
    })
      
    
    .then(res=>{

        // console.log(data)
dispatch({type:
REMOVE_ITEM,
     addedProduct:res.data,
     total:res.data.total
});
return res
    
    }).catch(error=>{
        dispatch({type: REMOVE_ITEM_FAIL,
           error:error.response
        })
        // toastr.warning( 'cart fail')

    })

}

// export const getDepartment=()=>(dispatch)=>{
//     return axios.get('http://localhost:3005/department')
//     .then(res=>{

// return dispatch({
//     type:GET_DEPARTMENT,
//     department:res.data
// });
// return res;
// })
    
    
//     // .catch(error=>{

//     // //     dispatch({
//     // //         // type:GET_DEPARTMENT_FAIL,
//     // //         error:error.response
//     // //     })
//     // // })

// }







