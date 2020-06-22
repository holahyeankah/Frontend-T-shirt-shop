import React, { Component}from 'react';
import {getCartItem, deleteCart, updateCartQuantity} from './action/cartAction';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux'

class CartTable extends Component{
    constructor(props){
        super(props);

       this.state={

            cart:[],
           update:false,
           remove:false
          
    };

    // this.quantityChange=this.quantityChange.bind(this)

    }
 

    componentDidMount(){
        const {getCart}=this.props;
        getCart().then(()=>this.getCartItem())
            
        };
// .then(res=>{
// this.setState({cart: res.data})

//         })
        
        getCartItem = () => {
            const {getCart}= this.props;
       
          getCart().then(res => {
              console.log(res)
              this.setState({
                  cart:res.data.item.rows,
                
            })
        })
    }

        // componentDidUpdate=(prevState,)=>{
        //     const{getCart}=this.props;
        //     const{update, remove}=prevState;
        //     if(update!==this.state.update){
        //         // getCart().then(res=>{
        //         //     this.setState({
        //         //         cart:res.data,
        //         //         update:false
        //         //     })
        //         // })
        //     }
        //     if(remove!==this.state.remove){
        //         getCart()
                
        //         .then(res=>{
        //             this.setState({
        //                 cart:res.data,
        //                 remove:false})
                       
        //         })
        //     }

        // }

    

    quantityChange=(event, item_id)=>{
        const{updateCart}=this.props;
        const {cart}= this.state;
        const updatedCart = [...cart]
        const index=updatedCart.findIndex(item=>item.item_id === item_id)
        const { name, value } = event.target
        console.log(updatedCart)
        if (index > -1) {
            updatedCart[index].quantity = event.target.value
            updateCart(name, value).then(() => {
                this.setState({ update: true, cart: updatedCart})
            });
        } else {
            this.setState({ cart: updatedCart})
        }

    }

    deleteChange=(event)=>{
        // const{cart}=this.state;
        // const  newCart = [...cart];
        const{deleteCart}=this.props;
        const{name}=event.target
        deleteCart(name).then(()=>this.getCartItem())
    };




    render(){
        const {count, subTotal, totalDiscount, finalPrice}=this.props;
        const { cart } = this.state
        if(cart===null){
            return 'Loading...'
        }

        return(
            <div>
                {count > 0 ?(
                    <div>
                        <h4>
                        {count}
                        {''}
                        {count >1 ?"=items in your cart" :"=item in your cart"}
                        </h4>

                        <table border="1">

                            <thead>
                                <tr>
                                    <th scope="col"/>
                                    <th scope="col">
                                        Item
                                    </th>
                                    <th scope="col">
                                        Attributes
                                    </th>
                                    <th scope="col">
                                        Quantity
                                    </th>
                                    <th scope="col">
                                        Unit price/Total price
                                    </th>
                                    {/* <th scope="col">
                                    Total price 
                                    </th> */}
                                </tr>
                            </thead>
                            <tbody>

                                {cart.map(item=>(
                                    (
                                        <tr key={item.item_id}>
                                            <td>
                                            < img src={`https://res.Cloudinary.com/cwizard/image/upload/v1550669866/Turing/product%20images/${item.Product.image}`} 
                                  alt="product"/> 
                                  {''}
                                            </td>
                                            <td>
                                        <Link to ={`/item/${item.product_id}`}>
                                        <p>
                                       {item.Product.name}
                                        </p>
                                        
                                        </Link>
                                        <p>
                                            <input type="submit" name={item.item_id} value="Remove" onClick={this.deleteChange}/>
                                        </p>
                                            </td>
                                            <td>{item.attributes}</td>
                                            <td>
                                                <div>
                                                <select
                                                    name={item.item_id}
                                                    id="exampleSelect1"
                                                    value={item.quantity}
                                                    onChange={(e)=>this.quantityChange(e, item.item_id)}
                                                    >
                                                        <option defaultValue/>
                                                        <option value="1">1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                        <option value="4">4</option>
                                                        <option value="5">5</option>
                                                   

                                                </select>
                                                </div>
                                            </td>
                                            <td>
                                                <td className="text-right">
                                                    $
                                                    {item.Product.price}
                                                </td>
                                        
                                                
                                                <td className="text-right">
                                                    $
                                                    {parseFloat(Math.round((item.quantity*item.Product.price)*100)/100).toFixed(2)}
                                                </td>
                                            </td>

                                        
                                    </tr>
                                    )

                                ))}
                                <tr>

                                    <td/>
                                    <td/>
                                    <td/>
                                      <td/>
                                      <td>sub-Ttotal cost</td>
                                      <td classname="text-right">
                                      $
                                   {parseFloat(Math.round((subTotal)*100)/100).toFixed(2)}

                                      </td>
                                </tr>
                                 <tr>

                                    <td/>
                                    <td/>
                                    <td/>
                                      <td/>
                                      <td>Total discount</td>
                                      <td classname="text-right">
                                      $
                                   {parseFloat(Math.round(totalDiscount*100)/100).toFixed(2)}

                                      </td>
                                </tr>
                                <tr>

                                <td/> 
                                <td/>
                               <td/>
                               <td/>
                              <td>final price</td>
                          <td classname="text-right">
                            $

                       {parseFloat(Math.round((finalPrice)*100)/100).toFixed(2)}
                       </td>
                    </tr>
                      {/* <tr>

                                <td/> 
                                <td/>
                               <td/>
                               <td/>
                              <td>sub-Ttotal cost</td>
                          <td classname="text-right">
                            $

                       {parseFloat(Math.round((cart.subTotal)*100)/100).toFixed(2)}
                       </td>
                    </tr>
                    <tr>

                        <td/> 
                        <td/>
                        <td/>
                        <td/>
                        <td>Total Discount</td>
                        <td classname="text-right">
                        $

                        {parseFloat(Math.round((cart.totalDiscount)*100)/100).toFixed(2)}
                        </td>
                        </tr>
                        <tr>

                        <td/> 
                        <td/>
                        <td/>
                        <td/>
                        <td>Total cost</td>
                        <td classname="text-right">
                        $

                        {parseFloat(Math.round((cart.finalPrice)*100)/100).toFixed(2)}
                        </td>
                        </tr> */}
                        <tr>

                                <td/> 
                                <td/>
                                <td/>
                                <td/>
                                <td colSpan="2"> Excluding shipping cost</td>
                               
                                </tr>
 
                            </tbody>
                        </table>
                        <div>
                            <Link to= "/item">
                             <button type="button" className="btn btn-block continue shopping">Continue shopping</button>
                             </Link>
                    </div>
                    </div>
                   

                ):(
                    <div>
                        <h3>Loading...</h3>
                    </div>
                )}
                
            </div>
        )
    }



}
const  mapStateToProps=(state)=>{

    return{
        auth: state.auth.isAuthenticated,
        cart:state.cart.addedProduct.rows,
        count: state.cart.addedProduct.count,
        subTotal: state.cart.subTotal,
        totalDiscount:state.cart.totalDiscount,
        finalPrice:state.cart.finalPrice
       
    }
}


  const mapDispatchToProps=(dispatch)=>{
    return bindActionCreators({
        getCart:getCartItem,
        deleteCart:deleteCart,
        updateCart:updateCartQuantity
    }, dispatch)
    }
       
    






export default connect(mapStateToProps, mapDispatchToProps)(CartTable)