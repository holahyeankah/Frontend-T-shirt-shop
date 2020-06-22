import React, {Component } from 'react';
import {Card, Col, Row} from 'antd';
import {connect} from  'react-redux';
import { addToCart } from './action/cartAction';
// import {Redirect, Link} from 'react-router-dom';
import CartButton from './CartButton';
// import Modal from './Modal';






class Detail extends Component{
    constructor(props){
        super(props)
        this.state ={
            data: [],
            color: [],
            size:[],
            quantity:1,
            selectedColor:null,
            selectedSize:null
            
          
          
           
            
        };
      
        }

       componentDidMount(){
    let id= this.props.match.params.id;

    fetch (`http://localhost:3005/product/${id}`)

    .then(res=>res.json())
    .then(data=>{
        if(data){
            console.log(data.AttributeValues)
            let size = [];
            let color = [];
            if (data.AttributeValues.length > 0) {
                size = data.AttributeValues.filter(att => att.attribute_id === 1);
                color = data.AttributeValues.filter(att => att.attribute_id === 2);
            }
           this.setState({data, size, color})
        }

     })
    };



 handleCart=()=>{
     const{data, size, color,selectedSize, selectedColor, quantity}=this.state
     const {addToCart}= this.props;
     const attributes=[selectedSize, selectedColor].join(',');
     const product_id = data.product_id
     const itemData={ product_id, attributes, quantity}
     addToCart(itemData)
    //   <Link  to="productcart">cart</Link>
       
        window.open('/productcart', '_self');

     
    
//   return  <Link to='/productcart'></Link>
   
 }
    handleSize(size){ 
        // e.preventDefault()
        console.log(size)
        this.setState({selectedSize:size})
    };

    

      
    handleColor(color){
        // e.preventDefault()
        console.log(color)
        this.setState({ selectedColor:color})
    }


    handlePlus=(event)=>{
        // event.PreventDefault;
        console.log(event)
        const{quantity}=this.state;
     const newQuantity=quantity+1
        this.setState({quantity:newQuantity})


    }


    handleMinus=(event)=>{
        // event.PreventDefault();
        const{quantity}=this.state;
     const newQuantity=quantity-1
        this.setState({quantity:newQuantity})


    }

render(){
    const {data,size, color, selectedColor, selectedSize, quantity}=this.state;
    const {auth}=this.props;
    // if(auth){
        
   

   


    let colors;
    console.log(color)
    if (color && color.length > 0) {
        colors = color.map((co) => (
            <div key={co.attribute_value_id}>
                 <input type= "button" style={{backgroundColor: co.value, borderRadius:"50%"}} value={co.value} onClick={() => this.handleColor(co.value)}/>
            
            </div>
        ))
    };   

    let sizes;
    console.log(size)
    if (size && size.length > 0) {
    sizes= size.map((cc) => (
            <div key={cc.attribute_value_id}>
             <input type="button" style={{backgroundColor: cc.value, fontSize:"10px"}} value={cc.value} onClick={()=>this.handleSize(cc.value)}/>
            </div>
        ))
    }  

    return (
        <div>
          

             <Row>
              <Col span={10} offset={5} style={{ marginTop: '8px'}}>
             <Card >
                 <Row type="flex">
                   
                     {sizes} 
                 </Row>

                 <Row type="flex">

                   <Col style={{marginLeft:"400px"}}>
                     {colors}
                     </Col>
                 </Row>
           
             <p>{data.product_id}</p>
           < img src={`https://res.Cloudinary.com/cwizard/image/upload/v1550669866/Turing/product%20images/${data.image}`} 
        alt="product"/><br/>
              <div style={{color:'blue'}}>
         {data.name} <br/>
          {data.price}<br/> 
          {data.discounted_price}<br/> 

          {/* <p>

         size:
          {''}

          {sizes !==null ? ( <span>{sizes} </span>) :''}

          </p>

         <p>
         color:
         {''} 
          {colors !==null ? ( <span>{colors} </span>) :''}
         </p>

         <p> */}
         <p>

             Quantity
             <input type= "button" value="-" onClick={this.handleMinus} disabled={quantity===1} />
         </p>
         
         <input  type="button" value={quantity}/>
         <p>

        Quantity
   <input type= "button" value="+" onClick={this.handlePlus} disabled={quantity===5} />
        </p>

        

          {auth ?  <CartButton addToCart={this.handleCart} color={selectedColor} size={selectedSize}/>
          
         
          : ''}

       
         <div>

    

         </div>

         

         
              </div>
    
            </Card>
            </Col>
            </Row>  
          
        </div>
    )
    

}


}
const mapStateToProps=(state)=>{

    return{
       auth:state.auth.isAuthenticated,
      
    }
};


const mapDispatchToProps=(dispatch)=>{
    return {

        addToCart:(data)=>{dispatch(addToCart(data))},
    //     CartModal:()=>{dispatch(showCartModal())}
    // }
    }
}



  
export default connect( mapStateToProps, mapDispatchToProps) (Detail);