import React, {Component } from 'react';
import axios from 'axios';
import {Card, Row,Col} from 'antd';







const token=localStorage.getItem("accessToken")


class Admin extends Component{
    constructor(props){
        super(props)
        this.state={
            customer:{},
            credit_card:'',
            address_1:'',
            address_2:'',
            city:'',
            region:'',
            postal_code:'',
            country:''
        };
       
    };
  
    

componentDidMount(){

axios.get('http://localhost:3005/test/all', {
     headers:{'Content-Type':'application/json', 'Authorization': `Bearer ${token}`}, 
      
    }).then(res=>{
        console.log(res.data)
        this.setState({customer:res.data})
    })
    
}
onCreditChange=(event)=>{
    this.setState({credit_card: event.target.value})
  }
  onAddress1Change=(event)=>{
    this.setState({address_1: event.target.value})
  }
  onRegionChange=(event)=>{
    this.setState({region: event.target.value})
  }
  onPostalChange=(event)=>{
    this.setState({postal_code: event.target.value})
  }
  onCountryChange=(event)=>{
    this.setState({country: event.target.value})
  }
  onCityChange=(event)=>{
    this.setState({city: event.target.value})
  }
  onAddress2Change=(event)=>{
    this.setState({address_2: event.target.value})
  }
 


    onSubmitButton = (event) => {
        fetch('http://localhost:3005/customer',{
          method:'Put',
          headers:{'Content-Type':'application/json','Authorization': `Bearer ${token}`},
          body:JSON.stringify({
            credit_card:this.state.credit_card,
            address_1:this.state.address_1,
            address_2:this.state.address_2,
            city:this.state.city,
            region:this.state.region,
            postal_code:this.state.postal_code,
            country:this.state.country

    
          })
        }) 
        .then(res=> res.json())
        .then(data=>{
          window.open('/')
            console.log(data)
        })
        
          
     
        
       
   
}


    //  .then(res=>console.log(res.data))   

    // }


render(){
    
const {customer}=this.state

      
  



    return (
        <div>
         
              <p>
            
            {customer.data ? (
                <div>
                    <Row type="flex" justifyContent="space-between">
                        <Col span={10} offset={6}  >

                    <Card style={{marginTop:"20px",Heigth:"50px", backgroundColor:"lightBlue", }}>
                        <div style={{fontSize:"20px"}}>
                            WELCOME TO OUR SITE
                        </div><br/>
                        <p> {customer.data.name}'s personal details</p>
                    <p><strong>Id:</strong> {customer.data.id}</p>
                    <p><strong>Name:</strong> {customer.data.name}</p>
                    <p><strong>Email:</strong> {customer.data.email}</p>
                    <Row type="flex" >
                    <Col >
                    
                      Credit_card:<input type="text" onChange={this.onCreditChange}/><br/> 
                     City:<input type="text"  onChange={this.onCityChange}/><br/>
                     Region:<input type="text" onChange={this.onRegionChange}/><br/>
                     Address_1:<input type="text" onChange={this.onAddress1Change}/><br/>
                     Address_2:<input type="text"  onChange={this.onAddress2Change}/><br/> 
                     Postal_code:<input type="text" onChange={this.onPostalChange}/><br/>
                     Country:<input type="text" onChange={this.onCountryChange}/><br/>
                    
                     <button onClick={this.onSubmitButton}>Submit</button>
                   
                     </Col>
                     </Row>
                    </Card>
                        </Col>
                    </Row>
                   
                </div>
            ) : ''} 

 
                   
            

            </p>

         
  
         
        </div>
    )
    

}


}



  
export default Admin;