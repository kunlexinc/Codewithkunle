import React from "react";
import { Button } from 'antd';


function AppMessage() {
    return(
        <div style={{backgroundColor:"black"}} className="block aboutBlock  messageBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h1>Contact Us</h1>
                   
                    <p>Send us a message today</p>

                </div>
                <div className="contentHolder">
                <a href='http://api.WhatsApp.com/send?phone=+2347068790872'>
                <Button style={{backgroundColor:"green", width:"fit-content", height:"70px" }} type="primary" size="large" >
                    Send Via WhatsApp<i className='fa fa-whatsapp'></i>
                </Button></a>
                </div>

            </div>
               
        </div>
     
    )
    
}

export default AppMessage;