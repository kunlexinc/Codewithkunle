import React from "react";
import logo from "./logo1.png"

import { BackTop } from 'antd';

function AppFooter() {
    return(
        <div className="container-fluid">
            <div className="footer">
                <div style={{backgroundColor:"white", width:"20%", margin:"auto"}} className="logo">
                    <img style={{width:"100%"}} src={logo} alt="kunlex" />

                </div>
                <ul className="socials">
                    <li><a href="/"><i className="fab fa-facebook-f"></i></a> </li>
                    <li><a href="/"><i className="fab fa-instagram"></i></a> </li>
                    <li><a href="/"><i className="fab fa-youtube"></i></a> </li>
                    <li><a href="/"><i className="fab fa-twitter"></i></a> </li>

                </ul>
                <div className="copyright"> Copyright &copy; 2021 CodeWithKunle</div>
                
                <BackTop>
                <div className="goTop"><i class="fas fa-arrow-circle-up"></i></div>
                </BackTop>
            </div>
           
        </div>
     
    )
    
}

export default AppFooter;