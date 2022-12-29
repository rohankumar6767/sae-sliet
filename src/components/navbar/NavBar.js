import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/sae-sliet-logos.jpg';
import './NavBar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="sae__navbar gradient__bg">
        <div className="sae__navbar-links">
            <div className="sae__navbar-links_logo">
            <img src={logo} alt="No" />
            </div>
            <div className="sae__navbar-links_container">
            <p><Link to="/">Home</Link></p>
            <p><Link to="/gallery">Gallery</Link></p>
            <p><a href="/#Teams">Teams</a></p>
            <p><a href="#About">About</a></p>
            <p><a href="#blog">Contact</a></p>
            <p><Link to="/query_form">Query</Link></p>
            </div>
        </div>
        <div className="sae__navbar-menu">
            {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="sae__navbar-menu_container scale-up-center">
            <div className="sae__navbar-menu_container-links">
                <p><a href="/">Home</a></p>
                <p><Link to="/gallery">Gallery</Link></p>
                <p><a href="/#Teams">Teams</a></p>
                <p><a href="#About">About</a></p>
                <p><a href="#blog">Contact</a></p>
                <p><Link to="/query_form">Query</Link></p>
            </div>
            </div>
            )}
        </div>
        </div>
    );
};

export default Navbar;