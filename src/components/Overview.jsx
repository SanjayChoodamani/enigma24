import React from 'react'
import './styles/Overview.css'
import Robot from '/robot.svg'
import Online from '/share.svg'
import Paper from '/paper.svg'

const Overview = () => {
  return (
    <div className='overview-deisgn'>
        <h1>WHAT WE’VE GOT FOR YOU</h1>
        <div className='overview-container'>
            <img src={Robot} alt='event-design'/>
            <h2>Design and Build Events</h2>
            <p>The most fascinating events come under Design and Build events such as Robokombat, Mystique Locomotor, Xtreme Machine, Trail Blazer where students design and build their own bots to perform the required action.</p>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div className='overview-container'>
            <img src={Online} alt='event-design'/>
            <h2>Online Events</h2>
            <p>Online events consist of Online quiz, MCE Dollars- A virtual stock market game, Factual Reel etc. where the participants submit their responses through social media.</p>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
        <div className='overview-container'>
            <img src={Paper} alt='event-design'/>
            <h2>Paper Events</h2>
            <p>Paper events encompass Inquizitive, Ingenium, Play Bytes, Resonance etc.</p>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
    </div>
  )
}

export default Overview