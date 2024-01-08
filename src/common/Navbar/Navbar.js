import React from "react";
import { NavLink } from 'react-router-dom';
import { ReactComponent as Hamburger } from '../../assets/hamburger.svg'
import './Navbar.css'
import Logo from '../../assets/logo.png';
import { useEffect, useState } from "react";


export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (<>
        <nav className="navbar">
            <div className="container">
                <img src={Logo} className="logo"></img>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <Hamburger width={50} height={50}/>
                </div>
                <div className={`nav-elements  ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/blog">Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to="/kundli">Free Kundli</NavLink>
                        </li>
                        <li>
                            <NavLink to="/chat">Chat with Astro</NavLink>
                        </li>
                        <li>
                            <NavLink to="/call">Call with Astro</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}