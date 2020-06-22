import React, {Component } from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { Modal, Button,Row,Col, Card} from 'antd';
import Login from './Login';
import Register from './Register';
import Margin from  './Margin';
import {delete_error_message} from './action/LoginAction';
import LogoutAction from './action/LogoutAction';



class Navbar extends Component{
    constructor(props){
        super(props)
        this.state={
            visible: false,
            loading:false,
            Visible:false,
            isLoading:false
          
        };
       
    };

    showModalRegister = () => {
        this.setState({
        Visible: true,
        });
      };
      showModal= () => {
        this.setState({
          visible: true,
        });
      };


     
    // handleCancelRegister = () => {
    //   this.setState({ Visible: false });
    // };
    
    onFormSubmit=(event)=>{
    
      this.setState({ visible: false })
        
      
      }

      onSubmit=(event)=>{
    
        this.setState({ Visible: false })
          
        
        }
      
      // handleCancelSignIn = () => {
      //   this.setState({ visible: false });
      // };
      handleLogout=(event)=>{
        const {logoutUser}=this.props;
        event.preventDefault();
        logoutUser();
        window.open('/', '_self')

      }
  

render(){

    const{auth}= this.props;
  

    const { visible, Visible } = this.state;
    return (
      <div>
      
        {!auth ?(
        <Row type="flex" justify= "end">
          
          <Margin/>
          <Col  offset={12} >
       
        <Button type="primary" color="blue" fontSize="20px"   onClick={this.showModalRegister}>Register</Button>
        <Button type="primary" clor="blue" fontSize="20px"   onClick={this.showModal}>Login</Button>
        
        </Col>
       
        </Row>
        ):(
          <div >
              <Row type="flex" justify="end">
                <Col offset={8} >
                  
                  
             <Margin/>
             </Col>
             <Col offset={3} >
                       
<button type="primary" color="blue" fontSize="20px" onClick={this.handleLogout}>
  Logout
</button>
</Col>
</Row>
          </div>
        )
}
       
     
       <div>
        <Modal
          visible={Visible}
          title="Welcome to Tshirt shop"
          footer={null}
        >
              <Register onSubmit={this.onSubmit}/>
         
        </Modal>
      
     
       
       <div>
      
     <Modal
       visible={visible}
       footer={null}
       title="Welcome to Tshirt shop"
     >
         <Login onFormSubmit={this.onFormSubmit} />
      
     </Modal>
             

     
        </div>
        </div>
        </div>
        
    )
    

}


}
const mapStateToProps=(state)=>({
  auth: state.auth.isAuthenticated,
  error: state.auth.error
});

const mapDispatchToProps=(dispatch)=>({

  logoutUser:()=>dispatch(LogoutAction()),
  delete_error_message:()=> dispatch(delete_error_message())
})


  
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);