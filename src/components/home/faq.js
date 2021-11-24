import React from "react";

import { Collapse } from 'antd';

const { Panel } = Collapse;


function AppFaq() {
    return(
       <div className="block faqBlock">
           <div className="container-fluid">
               <div className="titleHolder">
                   <h1>Frequently Asked Questions</h1>
                    <p>Below are answers to frequently asked questions</p>
               </div>
           <Collapse defaultActiveKey={['1']}>
                <Panel header="How Much Is The Training?" key="1">
                <p>#100,000</p>
                <p>$200, for those outside Nigeria</p>
                </Panel>
                <Panel header="What Skills Will We Be Covering" key="2">
                <p>HTML, CSS, Bootstrap</p>
                <p>JavaScript, React JS, Node Js</p>
                <p>Firebase, Github </p>
                <p>Bonus: Introduction to React Native </p>
                </Panel>
                <Panel header="What Should I Do After Paying" key="3">
                <p>You can Press The Whatsapp Button Above and chat with me via WhatsApp</p>
                <p>Or Call Me On 07068790872</p>
                </Panel>
                <Panel header="Where Will We Be Holding Classes?" key="4">
                <p>We will be using Google Meet</p>               
                </Panel>
                <Panel header="I haven't written code before, can i cope?" key="5">
                <p>Yes! We will be starting from the basics to advance concept</p>               
                </Panel>
                <Panel header="What is the duration of the training" key="6">
                <p>The training will last for two month.</p> 
                <p>But can exceed two months, if students need more time for assimulation</p>               
                </Panel>
             </Collapse>,
       </div>
     </div>
    )
    
}

export default AppFaq;