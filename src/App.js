//import components
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/current-weather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './API';
import Forecast from './components/forecast/forecast';

//import styles
import './App.css';
import { useState } from 'react';



function App() {
  
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)

  const handleOnSearchChange = (searchData) => {
  
    const [latitude, longitude] = searchData.value.split(" ")
  
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastWeatherFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=metric`)
  
    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json()
        const forecastResponse = await response[1].json()
  
        setWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
      })
      .catch((err) => {
        console.log(err)
      })
  
  }

  console.log(weather, forecast)

  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />
      {weather && <CurrentWeather data={weather} />}
      {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;
