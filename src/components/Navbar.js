import React from 'react'
import './NavBar.css'

// IMport images
import logo from '../images/sae-sliet-logos.png';

export default function Navbar() {
    return (
        <div>

            {/*#################### For desktop ############## */}
            <div className="navbar">
                <div className="navbar_logo">
                    <img src={logo} alt="" />
                </div>
                <div className="navbar_items">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Gallery</a></li>
                        <li><a href="/">Awards</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
                <div className="navbar_buttons">
                    <ul>
                        <li>
                            <a href="/" className='query_btn'>Query?</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* ################## For Mobile ################ */}
            <div className="hamburger_menu">
                <input type="checkbox" name="" id="" />
                <div className="hamburger_lines">
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                    <span className="line line3"></span>
                </div>
                <ul className="menu_items">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Gallery</a></li>
                    <li><a href="/">Awards</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                    <li><a href="/" className='query_btn'>Query</a></li>
                </ul>
            </div>

        </div>
    )
}   
