import React from "react";

import copy from './copy.png'

import {Row,Col} from 'antd';





function AppAbout() {
    return( 
        <div className="container-fluid aboutBlock">
          <Row gutter={[48, 16]}>
            <Col style={{ margin:"auto"}}  xs={{ span: 24}} lg={{ span: 12}}>
                <div>
                    <img src={copy} alt="kunle picture" />
                </div>
            </Col>
            <Col  style={{ margin:"auto", padding:"50px auto"}} xs={{ span: 24}} lg={{ span: 12}}>
                <div style={{ padding:"50px auto"}} className="contentHolder">
                    <h1>Hello, I’m Kunle!</h1>
                    <p>Kunle is a certified Oracle Java Associate programmer 1, Microsoft certified Associate Python programmer, Oracle cloud certified autonomous database specialist.
                        After building apps for enterprise clients for years, I found a passion for helping non-coders discover a love for programming, 
                        become professional developers and change their careers. I would love to help you reach your goals! </p>
                </div> 
            </Col>
        </Row> 
         </div>    
    )
    
}

export default AppAbout;