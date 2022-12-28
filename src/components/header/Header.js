import React from 'react'
import './Header.css'
import header_image from '../../assets/header_image_transparent.png';

export default function Header() {
    return (
        <div className='sae_header'>
            <div className="sae_header_image">
                <img src={header_image} alt="" />
            </div>
            <div className="sae_header_content">
                <h1>SAE SLIET</h1>
                <h3>Design and Create</h3>
                <p>SAE India SLIET Collegiate Club is to design, manufacture and test run the vehicles. To conduct competitions and provide first hand challenge to students for preparing them for participation in National level events. SAE SLIET is to facilitate students in pursuing their passion while managing real life demands and education priorities.</p>
                <div className="sae_header_content_buttons">
                    <a href="/">Teams</a>
                    <a href="/">Query?</a>
                </div>
            </div>
        </div>
    )
}
