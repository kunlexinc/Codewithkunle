import React from "react";
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

import { Carousel,Button } from 'antd';



const items = [
    {
      key: '1',
      title: 'Build Apps. Build A Better Life',
      content: 'Learn how to develop fullstack applications with React Js and Node, Which are higlhly demanded skills in the Tech industry.',
    },
    {
      key: '2',
      title: 'Learn The Most Demanded, Skill Today ',
      content: 'Get equip with the most sorted skill in the industry, React Js and Node Js combo makes you a  fullstack developer',
    },
    {
      key: '3',
      title: 'You Can Change Your Carrier Today, Learn And Become A Fullstack Developer.',
      content: 'Join this intense training programme, and experince an acceleration in your carrier .',
    },
  ]



function Apphero() {
    return(

       <div className="heroBlock">
            <Carousel >
                {items.map((item) =>{
                    return(
                        <div className='container-fluid'>
                            <div className='content' key={item.key}>
                              <h1>{item.title}</h1>
                               <p> {item.content}</p>
                          
                              
                               <div className="btnHolder">
                               
                              <Link to="/register"><Button style={{width:"30%", height:"70px"}} type="primary" size='large '>Enroll Now</Button></Link>
                               
                                    
                               </div>
                         </div>

                        </div>
                    )
                })}
                   
  </Carousel>,
       </div>
    )
    
}

export default Apphero;