import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    return (
        <div>
            <nav>
            <Link className="linkStyle" to="/">Home</Link>
            <Link className="linkStyle" to="Films">Films</Link>
            </nav>        
        </div>
    )
}

export default Navbar
