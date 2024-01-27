import React from 'react'
import './styles/EventList.css'
import EventContainer from './EventContainer'
import laser from '/events/laser.jpg'
import './styles/Workshop.css'
const shows = [
    {
      "id": 1,
      "imgloc": laser,
      "name": "Laser Show",
      "date": "20/04",
      "loc": "Auditorium",
      "desciption": `Brace yourselves to behold the speculating fusion of Art and Technology. Join us for a night of hypnotic bliss through captivating lights.`,
      "details": []
    },
  ]

const Shows = () => {
  return (
    <>
        <h1 className='show-heading'>Shows</h1>
        {
          shows.map((data) => {
            return (<EventContainer content={{
              imgURL: data.imgloc,
              eventName: data.name,
              eventDate: data.date,
              eventLoc: data.loc,
              eventDesc: data.desciption,
              eventDetails: data.details
            }} />);
          })
        }
    </>
  )
}

export default Shows