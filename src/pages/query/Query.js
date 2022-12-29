import React from 'react';
import './Query.css';
import header_image from '../../assets/header_image_transparent.png';
import {Link} from 'react-router-dom';

export default function Query() {
    return (
        <div className="sae_query gardient__header">
            <div className='sae_query_cont'>
                <div className="sae_query_img">
                    <img src={header_image} alt="" />
                </div>
                <div className="sae_query_form">
                    <h1>Query Form</h1>
                    <div className="input_section">
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='E-mail / G-mail' name="" id="" />
                        <input type="text" placeholder='Company/Organization'/>
                        <textarea placeholder='Your Query here -' name="" id="" cols="20" rows="8"></textarea>
                    </div>
                    <Link to="/">Submit</Link>
                </div>
            </div>

            <div className="sae_query_faq">
                <h1>FAQ's</h1>
                <div className="sae_query_faq_ques">
                    <h3>Q1. What is SAE SLIET?</h3>
                    <h4>Ans. SAE India SLIET Collegiate Club is to design, manufacture and test run the vehicles. To conduct competitions and provide first hand challenge to students for preparing them for participation in National level events. SAE SLIET is to facilitate students in pursuing their passion while managing real life demands and education priorities.</h4>
                    <h3>Q2. How to join the SAE SLIET?</h3>
                    <h4>Ans. SAE SLIET is conduct the recruitment process every year in the college and doing advertisment everyone so be updated and aware the recruitment of SAE SLIET. And also being updated on our website.</h4>
                    <h3>Q3. In how much days query is resolved?</h3>
                    <h4>Ans. Within a 3 or 4 days the query is resolved and your solved query is send on your given e-mails.</h4>
                    <h3>Q4. How many team member are in every team?</h3>
                    <h4>Ans. It depend on the requiremtn and year to year and according to the team. Generally, Green Ranges team have 13 team members and Junkyard Warriors have 28 team members.</h4>
                </div>
            </div>
        </div>
    )
}
