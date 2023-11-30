import React, { useRef } from 'react'
import "./navbar.scss"
import { Link } from 'react-router-dom'
import {FiPhoneCall} from "react-icons/fi"
import {FaTimes , FaBars} from "react-icons/fa"

const Navbar = () => {
  const navRef = useRef()

  const showNavbar = ()=>{
    navRef.current.classList.toggle("responsive-nav")
  }
  return (
    <div className='navbar'>
        <div className="logo">
          <a href="/"><h1>LOGISTICA</h1></a>
        </div>
        <div className="features">
            <ul ref={navRef}>
                <li><Link to="/" className='link'>Home</Link></li>
                <li><Link to="/about" className='link'>About</Link></li>
                <li><Link to="/services" className='link'>Services</Link></li>
                <li><Link to="contact" className='link'>Contact</Link></li>
                <li><h2><FiPhoneCall size={20}/> +012 345 6789</h2></li>
                <button onClick={showNavbar} className='nav-btn nav-close-btn'>
                  <FaTimes size={30}/>
                </button>
            </ul>
            <button className='nav-btn bar' onClick={showNavbar}>
              <FaBars size={30}/>
            </button>
        </div>
    </div>
  )
}

export default Navbar