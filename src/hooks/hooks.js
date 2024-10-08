import {useState, useRef, useEffect} from "react";

function Hooks() {
    const inputRef = useRef(null)

    const [currentFetched, setCurrentFetched] = useState(false)
    const [fiveDayFetched, setFiveDayFetched] = useState(false)
    const [fiveDigits, setfiveDigits] = useState(null)
    const [zipCode, setZipCode] = useState(null)
    const [clicked, setClicked] = useState(false)
    const [cityName, setCityName] = useState("")
    const [stateName, setStateName] = useState("")
    const [temp, setTemp] = useState("")
    const [feelsLike, setFeelsLike] = useState(null)
    const [currentIcon, setCurrentIcon] = useState("")
    const [description, setDescription] = useState("")
    const [windDirection, setWindDirection] = useState("")
    const [windSpeed, setWindSpeed] = useState("")
    const [forecastArr, setForecastArr] = useState([])
    
    const handleChange = e => setfiveDigits(e)

    const handleKeyPress = e => {
        if (e.key === 'Enter' || e.key === 'Return') {
            handleClick()
            e.preventDefault()
        }
    }

    useEffect(() => {
        inputRef.current.focus()
        inputRef.current.value = null
    }, [clicked])

    function handleClick() {
        setClicked(false)
        setCurrentFetched(false)
        setFiveDayFetched(false)
        setZipCode(fiveDigits)
        const apiKey = import.meta.env.VITE_APP_WEATHERBIT_API_KEY
        setTimeout(() => {setClicked(true)}, 600)
        fetch(`http://api.weatherbit.io/v2.0/current/?postal_code=${fiveDigits}&units=I&key=${apiKey}`)
        .then(res => res.json())
        .then((data) => {
            const stringData = JSON.stringify(data)
            const currentData = JSON.parse(stringData)
            setCurrentFetched(true)
            setCityName(currentData.data[0].city_name)
            setStateName(currentData.data[0].state_code)
            setDescription(currentData.data[0].weather.description)
            setTemp(currentData.data[0].temp)
            setFeelsLike(currentData.data[0].app_temp)
            setWindSpeed(currentData.data[0].wind_spd)
            setWindDirection(currentData.data[0].wind_cdir)
            setCurrentIcon(currentData.data[0].weather.icon)
            getFiveDay()
        })
        
        function getFiveDay() {
            const url4 = `http://api.weatherbit.io/v2.0/forecast/daily?postal_code=${fiveDigits}&units=I&days=5&key=${apiKey}`
            fetch(url4)
            .then(res => res.json())
            .then(data => {
            const strFiveDay = JSON.stringify(data)
            const jsonFiveDay = JSON.parse(strFiveDay)
            //console.log('jsonFiveDay.data', jsonFiveDay.data)
            setFiveDayFetched(true)
            setForecastArr(jsonFiveDay.data)
            console.log('forecastArr: ', forecastArr)
        })
    }
    }

    return (
        [
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
        ]
    )
}

export default Hooks
