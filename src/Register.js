import React, {Component} from 'react';
import { Button,Card} from 'antd';
import {Redirect} from 'react-router-dom';
import  SignUpInputValidation from  './action/SignUpValidator';
import {deleteErrorMessage} from './action/signUpAction';
import signUpAction from './action/signUpAction'

//  import './Login.css';
import {connect} from 'react-redux';


class Register extends Component {
  state = {
    isLoading: false,
    current: false,
    errors:{},
    name:'',
    email:'',
    password:'',
   

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
    const {deleteErrorMessage}= this.props;
    deleteErrorMessage();
    this.setState({
      password:'',
      password_confirmation:''
    })
  }

  onSubmit= (event) => {
    const{signUp}=this.props;
    event.preventDefault();
    if(this.isValid){
      this.setState({errors:{}, isLoading:true})
    signUp(this.state).then(()=>{
        // history.push('/product');
        // window.open('/admin','_self')
        this.props.onSubmit()
        this.setState({isLoading: false})
      })
    }
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false, visible: false });
    }, 3000);
}

isValid=()=>{

  const{errors, isValid}= SignUpInputValidation.InputValidation(this.state);



  if(!isValid){
    this.setState({errors, password:''})
  }
  return isValid;
}

  render() { 
    const{error,auth}=this.props;
const{name, email, password, errors, isLoading}=this.state;

if(auth){
  return <Redirect to='/product'/>
};

if(isLoading){
  return  'Loading....'
}
     
 
    
  
    return (
      <div>
        
          <form >
            <Card  justify="space-between" span={3} offset={3}>
            <legend> REGISTER</legend>
            <label>Name</label><br/>
            <input type = 'name' name="name" value={name} error={errors.name}  onChange={this.onChange}/><br/>
             
                <label>Email</label><br/>
    <input type ='email' name="email" value={email} error={errors.email}  onChange={this.onChange}/><br/>
              <label>Password</label><br/>
            <input type = 'password' name="password" value={password} error={errors.password}  onChange={this.onChange}/><br/>

            <div style={{marginTop:'40px' }}>
            
            <Button style={{backgroundColor:'lightBlue'}} key="submit"  loading={isLoading} value="Register" onClick={this.onSubmit}>
             Register
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

  signUp:user=>dispatch(signUpAction(user)),
  deleteError:()=> dispatch(deleteErrorMessage())
})


export default connect(mapStateToProps, mapDispatchToProps)(Register)
