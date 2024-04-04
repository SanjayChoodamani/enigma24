import {useState} from 'react'
import './styles/Schedule.css'
import Data from './ScheduleData.js'
import ScheduleContent from './ScheduleContent'


const Schedule = () => {
    const [date, setDate] = useState("18")
    const [myClass, setMyClass] = useState("")

    return (
        <div className='schedule'>
            <div className='scheduleHeading'>
                <h1>SCHEDULE</h1>
            </div>
            <div className='schedule-container'>
                <div className='scheduleDates'>
                    <div onClick={()=>{setDate("18"); setMyClass("active")}} className={myClass}>
                        <h1>18<span>TH</span></h1>
                        <br/>
                    </div>
                    <div onClick={()=>{setDate("19"); setMyClass("active")}} className={myClass}>
                        <h1>19<span>TH</span></h1>
                        <br/>
                    </div>
                    <div onClick={()=>{setDate("20"); setMyClass("active")}} className={myClass}>
                        <h1>20<span>TH</span></h1>
                        <br/>
                    </div>
                    <div onClick={()=>{setDate("21"); setMyClass("active")}} className={myClass}>
                        <h1>21<span>ST</span></h1>
                        <br/> 
                    </div>
                </div>
                <div className='scheduleContent'>
                {date === "18" && <ScheduleContent Data={Data} num={0}/> }
                {date === "19" && <ScheduleContent Data={Data} num={1}/> }
                {date === "20" && <ScheduleContent Data={Data} num={2}/> }
                {date === "21" && <ScheduleContent Data={Data} num={3}/> }
                </div>
            </div>
        </div>
    )
}

export default Schedule
