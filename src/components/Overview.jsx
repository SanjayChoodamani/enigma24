import React from 'react'
import './styles/Overview.css'
import Robot from '/public/robot.svg'

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
    </div>
  )
}

export default Overview