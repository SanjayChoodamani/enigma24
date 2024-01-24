import React from 'react'
import './styles/Overview.css'
import Robot from '/robot.svg'
import Online from '/share.svg'
import Paper from '/paper.svg'
import { HashLink } from 'react-router-hash-link';

const Overview = () => {
  return (
    <div className='overview-deisgn'>
        <h1>WHAT WE’VE GOT FOR YOU</h1>
        <div className='overview-container'>
            <img src={Robot} alt='event-design'/>
            <HashLink to="/enigma24/Events#design-build"><h2>Design and Build Events</h2></HashLink>
            <p>The most fascinating events come under Design and Build events such as Robokombat, Mystique Locomotor, Xtreme Machine, Trail Blazer where students design and build their own bots to perform the required action.</p>
            <HashLink to="/enigma24/Events#design-build"><i class="fa-solid fa-arrow-right"></i></HashLink>  
        </div>
        <div className='overview-container'>
            <img src={Paper} alt='event-design'/>
            <HashLink to="/enigma24/Events#paper"><h2>Paper Events</h2></HashLink>
            <p>Paper events encompass Inquizitive, Ingenium, Play Bytes, Resonance etc.</p>
            <HashLink to="/enigma24/Events#paper"><i class="fa-solid fa-arrow-right"></i></HashLink>
        </div>
        <div className='overview-container'>
            <img src={Online} alt='event-design'/>
            <HashLink to="/enigma24/Events#online"><h2>Online Events</h2></HashLink>
            <p>Online events consist of Online quiz, MCE Dollars- A virtual stock market game, Factual Reel etc. where the participants submit their responses through social media.</p>
            <HashLink to="/enigma24/Events#online"><i class="fa-solid fa-arrow-right"></i></HashLink>
        </div>
        
    </div>
  )
}

export default Overview