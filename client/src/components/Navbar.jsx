import "./Navbar.css"
import React from 'react'
import { Link } from "react-router-dom"


function Navbar() {
  return (
    <div>
      <header className="header" id="header">
            <nav className="nav container">
            <h1 className="nav__logo">RESCUE CONNECT</h1>

                <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                            <a className="nav__link active-link">
                                <i className='bx bx-home-alt nav__icon'></i>
                               <Link to="/"><span className="nav__name">Home</span></Link> 
                            </a>
                        </li>
                        
                        <li className="nav__item">
                            <a  className="nav__link">
                            <i className='bx bx-building-house' ></i>
                               <Link to="/agencies">  <span className="nav__name">Agencies</span></Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a  className="nav__link">
                            <i className='bx bx-category' ></i>
                               <Link to="/disasters">  <span className="nav__name">Types of Disasters</span></Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a  className="nav__link">
                            <i className='bx bx-briefcase-alt-2' ></i>
                               <Link to="/Resources">  <span className="nav__name">Resources Needed</span></Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a  className="nav__link">
                            <i className='bx bxs-news' ></i>
                               <Link to="/reports">  <span className="nav__name">Recent Reporting</span></Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a  className="nav__link">
                            <i className='bx bx-book-add'></i>
                            <Link to="/register">   <span className="nav__name">Register</span></Link>
                            </a>
                        </li>

                        <li className="nav__item">
                            <a className="nav__link">
                            <i className='bx bx-log-in-circle'></i>
                            <Link to="/login">  <span className="nav__name">Login</span></Link>
                            </a>
                        </li>

                       
                    </ul>
                </div>

                <img src="assets/img/perfil.png" alt="" className="nav__img"/>
            </nav>
        </header>

        
    </div>
              
  )
}

export default Navbar