import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Pagination} from 'antd'
import './Product.css';

class Home extends Component{
    constructor(props){
    super(props)
    this.state ={
    product: [],
    page: 1,
    limit: 25,
    paginationMeta:{},

    
  };
  
    }


    
  
   
  componentDidMount(){
    this.fetchProduct()
  }

  fetchProduct = (searchTerms=null) => {
    const { page, limit } = this.state;
    const url = searchTerms !== null && searchTerms !== ''
    ? `http://localhost:3005/product?page=${page}&limit=${limit}&searchTerm=${searchTerms}`
    : `http://localhost:3005/product?page=${page}&limit=${limit}`

    fetch(url)
      .then(res=>res.json())
      .then(data=>{
        if(data){
          this.setState({product: data.products, paginationMeta: data.paginationMeta})
        }
      })
  }

  onPageChange = (page) => {
    this.setState({ page }, () =>  this.fetchProduct())
  }


  onSearch = (e) => {
    if(e.target.value.lenght > 0){
      this.setstate({disabled: false})
    }
     this.setState({ page: 1 })
    this.fetchProduct(e.target.value)
  }
 
  
  
  
    render() {
      const {product}= this.state;
     
      
      let productRender;
      if (product && product.length) {
        productRender = (
          <Row type="flex" >
            {
              product.map((product, index) => (
                  <Col key={index} span={5} offset={1} style={{ marginTop: '25px'}}>
                                    
                    <Link  to={`/product/${product.product_id}`}>
                       <Col>
                      
                       </Col>
                  <Card style={{ maxHeight: '240px', marginRight:"45px"}}>
                    <div>
                 
                    < img src={`https://res.Cloudinary.com/cwizard/image/upload/v1550669866/Turing/product%20images/${product.image}`} 
              alt="product"/>
          
             

              {product.name}:{product.price}
          
                    </div> 
                  </Card>
                  </Link>
                  </Col>
              ))
            }
          </Row>
        )
      }
      
    return (
        <div>
          <Row  style={{marginLeft:'400px', marginBottom:'9px', marginTop:'0.01px'}} >

            <div className>
     
            <input  type='search' placeholder='search products' onChange={this.onSearch}/>
            

            </div>          
        
          </Row>
  
        {productRender}
        <Row type="flex" justify="end">
          <Pagination current={this.state.page}
          pageSize={this.state.limit}
          total={this.state.paginationMeta.totalItems}
          onChange={this.onPageChange}
          />
        </Row>

    </div>
    
    
    
    )
  
   }
  }
 
//   const mapStateToProps=(state)=>{
//     return{
//         product: state.product
//     }
// }

// const mapDispatchToProps=(dispatch)=>{
//     return {

//         addToCartProps:(product)=>{dispatch(addToCart(product))}
//     }
// }

export default Home
  

