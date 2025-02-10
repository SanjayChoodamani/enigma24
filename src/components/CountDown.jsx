import { useState, useEffect } from 'react'
import './styles/CountDown.css'


const CountDown = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const inputDate = "19 April 2024"


    useEffect(() => {
        const intervalId = setInterval(() => {
            const changingDate = new Date(inputDate);
            const currentDate = new Date();
            const totalSeconds = (changingDate - currentDate) / 1000;

            setDays(formatTime(Math.floor(totalSeconds / 3600 / 24)));
            setHours(Math.floor(totalSeconds / 3600) % 24);
            setMinutes(Math.floor(totalSeconds / 60) % 60);
            setSeconds(Math.floor(totalSeconds % 60));
        }, 1000); 

        return () => clearInterval(intervalId);
    }, []);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    return (
        <div className='countdownOuter'>
            <h1>Enigma'24 Countdown</h1>
            <div className='countdownInner'>
                <div className='countdown'>
                    <h2>{days}</h2>
                    <p>Days</p>
                </div>
                <div className='countdown'>
                    <h2>{hours}</h2>
                    <p>Hours</p>
                </div>
                <div className='countdown'>
                    <h2>{minutes}</h2>
                    <p>Minutes</p>
                </div>
                <div className='countdown'>
                    <h2>{seconds}</h2>
                    <p>Seconds</p>
                </div>
            </div>
        </div>
    )
}

export default CountDown
