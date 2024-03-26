import {useEffect, useState} from 'react';

import WeatherApi from "./service/weatherApi.js";
import Header from "./components/header/Header.jsx";
import WeatherStatus from "./components/weather-status/WeatherStatus.jsx";

const App = () => {
    const [city,setCity]= useState(null)
    useEffect(() => {
        const getWeatherData = async () => {
            const data = await WeatherApi.getCurrentWeather()
            console.log(data,"-------------")
            setCity(data)

        }
        getWeatherData();

    }, []);
    if (city === null){
        return <h1>loading...</h1>
    }
    return (
        <div className='container'>
            <Header cityName={city.name}/>
            <WeatherStatus temp={city.main.temp}/>
        </div>
    );
};

export default App;