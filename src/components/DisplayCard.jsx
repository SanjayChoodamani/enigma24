import React from 'react';
import './styles/DisplayCard.css'

export default function DisplayCard(props) {
    return (props.trigger) ? (
        <div className='card'>
            <div className='inner-card'>
                <button onClick={() => props.setTrigger(false)} >
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <div className='event-display'>
                    <div className='event-register'>
                        <p>Venue: </p>
                        <h6>{props.desc.loc}</h6>
                        <p>Date: </p>
                        <h6>{props.desc.date}</h6>
                        <p>Event Head: </p>
                        <h6>Acdaljda</h6>
                        <a>Register</a>
                    </div>
                    <div className='displayCardDesc'>
                        <h1>{props.desc.name}</h1>
                        <h2>Desciption</h2>
                        <p>{props.desc.desc}</p>
                    </div>
                </div>


            </div>
        </div>
    ) : "";
}