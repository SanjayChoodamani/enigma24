import React from 'react'
import './styles/EventList.css'
import EventContainer from './EventContainer'
import npp from '/events/nppt.jpg'

const data = [
  {
    imgloc: npp,
    name: 'Paper Presentation',
    date: '21/04',
    loc: 'Alumni Hall',
    desciption: `Welcome to the pulsating heart of drone racing, where the fusion of technology and sport gives birth to an electrifying display of aerial mastery. Witness the convergence of man and machine, where passion and skill converge to create a spectacle that pushes the boundaries of possibility.`
  }
]

const EventList = () => {
  return (
    <section className='event-heading-design'>
      <h1>NATIONAL LEVEL EVENT</h1>
      <EventContainer content={{
        imgURL: data[0].imgloc,
        eventName: data[0].name,
        eventDate: data[0].date,
        eventLoc: data[0].loc,
        eventDesc: data[0].desciption
      }} />
      <h1>DESIGN AND BUILD EVENT</h1>
      <EventContainer content={{
        imgURL: data[0].imgloc,
        eventName: data[0].name,
        eventDate: data[0].date,
        eventLoc: data[0].loc,
        eventDesc: data[0].desciption
      }} />
      <h1>PAPER EVENTS</h1>
      <h1>ONLINE EVENTS</h1>
    </section>
  )
}

export default EventList