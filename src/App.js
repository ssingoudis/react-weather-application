//import components
import Search from './components/search/Search'
import CurrentWeather from './components/current-weather/current-weather';

//import styles
import './App.css';

  const handleOnSearchChange = (searchData) => {
    console.log(searchData)
  }


function App() {
  return (
    <div className="container">
      {/* 3. onSearchChange calls the handleOnSearchChange Method which console.logs the data */}
      <Search onSearchChange={handleOnSearchChange}/>
      <CurrentWeather />
    </div>
  );
}

export default App;
