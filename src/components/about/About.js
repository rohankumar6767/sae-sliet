import React from 'react'
import './About.css'
import director from '../../assets/director.jpg'
import advisor from '../../assets/advisor.jpg'

export default function About() {
    return (
        <div className='sae_about'>
            <hr className='saeHR'/>
            <h1 className="saeHeading">About Us</h1>
            <p className='sae_about_para'>SAE India SLIET (Sant Longowal Institute of Engineering and Technology) Collegiate Club is to design, manufacture and test run the vehicles. To conduct competitions and provide first hand challenge to students for preparing them for participation in National level events. SAE SLIET is to facilitate students in pursuing their passion while managing real life demands and education priorities.</p>
            <div className="sae_about_person">
                <div className="sae_about_person_img">
                    <img src={director} alt="" />
                </div>
                <div className="sae_about_person_content">
                    <h2>Dr. Shailendra Jain</h2>
                    <h3>Director of SLIET</h3>
                    <p>Prof. Shailendra Jain, has joined as Director SLIET on 3rd Nov. 2017, and is currently on deputation from Maulana Azad NIT Bhopal (MP), where he is a Professor in the Department of Electrical Engineering. He has over 23 years of experience in teaching, research and academic administration. After graduating in 1990 in Electrical Engineering from SATI Vidisha (MP), he obtained his masters degree in 1994, in Power Electronics from SGSITS Indore (MP). He received his PhD Degree from IIT Roorkee in 2003. Dr Jain was a Post Doctoral Fellow at University of Western Ontario, London, Canada in 2007.</p> <br />
                    <h4>E-mail : director@sliet.ac.in <br /> Phone : 01672-253100</h4>
                    <div className="connect_btn"><a href="http://administration.sliet.ac.in/people/skjain/" target="blank">Connect+</a></div>
                </div>
            </div>
            <div className="sae_about_person">
                <div className="sae_about_person_img">
                    <img src={advisor} alt="" />
                </div>
                <div className="sae_about_person_content">
                    <h2>Dr. Shankar Singh</h2>
                    <h3>Faculty Advisor of SAE SLIET</h3>
                    <p>As Professor (Mechanical Engg.) at Sant Longowal Institute of Engineering and Technology (Established by MoE,Government of India ) Longowal -148106, Distt Sangrur (Punjab) w.e.f. 10-7-2013 and still working. As Senior Lecturer (Manufacturing Processes & Automation Engg. Division) at Netaji Subhas Institute of Technology ( under Govt. of NCT of Delhi), Dwarka, New Delhi-78 for 06 years. As Lecturer (Workshop Practices) at Beant College of Engg. & Technology (under Govt. of Punjab), Gurdaspur (Pb.) for 06 years.</p> <br />
                    <h4>E-mail : singh.shankar@gmail.com <br /> Phone : 9465251439</h4>
                    <div className="connect_btn"><a href="http://sliet.ac.in/people/shankar/" target="blank">Connect+</a></div>
                </div>
            </div>
        </div>
    )
}
