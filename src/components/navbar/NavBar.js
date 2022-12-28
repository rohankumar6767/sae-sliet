import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/sae-sliet-logos.jpg';
import './NavBar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="sae__navbar">
        <div className="sae__navbar-links">
            <div className="sae__navbar-links_logo">
            <img src={logo} alt="No" />
            </div>
            <div className="sae__navbar-links_container">
            <p><a href="#home">Home</a></p>
            <p><a href="#wsae">Gallery</a></p>
            <p><a href="#possibility">Teams</a></p>
            <p><a href="#features">Blog</a></p>
            <p><a href="#blog">Contact</a></p>
            </div>
        </div>
        <div className="sae__navbar-menu">
            {toggleMenu
            ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="sae__navbar-menu_container scale-up-center">
            <div className="sae__navbar-menu_container-links">
                <p><a href="#home">Home</a></p>
                <p><a href="#wsae">Gallery</a></p>
                <p><a href="#possibility">Teams</a></p>
                <p><a href="#features">Blog</a></p>
                <p><a href="#blog">Contact</a></p>
            </div>
            </div>
            )}
        </div>
        </div>
    );
};

export default Navbar;