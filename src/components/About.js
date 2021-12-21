import React from 'react';
import '../style/about.css'
import {Link} from 'react-router-dom'
import pdf from '../img/SalehFarag.pdf'

 const About = () => {
    return (
        <div>
        <div className="about-section container">
        <div className="row">
        <div className="col-lg-7">
          <div className="about-me">
                <h2>About me</h2>
          <h5>Work as a Front-End Developer with around 1 year of experience. Extensively worked developing Responsive Web Applications. Experience in developing web pages effectively using HTML5 and CSS3 in making web pages cross-browser compatible. Experience in JavaScript, React JS.
          And Hands-on experience with CSS optimization using SASS, and Bootstrap.</h5>
          <a href={pdf} download><button className="mt-3"> Download My Resume</button> </a>
            </div>
            <div className="Education">
            <h2>Education</h2>
            
            <h5>- Front end Development<span> Information Technology Institute (ITI)</span> - Ministry of Communication and Information Technology (MCIT) 8/2021 – 11/2021 </h5>
            <h5 className='mt-4'>- bachelor degree in <span> management information systems – 2020</span> </h5>
        </div>
        </div>
       
        <div className="skllis col-lg-5">            
                 <h2>skllis</h2>
            <div className="skills-content">
            <ul>
            <li><i className="fab fa-html5 fa-3x html"></i></li>
            <li><i className="fab fa-css3 fa-3x css"></i> </li>
            <li><i className="fab fa-bootstrap fa-3x bootstrap"></i></li>
            <li><i className="fab fa-sass fa-3x sass"></i></li>
            <li><i className="fab fa-js fa-3x js"></i> </li>
            <li><i className="fab fa-react fa-3x react"></i></li>
            <li><i class="fab fa-vuejs fa-3x vue"></i></li>   
            <li><i class="fab fa-angular fa-3x angular"></i></li>   
            <li><i className="fab fa-github fa-3x github"></i></li>    
            <li><i class="fab fa-bitbucket fa-3x bitbucket"></i></li>       
   
            </ul>
            </div>
            
                
              
               
            </div>
            </div>
        </div>

        <div className="arrows">
            <div className="left-arrow">
                <Link to="/">   <i class="fas fa-arrow-left"></i> </Link>
            </div>

            <div className="right-arrow">
                 <Link to="/projects">    <i className="fas fa-arrow-right"></i> </Link>
            </div>
        </div>
        </div>
    
        
    )
}

export default About;