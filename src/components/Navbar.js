import React, { useState } from "react"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"

const Navbar = () => {
    const [ Mobile, setMobile ] = useState(false)
    const [isHovered, setIsHovered] = useState(false);



    return (
        <>


       <nav className='navbar'>
        <h3 className="logo">BBC</h3>
 
        
          
        <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}>

        <Link to='/' className='home'>
        <li className={`linkHover ${isHovered ? "hovered" : ""}`}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Home</li> 
        </Link>

        <Link to='/about' className='about'> 
        <li className={`linkHover ${isHovered ? "hovered" : ""}`}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>About</li> 
        </Link>

        <Link to='/works' className='works'> 
        <li className={`linkHover ${isHovered ? "hovered" : ""}`}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Our Works</li> 
        </Link>

        <Link to='/contact' className='contact'>
        <li className={`linkHover ${isHovered ? "hovered" : ""}`}onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>Contact</li>
        </Link>
        </ul>
        


        <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
            {Mobile ? <ImCross/> :  <FaBars /> } 
        </button>
       </nav>
       </>
    )
}

export default Navbar


