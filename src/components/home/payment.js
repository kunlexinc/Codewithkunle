import React from "react";
import {Row,Col} from 'antd';
import { Button } from 'antd';
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';


function AppPay() {
    return(
        <div className="block payBlock">
            <div className="container-fluid">
            <Row gutter={[48, 16]}>
            <Col  xs={{ span: 24}} lg={{ span: 12}}>
                <div style={{ alignItems:"center", justifyContent:"center"}}>
                <img style={{margin:"auto", justifyContent:"center", alignItems:"center", paddingLeft:"60px"}} src='https://codewithchris-wpengine.netdna-ssl.com/img/afc/completed-28-day-challenge.png' />
                </div>
            </Col>
            <Col  xs={{ span: 24}} lg={{ span: 12}}>
                <div>
                    <div className="titleHolder">
                        <h1>Get Started On Your Fullstack Development Journey!</h1>
                        <p>HTML  CSS Bootstrap Firebase Reactjs Nodejs Github</p>


                    </div>

                    <div className="contentHolder">
                    <h1>N100,000</h1>
                    <p>Best price you can get</p>
                    
                   <Link to="/register"> <Button style={{backgroundColor:"green", width:"40%", height:"70px" }} type="primary" size="large" >
                    Pay Now!
                </Button></Link>

                    </div>

                  
                </div>
            </Col>

            </Row>


            </div>           
        </div>
     
    )
    
}

export default AppPay;