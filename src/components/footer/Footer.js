import React from 'react';
import './Footer.css';

// Import images 
import logo from '../../assets/sae-sliet-logos.jpg';
import instagram from '../../assets/icons/instagram.png';
import facebook from '../../assets/icons/facebook.png';
import whatsapp from '../../assets/icons/whatsapp.png';
import youtube from '../../assets/icons/youtube.png';
import twitter from '../../assets/icons/twitter.png';
import linkedin from '../../assets/icons/linkedin.png';


export default function Footer() {
    return (
        <div className='sae_footer'>
            <hr className='saeHR'/>
            <img src={logo} alt="No" />
            {/* <p className='sae_footer_para'>Green Rangers | Junkyard Warriors | Juggernauts</p> */}
            <div className="sae_footer_social_media_links">
                <a href="/"><img src={instagram} alt="" /></a>
                <a href="/"><img src={facebook} alt="" /></a>
                <a href="/"><img src={youtube} alt="" /></a>
                <a href="/"><img src={whatsapp} alt="" /></a>
                <a href="/"><img src={twitter} alt="" /></a>
                <a href="/"><img src={linkedin} alt="" /></a>
            </div>
            
            <p className='sae_footer_para'>Green Rangers | Junkyard Warriors | Juggernauts</p>
            {/* <p className='sae_footer_para'>Thanks For Visit. For more information follow the above mentioned social media links</p> */}
            <div className="copyright_content">
                <p className='copyright_content_para'>Copyright Reserved @ 2023</p>
                <p className='copyright_content_para'>Designed & Developed | <a href="/">Rohan Kumar</a></p>
            </div>
        </div>
    )
}
