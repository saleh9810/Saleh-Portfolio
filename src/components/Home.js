import React from 'react';
import '../style/Home.css'
import {Link} from 'react-router-dom'

 const Home = () => {
    return (
        <div className="home">
        <div className="home-content">
                 <h1>Hello i'm Saleh</h1>
        <h3>a front end web<span>Developer</span></h3>
       
        
        </div>
        <div className="arrows">

            <div className="right-arrow">
                   <Link to="/about">   <i className="fas fa-arrow-right"></i> </Link>
            </div>
        </div>
           
        </div>
    )
}

export default Home