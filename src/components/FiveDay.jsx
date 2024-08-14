import {Card} from "react-bootstrap";

function FiveDay(props) {
    const year = props.item.datetime.slice(0, 4)
    const month = props.item.datetime.slice(5, 7)
    const date = props.item.datetime.slice(8)
    const dateWithoutLeadingZero = +date
    const monthWithoutLeadingZero = +month

    const monthName = 
        month === "01" ?
            "January" :
        month === "02" ?
            "February" :
        month === "03" ?
            "March" :
        month === "04" ?
            "April" :
        month === "05" ?
            "May" :
        month === "06" ?
            "June" :
        month === "07" ?
            "July" :
        month === "08" ?
            "August" :
        month === "09" ?
            "September" :
        month === "10" ?
            "October" :
        month === "11" ?
            "November" :
            "December"
        
    const fullDate = new Date(`${monthName} ${date}, ${year}`)

    let weekday = fullDate.getDay()

    let fullWeekdayName = 
        weekday === 0 ?
            "Sun" :
        weekday === 1 ?
            "Mon" :
        weekday === 2 ?
            "Tues" :
        weekday === 3 ?
            "Wed" :
        weekday === 4 ?
            "Thu" :
        weekday === 5 ?
            "Fri" :
        weekday === 6 ?
            "Sat" :
            null

    const hiTemp = Math.round(props.item.max_temp)
    const loTemp = Math.round(props.item.min_temp)

    return (
        !props.clicked ?
            null :
        props.clicked && !props.fiveDayFetched ?
            <h1>There are too many requests for the forecast api at this time, please try again.</h1> :
                <Card bg='primary' bsPrefix="forecast-card">
                    <Card.Body bsPrefix="card-body">
                        <Card.Title bsPrefix="card-title">{fullWeekdayName} {monthWithoutLeadingZero}-{dateWithoutLeadingZero}</Card.Title>
                        <img 
                            className="img-1"
                            src={"../../icons/" + props.item.weather.icon + ".png"} alt="Problem" />
                        <div style={{fontSize: 20}}>
                            <h2 style={{fontWeight: 700}}>{hiTemp}  <span style={{fontWeight: 400}}>/ {loTemp}</span></h2>
                            <img
                                id="precip"
                                src={props.item.weather.code < 600 || props.item.weather.code > 699 ?
                                    "../../icons/raindrop1.webp" :
                                    "../../icons/snowflake.png"} 
                                alt="problem"
                            /><span>{props.item.pop}%</span>
                        </div> 
                    </Card.Body>
                </Card>
    )
}
export default FiveDay