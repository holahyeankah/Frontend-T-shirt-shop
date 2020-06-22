import React, {Component} from 'react';
import { Modal, Button,Card} from 'antd';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {loginAction} from './action/LoginAction';
import {delete_error_message} from './action/LoginAction';
import UserInputValidation from  './action/LoginValidator';


class Login extends Component {
  constructor(props){
    super(props)
this.state = {
 
    email:'',
    password:'',
    errors:{},
    isLoading: false

  }
};

  
 
  onChange=(event)=>{
    const{errors}=this.state;
    if(errors[event.target.name]){
      const newErrors=Object.assign({}, errors);
      delete newErrors[event.target.name];
      this.setState({[event.target.name]: event.taget.value,
        errors:newErrors
      })
    }else{
      this.setState({[event.target.name]: event.target.value})
    }
  }

  handleDelete=(event)=>{
    const {delete_error_message}= this.props;
    delete_error_message();
    this.setState({
      password:'',
      password_confirmation:''
    })
  }

  onFormSubmit = (event) => {
    const{login}=this.props;
    event.preventDefault();
    if(this.isValid){
      this.setState({errors:{}, isLoading:true})
      login(this.state).then(()=>{
        // history.push('/product');
        // window.open('/admin','_self')
        this.props.onFormSubmit()
        this.setState({isLoading: false})
      })
    }
  }
    
    
  

isValid=()=>{

  const{errors, isValid}= UserInputValidation.loginInputValidation(this.state);



  if(!isValid){
    this.setState({errors, password:''})
  }
  return isValid;
}

  render() { 
    const{error,auth}=this.props;
const{email, password, errors, isLoading}=this.state;

if(auth){
  return <Redirect to='/'/>
};

if(isLoading){
  return  'Loading....'
}
     
 
    return (
      <div>
     
          <form >
            <Card  justify="space-between" span={3} offset={3}>
            <legend> SIGN IN</legend>
             
                <label>Email</label><br/>
    <input type ='email' name="email" value={email} error={errors.email} onChange={this.onChange}/><br/>
              <label>Password</label><br/>
            <input type = 'password' name="password" value={password} error={errors.password}  onChange={this.onChange}/><br/>
            <div style={{marginTop:'40px' }}>

            <Button style={{backgroundColor:'lightBlue'}} key="submit" color="primary" loading={isLoading} onClick={this.onFormSubmit}>
            Login
           </Button>
           </div>

            </Card>
            </form>
            
    
     
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  auth: state.auth.isAuthenticated,
  error: state.auth.error
});

const mapDispatchToProps=(dispatch)=>({

  login:user=>dispatch(loginAction(user)),
  delete_error_message:()=> dispatch(delete_error_message())
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)


    // })