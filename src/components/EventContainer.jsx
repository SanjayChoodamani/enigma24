import React from 'react'
import './styles/EventContainer.css'
import { useState } from 'react';
import DisplayCard from './DisplayCard';

const EventContainer = (props) => {
    const [buttonClick, setButtonClick] = useState(false);
    let image = props.content.imgURL
    let eventName = props.content.eventName
    let eventDate = props.content.eventDate
    let eventLoc = props.content.eventLoc
    let eventDesc = props.content.eventDesc

    return (
        <>
            <div className='container-design'>
                <img src={image} alt={eventName} />
                <div className='container-desc'>
                    <h2>{eventName}</h2>
                    <p className='event-type'>{eventDate}</p>
                    <p className='event-type'>{eventLoc}</p>
                    <p className='event-desc'>{eventDesc}</p>
                    <button onClick={() => setButtonClick(true)}>
                        Know More
                    </button>
                </div>
            </div>
            <DisplayCard trigger={buttonClick} setTrigger={setButtonClick} desc= {{
                  img :image,
                  name :eventName,
                  date: eventDate,
                  loc: eventLoc,
                  desc: eventDesc
            }}/>
        </>
    );
}

export default EventContainer