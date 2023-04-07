import React from 'react'
import './styles/home.css' 
import { NavLink } from 'react-router-dom'

function Home(props) {
   return (
      <section id="home" className="d-flex align-items-center">
        <div className="container d-flex flex-column align-items-center shadow-lg p-4">
            <h1 className='display-1'>Gangu Yadav</h1>
            <h3 className='display-6 text-center'>I'm a professional MERN Stack Developer.</h3>
            <NavLink to={`/about`} className="btn btn-outline-info">
                <i className='bi bi-person-fill'></i> About Me
            </NavLink>
        </div>
      </section>
   )
}
export default Home