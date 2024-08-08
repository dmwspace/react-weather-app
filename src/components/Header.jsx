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

    const forecast = 
        forecastArr.map((item, index) => <FiveDay
            item={item} 
            key={index}
            number={index} 
            fiveDayFetched={fiveDayFetched}
            clicked={clicked}
        />) 

    return (
        <div id="body">
            <Container id="input">
                <input type="text"
                    placeholder="Enter US Zip Code"
                    ref={inputRef}
                    onChange={(e) => handleChange(e.target.value)}
                    onKeyDown={handleKeyPress}
                ></input><button
                    onClick={handleClick}
                ><img id="glass"
                    src={process.env.PUBLIC_URL + "/icons/glass.png"} alt="?"
                /></button>
                <h2 id="ack">Weather data provided by weatherbit.io</h2>
            </Container>
            <Container>
                {currentWeatherInfo}
            </Container>
            <Container id="forecast">
                {forecast}
            </Container>
            
        </div>
    )
}
export default Header