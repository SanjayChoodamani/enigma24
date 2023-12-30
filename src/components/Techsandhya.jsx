import React from 'react'
import './styles/Techsandhya.css'
import TechS from '/techs.svg'

const Techsandhya = () => {
  return (
    <div className='techs-design'>
        <h1>TECHSANDHYA</h1>
        <div className='techs-inner'>
            <img src={TechS} alt='techsandhya'/>
            <p>Techsandhya is the technical newsletter of the college, published annually by The Malnad Technical Club. It started in 2016 with the vision of providing an opportunity for tech-savvy students to put forth their ideas on a technical facet.</p>
        </div>
    </div>
  )
}

export default Techsandhya