import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(props) {
    return (
      <header className="fixed-top">
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container">
                <NavLink to={`/`} className="navbar-brand">Portfolio</NavLink>

                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={`/`} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/about`} className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/resume`} className="nav-link">Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/project`} className="nav-link">Project</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={`/contact`} className="nav-link">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
      </header>
    )
}

export default Menu