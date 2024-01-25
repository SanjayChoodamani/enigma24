import React from 'react'
import './styles/EventList.css'
import EventContainer from './EventContainer'
import laser from '/events/laser.jpg'
import './styles/workshop.css'
const shows = [
    {
      "id": 1,
      "imgloc": laser,
      "name": "Laser Show",
      "date": "20/04",
      "loc": "Auditorium",
      "desciption": `Shows such as Laser Show is always associated with gigs which prove the untold incrediability of science and technology. Laser Show has the capacity to drive the people in and around Hassan hopping mad.`,
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