import React, { Component } from 'react';
// import './Menu.css';
import { Menu, Row, Col, Typography } from 'antd';

const { SubMenu } = Menu;
const { Text } = Typography;

class Margin extends Component {
    constructor(){
        super();
        this.state ={
        current: '',
        department: [],
        }
    }
 


    componentDidMount(){

      fetch(`http://localhost:3005/department`)
      .then(res=>res.json())
      .then(data=>{
        if(data){
          console.log(data)
          this.setState({ department: data  })
        }
      })
    }


  
    handleClick = e => {
      console.log('click ', e);
      this.setState({
        current: e.key,
      });
    };
  
    render() {
      const {department}=this.state;
      if(!department){
        return 'Loading....'
      };

      
      return (
        <Row type="flex" justify="space-between">
          <Col >
            <Text></Text>
          </Col>
          <Col>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              {
                department.map(department => (
                  <SubMenu className="camry" key={department.department_id}
              title={

                <span className="submenu-title-wrapper">
                  {department.name}
                </span>
              }
            >
              {
                department.Categories.map(category => (
                <Menu.Item key={category.category_id}>
                  {category.name}
                  </Menu.Item>
                ))
              }
            </SubMenu>
                ))
            }
            </Menu>
          </Col>
         
        </Row>
       
          
   
        );
    }
  }
  
export default Margin;