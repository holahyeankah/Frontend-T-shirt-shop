import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import Margin from  './Margin';
import Detail from './Detail';
// import Custom from './Custom';
import CartTable from './CartTable';


import Navbar from './Navbar';
// import Particles from 'react-particles-js';
import {Row, Col, Button} from 'antd';
import Admin from './Admin';
import Basket from './ProductCart';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';



class App extends Component{
  constructor(props){
  super(props);
  this.state ={
  
  }
  // this.handleClick= this.handleClick.bind(this)

 };




 


render(){
  // const authenticated = localStorage.getItem('isAuthenticated')
  
return(
  <div>
    <Col offset={7} ><Navbar/></Col>
   <Row type="flex" justify="middle" >
   
  

  
      {/* <Row type="flex" justify="space-between"><Col offset={8} ><Custom /></Col>
      <Col offet={8}><Nigeria /></Col></Row> */}
    
   
     
     
 
    
    </Row> 
        
<Router>

<Switch>
<Route exact path ='/navbar' component={Navbar}/>
{/* <Route exact path ='/custom' component={Custom}/> */}


<Route exact path ='/admin' component={Admin}/> 
  <Route exact path ='/item'  component={CartTable}/>

  
  {/* <Route  exact path ='/product' component={Product}/> */}
    
 <Route exact path ='/product/:id' component={Detail}/>

 <Route exact path ='/' component={Home}/>

<Route exact path ='/productcart' component={Basket}/> 
 
 
</Switch>

</Router>







     



{/* <Particles className="league"
    params={{
      particles:{
        number:{
          value:200,
          density:{
            enable:true,
            value_area:900,
          }
        }
      }
      
    }}/> */}

</div>

);

}

}

export default App;
