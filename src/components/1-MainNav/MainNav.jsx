import "./MainNav.scss";
import Logo from "../../assets/Logo/Ignition-Logo.png"
import LogoFlame from "../../assets/Logo/IgniteFlame.png"


import React, { useState, useEffect } from 'react';


import {NavLink} from "react-router-dom";

function MainNav() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) { 
                setIsNavOpen(false);
            }
        };

   
        window.addEventListener('resize', handleResize);

       
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="nav">
            <nav className="nav__wrapper">
               
                <div className="nav__logo-container">
                      <NavLink to="/home" className="nav__logolink">
                            <img className="nav__flame" src={LogoFlame} alt="Flame Logo" />  
                      </NavLink>
                      <NavLink to="/home" className="nav__logolink"> 
                             <img className="nav__logo" src={Logo} alt="Main Logo" />
                      </NavLink>
                   
                </div>

                
                <div className="nav__hamburger" onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                
                <div className={`nav__items ${isNavOpen ? 'open' : ''}`}>
                    <NavLink to="/home" className="nav__link">Home</NavLink>
                    <NavLink to="/assessment" className="nav__link">Assessment</NavLink>
                    <NavLink to="/content" className="nav__link">All Content</NavLink>
                    <NavLink to="/player" className="nav__link">Your Styles</NavLink>
                    <NavLink to="/upload" className="nav__link">Upload</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default MainNav;