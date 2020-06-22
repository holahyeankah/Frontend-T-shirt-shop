import {ADD_TO_CART,ADD_TO_CART_FAIL, REMOVE_ITEM,SET_TOTAL_CART_FAIL,SET_TOTAL_CART,UPDATE_CART_ITEM, UPDATE_CART_ITEM_FAIL} from '../action/actionTypes/cartTypes';


const initialState={
  
    addedProduct:[],
    total:null,
    data: null,
    error:{},
    subTotal:null,
    totalDiscount:null,
    finalPrice:null
}




 const cartReducer =(state= initialState, action)=>{
     switch(action.type){
         case ADD_TO_CART:
          return {
            ...state,
          addedProduct: {...state.addedProduct, ...action.addedProduct},
            total:action.total+ state.total
            
           };
           
           case ADD_TO_CART_FAIL:
          return {
            ...state,
          error:action.error
            
           };
           case SET_TOTAL_CART:
            return {
              ...state,
           addedProduct:action.addedProduct,
              total:action.total,
              data: action.data,
              subTotal:action.subTotal,
              totalDiscount:action.totalDiscount,
              finalPrice:action.finalPrice
              
             };
             case SET_TOTAL_CART_FAIL:
              return {
                ...state,
            error:action.data
             
                
               };
        
         case REMOVE_ITEM:
           {
            const index = state.addedProduct.findIndex(product=>product.product_id === action.addedProduct)
            if(index > -1 ){
            state.addedProduct.splice(index, 1)
         
            return state
            }
           };

           case UPDATE_CART_ITEM:
             const updatedItem=[...state.addedProduct]
             const index=updatedItem.findIndex(product=> product.product_id === action.addedProduct)
             if(index >-1){
               updatedItem[index].quantity={...updatedItem[index], ...action.addedProduct}
             }
             
        return {
          ...state,
         addedProduct:updatedItem,
       total:action.total+ state.total
            
            }

            case UPDATE_CART_ITEM_FAIL:
              return {
                ...state,
                error:action.error
              
                  }
     }
     
   

        return state

    } 
    

 

export default  cartReducer;




 