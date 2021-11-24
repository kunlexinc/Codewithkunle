import React, { useState } from 'react';
import { Layout, Menu,Drawer,Button } from 'antd';
import { BrowserRouter as Router, Link } from 'react-router-dom';


import logo1 from './logo1.png';


function Appheader() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
    return (
        <div className="container-fluid">
            <div className="header">
        <div className="logo" ><a href='/'>
            <img src={logo1} alt='logo'/>
            {/* CodeWithKunle */}
        </a></div>
        <div className="mobileHidden">
          <Menu  mode="horizontal" defaultSelectedKeys={['1']}>
                  
                  <Menu.Item key='register'>
                    
                     <a href='/register'>Register</a>
                    

                   </Menu.Item>
                    
                    
                  {/* <Menu.Item key='login'> Login</Menu.Item> */}
                  <Menu.Item key='learn'><a href="#courses"> Learn</a></Menu.Item>
              
                </Menu>
        </div>
        <div className="mobileVisible">
        <Button type="primary" onClick={showDrawer}>
               <i className="fas fa-bars"></i>
              </Button>
              <Drawer title="CodewithKunle" placement="right" onClose={onClose} visible={visible}>
              <Menu  mode="vertical" defaultSelectedKeys={['1']}>
                  
                  <Menu.Item key='register'> Register</Menu.Item>
                  {/* <Menu.Item key='login'> Login</Menu.Item> */}
                  <Menu.Item key='learn'> Learn</Menu.Item>
                  
              
                </Menu>
              </Drawer>

        </div>
       
      
      </div>
      </div>
    )
}


export default Appheader;