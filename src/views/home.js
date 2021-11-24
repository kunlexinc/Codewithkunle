import React from "react";

import Apphero from "../components/home/hero";
import AppAbout from "../components/home/about";
import AppCourses from "../components/home/courses";
import AppFaq from "../components/home/faq";
import AppFull from "../components/home/full";
import AppMessage from "../components/home/message";
import AppPay from "../components/home/payment";



function AppHome() {
    return(
        <div className="main">
           <Apphero /> 
           <AppFull />
           <AppPay />
           <AppAbout />
            <AppFaq />
            <AppMessage />
           <AppCourses />
           
           
           
        </div>
     
    )
    
}

export default AppHome;