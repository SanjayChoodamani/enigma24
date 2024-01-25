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
                        <div className='details'>
                        <p>Venue: </p>
                        <h6>{props.desc.loc}</h6>
                        <p>Date: </p>
                        <h6>{props.desc.date}</h6>
                        <p>Event Head: </p>
                        <h6>Techie</h6>
                        </div>
                        <br/>
                        <a href='#'>Register</a>
                    </div>
                    <div className='displayCardDesc'>
                        <h1>{props.desc.name}</h1>
                        <h2>Description</h2>
                        <p>{props.desc.desc}</p>
                        {props.desc.details.map((detail) =>{
                            return(
                                <>
                                    <h2>{detail.heading}</h2>
                                    {detail.desc.map((content)=>{
                                        return(
                                            <p>{content}</p>
                                        );
                                    })}
                                </>
                            );
                        })}
                    </div>
                </div>


            </div>
        </div>
    ) : "";
}