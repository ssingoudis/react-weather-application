import './current-weather.css'

const CurrentWeather = () => {
  return (
    <div className='weather'>
      <div className='top'>
        <div>
          <p className='city'>city1</p>
          <p className='weather-desciption'>weather2</p>
        </div>
          <img alt='weather' className='weather-icon' src='weather-icons/01d.png' />
      </div>
      <div className='bottom'>
        <p className='temperature'>22°C</p>
        <div className='details'>
          <div className='parameter-row'>
            <span className='parameter-label top'>Details</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Feels like</span>
            <span className='parameter-value'>10</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Wind</span>
            <span className='parameter-value'>3m/s</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Pressure</span>
            <span className='parameter-value'>2 Pa</span>
          </div>
          <div className='parameter-row'>
            <span className='parameter-label'>Humidity</span>
            <span className='parameter-value'>000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather