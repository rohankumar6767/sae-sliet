import React from 'react';
import './Greenrangers.css';
import greenrangers_logo from '../../assets/team_greenrangers.png'
import efficycle2014 from '../../assets/sae/sae_photo8.JPG'
import efficycle2015 from '../../assets/sae/sae_photo6.jpg'

export default function Greenrangers() {
    return (
        <div className='sae_greenrangers  gardient__header'>
            <img src={greenrangers_logo} alt="" />
            <h1>Green Rangers</h1>
            <h3>Team Green Rangers is part of SAE SLIET club. Green Rangers is to design, manufacture and test run the efficyle. Green Rangers always participate in every competition which is held on the efficycle. Team gives the exposure to the students about efficycle.</h3>
            {/* <hr className='saeHR'/> */}
            <div className="sae_greenrangers_awards">
                <h2>Events and Awards</h2>
                <div className="sae_greenrangers_awards_item">
                    <div className="awards_item_image">
                        <img src={efficycle2014} alt="" />
                    </div>
                    <div className="awards_item_content">
                        <h2>SAE NIS "Efficycle 2014"</h2>
                        <p>Faculty Advisor : Dr. Shankar Singh</p>
                        <p>Team :</p>
                        <ul>
                            <li><p>Gurpreet Singh (Captain)</p></li>
                            <li><p>Neeraj Mittal (Vice Captain)</p></li>
                        </ul>
                        <p>Achievements :</p>
                        <ul>
                            <li><p>Best Design Award - Prize Money ₹25,000/-</p></li>
                            <li><p>1st Rank in Endurance Race (Durability Award) - Prize Money ₹30,000/-</p></li>
                            <li><p>3rd Overall Winner - Prize Money ₹50,000/-</p></li>
                        </ul>
                    </div>
                </div>

                

                <div className="sae_greenrangers_awards_item">
                    <div className="awards_item_content">
                        <h2>SAE NIS "Efficycle 2015"</h2>
                        <p>Faculty Advisor : Dr. Shankar Singh</p>
                        <p>Team :</p>
                        <ul>
                            <li><p>Jatin Goyal (Captain)</p></li>
                            <li><p>Kulwinder Singh (Vice Captain)</p></li>
                        </ul>
                        <p>Achievements :</p>
                        <ul>
                            <li><p>Overall Winner Award - Prize Money ₹1,00,000/-</p></li>
                            <li><p>2nd in Endurance Race - Prize Money ₹20,000/-</p></li>
                            <li><p>Marketing Award - Prize Money ₹15,000/-</p></li>
                        </ul>
                    </div>
                    <div className="awards_item_image">
                        <img src={efficycle2015} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
