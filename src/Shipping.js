import React, { Component } from 'react';
// import './Menu.css';
import { Menu, Row, Col, Typography } from 'antd';

const { SubMenu } = Menu;
const { Text } = Typography;

class Drop extends Component {
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
      return (
        <Row type="flex" justify="space-between">
          <Col style={{ marginTop: '10px'}}>
            <Text>LOGO</Text>
          </Col>
          <Col>
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
              {
                this.state.department.map(department => (
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
          {this.props.children}
        </Row>
       
          
   
        );
    }
  }
  
export default Drop;