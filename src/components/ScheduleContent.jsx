import './styles/Schedule.css'

const scheduleContent = ({Data, num}) => {
    return (
        <ul>{Data[num].map((content) => {
            return (
                <li>{content.timings} - {content.eventName} - {content.eventLoc}</li>
            )
        })}
        </ul>


    )
}

export default scheduleContent
