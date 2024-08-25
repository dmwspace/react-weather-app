<Card bg='primary' bsPrefix="forecast-card">
<Card.Body bsPrefix="card-body">
    <Card.Title bsPrefix="card-title">{fullWeekdayName} {monthWithoutLeadingZero}-{dateWithoutLeadingZero}</Card.Title>
    <img 
        className="img-1"
        src={"../../icons/" + props.item.weather.icon + ".png"} alt="Problem" />
    <div style={{fontSize: 20}}>
        <h2>{hiTemp}<span style={{fontWeight: 400}}>/ {loTemp}</span></h2>
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