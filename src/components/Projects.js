import React, {useState} from "react";
import "../style/Projects.css"
import { Link } from "react-router-dom";
import Pj1 from "../img/pj1.png";
import Pj2 from "../img/pj2.jpg";
import Pj3 from "../img/pj3.jpg";
import Pj4 from "../img/pj4.jpg";
import Pj5 from "../img/pj5.jpg";
import Pj7 from "../img/pj7.jpg";
import Pj8 from "../img/pj8.jpg";
import Pj9 from "../img/pj9.png";
import Pj10 from "../img/pj10.png";
import Pj11 from "../img/pj11.png";


const Projects = () => {
  const [projects, useProjects] = useState([
    {
      id: 1,
      website: 'https://shop-hazel-nine.vercel.app/',
      github: 'https://github.com/saleh9810/e-commerce.git',
      img: Pj1,
      title: 'E-Commerce',
      type: 'React',
    },
    {
      id: 2,
      website: 'https://newweather-app.vercel.app/',
      github: 'https://github.com/saleh9810/weather-app.git',
      img: Pj8,
      title: 'Weather-App',
      type: 'React',
    },
    {
      id: 3,
      website: 'https://movies-app-kohl-three.vercel.app/',
      github: 'https://github.com/saleh9810/movies-app.git',
      img: Pj2,
      title: 'Movies-App',
      type: 'React',
    },
    {
      id: 4,
      website: 'https://mcq-exam.vercel.app/',
      github: 'https://github.com/saleh9810/MCQ-exams',
      img: Pj9,
      title: 'MCQ App',
      type: 'React',
    },
    {
      id: 5,
      website: 'https://reading-list-teal.vercel.app/',
      github: 'https://github.com/saleh9810/Reading-List.git',
      img: Pj3,
      title: 'Reading-List',
      type: 'React',
    },
    {
      id: 6,
      website: 'https://stoic-borg-3a225c.netlify.app/',
      github: 'https://github.com/saleh9810/Food-Recipe-App.git',
      img: Pj7,
      title: 'Food-Recipe-App',
      type: 'JS',
    },
    {
      id: 7,
      website: 'https://natours-eosin.vercel.app/',
      github: 'https://github.com/saleh9810/Natours.git',
      img: Pj5,
      title: 'Natours',
      type: 'SASS',
    },
    {
      id: 8,
      website: 'https://trillo-ecru.vercel.app/',
      github: 'https://github.com/saleh9810/trillo.git',
      img: Pj4,
      title: 'Trillo',
      type: 'SASS',
    },
        {
      id: 9,
      website: 'https://vue-landing-p8a1nax6z-saleh9810.vercel.app/',
      github: 'https://github.com/saleh9810/vue-landing',
      img: Pj10,
      title: 'vue-landing',
      type: 'Vue',
    },
        {
      id: 10,
      website: 'https://colorlib-app.vercel.app/',
      github: 'https://github.com/saleh9810/Colorlib-app',
      img: Pj11,
      title: 'colorlib',
      type: 'SASS',
    },

  ])
  const [options, setOption] = useState([
    'All',
    'React',
    'JS',
    'Vue',
    'SASS/CSS',
  ])

  const [select, setSelect] = useState('All')


  function handleChange(e) {
      setSelect(e.target.value)
  }

  console.log(select);
  const showProjects = () => {
    if(select === 'All') {
      return (
        projects.map(project => {
          return (
            <div className="project-card" key={project.id}>
            <div className="project-box">
              <a
                href={project.website}
                target="blank"
              >
                <img alt="pj1" src={project.img} />
                <p>{project.title}</p>
              </a>
            </div>
            <button className="btn btn-link">
              {" "}
              <a
                href={project.github}
                target="blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>{" "}
            </button>
            <button className="btn btn-link">
              <a
                href={project.website}
                target="blank"
              >
                <i className="fas fa-eye fa-2x"></i>
              </a>
            </button>
          </div>
          )
        })

      )

    }
    if(select === 'React') {
      const filteredProjects = projects.filter(project => project.type === 'React')

      return (
        filteredProjects.map(project => {
          return (
            <div className="project-card" key={project.id}>
            <div className="project-box">
              <a
                href={project.website}
                target="blank"
              >
                <img alt="pj1" src={project.img} />
                <p>{project.title}</p>
              </a>
            </div>
            <button className="btn btn-link">
              {" "}
              <a
                href={project.github}
                target="blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>{" "}
            </button>
            <button className="btn btn-link">
              <a
                href={project.website}
                target="blank"
              >
                <i className="fas fa-eye fa-2x"></i>
              </a>
            </button>
          </div>
          )
        })

      )
    }
    if(select === 'JS') {
      const filteredProjects = projects.filter(project => project.type === 'JS')

      return (
        filteredProjects.map(project => {
          return (
            <div className="project-card" key={project.id}>
            <div className="project-box">
              <a
                href={project.website}
                target="blank"
              >
                <img alt="pj1" src={project.img} />
                <p>{project.title}</p>
              </a>
            </div>
            <button className="btn btn-link">
              {" "}
              <a
                href={project.github}
                target="blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>{" "}
            </button>
            <button className="btn btn-link">
              <a
                href={project.website}
                target="blank"
              >
                <i className="fas fa-eye fa-2x"></i>
              </a>
            </button>
          </div>
          )
        })

      )
    }
    if(select === 'SASS/CSS') {
      const filteredProjects = projects.filter(project => project.type === 'SASS')

      return (
        filteredProjects.map(project => {
          return (
            <div className="project-card" key={project.id}>
            <div className="project-box">
              <a
                href={project.website}
                target="blank"
              >
                <img alt="pj1" src={project.img} />
                <p>{project.title}</p>
              </a>
            </div>
            <button className="btn btn-link">
              {" "}
              <a
                href={project.github}
                target="blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>{" "}
            </button>
            <button className="btn btn-link">
              <a
                href={project.website}
                target="blank"
              >
                <i className="fas fa-eye fa-2x"></i>
              </a>
            </button>
          </div>
          )
        })

      )
    }
    if(select === 'Vue') {
      const filteredProjects = projects.filter(project => project.type === 'Vue')

      return (
        filteredProjects.map(project => {
          return (
            <div className="project-card" key={project.id}>
            <div className="project-box">
              <a
                href={project.website}
                target="blank"
              >
                <img alt="pj1" src={project.img} />
                <p>{project.title}</p>
              </a>
            </div>
            <button className="btn btn-link">
              {" "}
              <a
                href={project.github}
                target="blank"
              >
                <i className="fab fa-github fa-2x"></i>
              </a>{" "}
            </button>
            <button className="btn btn-link">
              <a
                href={project.website}
                target="blank"
              >
                <i className="fas fa-eye fa-2x"></i>
              </a>
            </button>
          </div>
          )
        })

      )
    }
  }

 

  return (
    <div>
      <div className="container projects-section">
        <h2>My Portfolio</h2>
        <select className="custom-select w-25" onChange={handleChange}  value={select}>
          {options.map(option => {
            return (
              <option key={option} value={option} >{option}</option>
            )
          })}
        </select>
        <div className="pj">


        {showProjects()}

          

        </div>
      </div>

      <div className="arrows">
        <div className="left-arrow">
          <Link to="/about">
            {" "}
            <i className="fas fa-arrow-left"></i>{" "}
          </Link>
        </div>

        <div className="right-arrow">
          <Link to="contact">
            {" "}
            <i className="fas fa-arrow-right"></i>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
        }

export default Projects;
