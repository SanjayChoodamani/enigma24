import React from 'react'
import './styles/EventList.css'
import EventContainer from './EventContainer'                   
import { nationalData, designBuild, paperData, onlineData  } from './EventData'


const EventList = () => {
  return (
    <section className='event-heading-design'>
      <h1>NATIONAL LEVEL EVENT</h1>
      {
        nationalData.map((data) => {
          return(<EventContainer content={{
            imgURL: data.imgloc,
            eventName: data.name,
            eventDate: data.date,
            eventLoc: data.loc,
            eventDesc: data.desciption,
            eventDetails : data.details
          }} />);
        })
      }

      <h1>DESIGN AND BUILD EVENT</h1>
      {
        designBuild.map((data) => {
          return(<EventContainer content={{
            imgURL: data.imgloc,
            eventName: data.name,
            eventDate: data.date,
            eventLoc: data.loc,
            eventDesc: data.desciption,
            eventDetails : data.details
          }} />);
        })
      }
      <h1>PAPER EVENTS</h1>
      {
        paperData.map((data) => {
          return(<EventContainer content={{
            imgURL: data.imgloc,
            eventName: data.name,
            eventDate: data.date,
            eventLoc: data.loc,
            eventDesc: data.desciption,
            eventDetails : data.details
          }} />);
        })
      }
      <h1>ONLINE EVENTS</h1>
      {
        onlineData.map((data) => {
          return(<EventContainer content={{
            imgURL: data.imgloc,
            eventName: data.name,
            eventDate: data.date,
            eventLoc: data.loc,
            eventDesc: data.desciption,
            eventDetails : data.details
          }} />);
        })
      }
    </section>
  )
}

export default EventList