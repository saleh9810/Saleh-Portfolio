import React from 'react'
import '../style/Projects.css'
import {Link} from 'react-router-dom'
import Pj1 from '../img/pj1.png'
import Pj2 from '../img/pj2.png'
import Pj3 from '../img/pj3.png'
import Pj4 from '../img/pj4.png'
import Pj5 from '../img/pj5.png'





const Projects = () => {
    return (
       <div>
        <div className="container projects-section">
                   <h2>My Portfolio</h2>
              <div className="pj">
              

           
                    <div className="project-card">
                    <a  href="https://frosty-visvesvaraya-c24130.netlify.app/" target="_blank" >
                    <img alt="pj1" src={Pj1} />
                    <p>e-commerce </p>
                    </a>
                    <button className="btn btn-link"> <a href="https://github.com/saleh9810/e-commerce.git" target="_blank"><i className="fab fa-github fa-2x"></i></a> </button>
                    <button  className="btn btn-link"><a  href="https://frosty-visvesvaraya-c24130.netlify.app/" target="_blank" ><i className="fas fa-eye fa-2x"></i></a></button>

                    </div>
                

                 <div className="project-card">
                 <a href="https://gifted-hypatia-cbf929.netlify.app/" target="_blank">
                    <img alt="pj2" src={Pj2} />
                    <p>Moive App</p>
                    </a>
                    <button className="btn btn-link"> <a href="https://github.com/saleh9810/movies-app.git" target="_blank"><i className="fab fa-github fa-2x"></i></a> </button>
                    <button  className="btn btn-link"><a href="https://gifted-hypatia-cbf929.netlify.app/" target="_blank"><i className="fas fa-eye fa-2x"></i></a></button>


                    </div>

                    <div className="project-card">
                    <a href="https://keen-archimedes-a22e79.netlify.app/" target="_blank">
                    <img alt="pj3" src={Pj3} />
                    <p>Todo-List</p>
                    </a>
                    <button className="btn btn-link"> <a href="https://github.com/saleh9810/todo-list.git" target="_blank"><i className="fab fa-github fa-2x"></i></a> </button>
                    <button  className="btn btn-link"><a href="https://keen-archimedes-a22e79.netlify.app/" target="_blank"><i className="fas fa-eye fa-2x"></i></a></button>

                    </div>

                    <div className="project-card">
                    <a href="https://saleh-trillo.netlify.app/" target="_blank">
                    <img alt="pj4" src={Pj4} />
                    <p>Trillo</p>
                    </a>
                    <button className="btn btn-link"> <a href="https://github.com/saleh9810/trillo.git" target="_blank"><i className="fab fa-github fa-2x"></i></a> </button>
                    <button  className="btn btn-link"><a href="https://saleh-trillo.netlify.app/" target="_blank"><i className="fas fa-eye fa-2x"></i></a></button>


                    </div>

                    <div className="project-card">
                    <a href="https://nifty-goldstine-60a810.netlify.app/" target="_blank">
                    <img alt="pj5" src={Pj5} />
                    <p>Natours </p>
                    </a>
                    <button className="btn btn-link"> <a href="https://github.com/saleh9810/Natours.git" target="_blank"><i className="fab fa-github fa-2x"></i></a> </button>
                    <button  className="btn btn-link"><a href="https://nifty-goldstine-60a810.netlify.app/" target="_blank"><i className="fas fa-eye fa-2x"></i></a></button>


                    </div>
                 </div>  
                  </div>

                  <div className="arrows">
                     <div className="left-arrow">
                        <Link to="/about">   <i class="fas fa-arrow-left"></i> </Link> 
                     </div>

                     <div className="right-arrow">
                       <Link to="contact">  <i className="fas fa-arrow-right"></i> </Link> 
                      </div>
                 </div>
                  </div>
            
    )
}

export default Projects