import React from "react";

import {courses} from './utils/constants'

import {Row,Col} from 'antd';
import { Card } from 'antd';

const { Meta } = Card;


function AppCourses() {
    return(
        <div className="block featureBlock bgGray">
        <div className="container-fluid">
            <div className="titleholder">
             <h2>Courses Coming Soon</h2>
            </div>  
        <div id="courses" className="courseBlock">        
            <Row  gutter={[16, 16]}>
               {courses.slice(0,6).map( (course)=>{ 
                return( <Col xs={{ span: 24}} sm={{ span: 12}} md={{ span: 8}} key={course.id}>
              <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="example" src={course.image} />}
                >
                    <Meta title={course.text} description={course.desc} />
                 </Card>,
                </Col>)
              } ) }  </Row>
            
            </div>
   
        </div>
        </div>
     
    )
    
}

export default AppCourses;