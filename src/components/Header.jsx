import Hooks from "../hooks/hooks"
import FiveDay from "./FiveDay"
import Current from "./Current"
import {Container} from "react-bootstrap"

function Header() {

    const [
        inputRef,
        currentFetched,
        fiveDayFetched,
        handleKeyPress,
        zipCode, 
        clicked, 
        cityName, 
        stateName, 
        temp,
        currentIcon,
        feelsLike, 
        description, 
        windDirection, 
        windSpeed,
        handleChange,
        handleClick,
        forecastArr
    ] = Hooks() 
    
    const currentWeatherInfo = 
        <Current 
            zipCode={zipCode}
            cityName={cityName}
            stateName={stateName}
            description={description}
            temp={temp}
            currentIcon={currentIcon}
            feelsLike={feelsLike}
            windDirection={windDirection}
            windSpeed={windSpeed}
            currentFetched={currentFetched}
            clicked={clicked}
        />  

    //const forecast = 

    //console.log('forecastArr: ', forecastArr)
    return (
        
        <div id="body">
            <Container id="input">
                <input type="text"
                    placeholder="Enter US Zip Code"
                    ref={inputRef}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={handleKeyPress}
                ></input><button
                    onClick={handleClick}>Go</button>
                <h2 id="ack">Weather data provided by weatherbit.io</h2>
            </Container>
            <Container>
                {currentWeatherInfo}
            </Container>
            <Container id="forecast">
                {forecastArr.map((item) => <FiveDay
                    item={item} 
                    key={item.sunrise_ts}
                    number={item.sunrise_ts}
                    fiveDayFetched={fiveDayFetched}
                    clicked={clicked}
                />)} 
            </Container>
            
        </div>
    )
}
export default Header