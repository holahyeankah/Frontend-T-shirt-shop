import React from 'react';
import {Button} from 'antd'
const cartButton=({addToCart, size, color})=>(
    <div>

   
        <Button type ='primary' onClick={addToCart} disabled={color===null|| color===[]||size===null || size===[]}>
        Add to cart
        
        </Button>
        
            </div>



)

export default cartButton;