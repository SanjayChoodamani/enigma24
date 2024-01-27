import React from 'react'
import './styles/Sponsors.css'
import SponsCard from './SponsCard'
import {geetha, hassanNews, homes, max, pulselogo, stock} from './index.js'

const sponsDetails = [
    {id: 1, image:hassanNews, desc:'NEWS' },
    {id: 2, image:homes, desc:'FOOD' },
    {id: 3, image:max, desc:'FASHION' },
    {id: 4, image:pulselogo, desc:'TITLE' },
    {id: 5, image:stock, desc:'ONLINE' },
    {id: 6, image:geetha, desc:'MEDICAL' },
]

const Sponsors = () => {
  return (
    <div className='spons-design'>
        <h1>OUR SPONSORS</h1>
        <p className='spons-p'>We invite prospective sponsors to join hands with us in powering innovation and excellence at our upcoming tech fest. Your sponsorship is key to making this event a resounding success!</p>
        {/* <div className='spons-container'>
            {sponsDetails.map((content) =>{
                return (
                    <SponsCard id={content.id} img={content.image} domain={content.desc}/>
                );
            })}
        </div> */}
    </div>
  )
}

export default Sponsors