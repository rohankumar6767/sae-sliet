import React from 'react'
import './Teams.css';
import greenrangers_logo from '../../assets/team_greenrangers.png'
import {Link} from 'react-router-dom';

export default function Teams() {
    return (
        <div className='sae_teams' id='Teams'>
            <hr className='saeHR'/>
            <h1 className='saeHeading'>Teams</h1>
            <div className="sae_teams_container">
                <div className="sae_team_container_box1 boxes">
                    <img src={greenrangers_logo} alt="" />
                    <h2>Green Rangers</h2>
                    <p>Team Green Rangers is a group of dedicated engineering students who have come together to participate in the Efficycle competition. Efficycle is an annual event organized by the Society of Automotive Engineers India, where teams from colleges across the country design and build energy-efficient human-powered vehicles.</p>
                    <Link to="/greenrangers">Team</Link>
                </div>

                <div className="sae_team_container_box2 boxes">
                    <img src={greenrangers_logo} alt="" />
                    <h2>Junkyard Warriors</h2>
                    <p>Team Green Rangers is a group of dedicated engineering students who have come together to participate in the Efficycle competition. Efficycle is an annual event organized by the Society of Automotive Engineers India, where teams from colleges across the country design and build energy-efficient human-powered vehicles.</p>
                    <a href="v">Junkyard Warriors</a>
                </div>

                <div className="sae_team_container_box3 boxes">
                    <img src={greenrangers_logo} alt="" />
                    <h2>JuggerNauts</h2>
                    <p>Team Green Rangers is a group of dedicated engineering students who have come together to participate in the Efficycle competition. Efficycle is an annual event organized by the Society of Automotive Engineers India, where teams from colleges across the country design and build energy-efficient human-powered vehicles.</p>
                    <a href="v">Juggernauts</a>
                </div>
            </div>
        </div>
    )
}
