import React, {Component} from 'react';
import { Row, Card, Col } from 'antd';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
//  import {removeItem} from './action/cartAction';
 import axios from 'axios';
 import {getCartItem} from './action/cartAction';
 import {deleteCart} from './action/cartAction';
 import {updateCartQuantity} from './action/cartAction';
//  import CartTable from './CartTable';

const token= localStorage.getItem("accessToken")

class Basket extends Component{
    constructor(props){
       super(props)
        this.state={
         userCart:[], 
         remove: false,
         update:false
          
          
       
        
        }
    }
    // handleRemove=( product_id)=>{
    //     this.props.removeItemProps( product_id)
    // };

    
    

    componentDidMount=()=>{

        this.getCartItem()
            //   const cart=d  
    
    }

    getCartItem = () => {
        const {getCart}= this.props;
   
      getCart().then(res => {
          console.log(res)
          this.setState({
              userCart:res.data,
            
        })
    })
}

    handleRemove=(product_id)=>{
     const {deleteCart}=this.props;
     deleteCart(product_id).then(() => {
        this.getCartItem()
     }) 
    

    };
    // handleUpdate=()=>{
    //     const{updateCart}=this.props;
    //     updateCart()
    // }
    // componentDidUpdate(prevProps, prevState){
    //     console.log("prevProps prevState", prevProps, prevState)
    //     console.log("props, state", this.props, this.state)

    // }

    // componentDidUpdate=(prevProps, prevState)=>{
    //     const{cart}=this.props
    //     const {getCart}= this.props;
    //     // const{update, userCart, remove}=prevState;
    //     // if(userCart !== this.state.userCart){
    //     //     getCart().then(res=>{
    //     //         console.log(res)
    //     //         this.setState({userCart: res.data, remove:true})
    //     //     }
    //     //         )
    //     // }
       
        
            
    //     }

    
// total(){
//    return this.props.product.reduce((total, product)=>{
//        return parseFloat(total) + parseFloat(product.price)
//          }, 0)
// }

    render(){
    //    const {cart}=this.props;
     
       const{ cart,  auth}=this.props
      
        
    //   let item =this.props.product.lenght !=="" ? You have {this.props.product.length} products in your cart: Cart is empty
        
        let addedProduct=cart && cart.length  ? (


            <Row type = "flex">
              
            {
            cart.map(prod=>{
                       return <Col key={prod.product_id} span={5} offset={1} style={{ marginTop: '25px'}}>
                            
                           <div>
                     
                   <Card style={{ maxHeight: '250px', width:"230px",  marginRight:"45px"}}>
                         
                            < img src={`https://res.Cloudinary.com/cwizard/image/upload/v1550669866/Turing/product%20images/${prod.Product.image}`} 
                          alt="product"/> 
                      
                
                {/* <p>  {prod.Product.description}</p>  */}
                        <p> Name:{prod.Product.name} </p>
                       <p> Price: ${prod.Product.price}</p>
                       <p> Discount: ${prod.Product.discounted_price}</p>
                         <p>Quantity: {prod.quantity}</p> 
                            {/* <p>{prod.item_id}</p>  */}
                        < button type ="button" style={{backgroundColor:'lightBlue', size:'1px'}} onClick={(e)=>this.handleRemove(e, prod.product_id)}>Remove cart</button>
{/* 
                        < button type ="button" style={{backgroundColor:'lightBlue', size:'1px'}} onClick={()=>this.handleUpdate(prod.product_id)}>update cart</button> */}
                       </Card>
                       </div>>
                    
                  </Col>
                   })
               }
                   </Row>
        ):(

        <p>Nothing</p>
        )
       
    
        
        
        return (
            <div >
                {/* {item} */}
                <h5>You have ordered:</h5>
              <ul>

              {addedProduct} 
          {/* <p style ={{fontSize:"35px", marginTop:"20px"}}>Total price: ${this.total()}</p> */}

            </ul> 
{/*     
     {auth ? getCart() : ''} */}


</div>

        )
    }
}

const  mapStateToProps=(state)=>{

    return{
        auth: state.auth.isAuthenticated,
        cart:state.cart.addedProduct.rows
       
    }
}

const  mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({

        getCart: getCartItem,
        deleteCart:deleteCart,
        // updateCart:(id)=>{dispatch(updateCartQuantity(id))}
    }, dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(Basket);