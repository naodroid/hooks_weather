import React, { useState, useEffect } from 'react';
import './App.css';
import { CitySelection } from './city/CitySelection';
import { City } from '../entity/WeatherEntities';
import { WeatherView } from './weather/WeatherView';
import { Weather1day } from '../entity/Weather1day';


function App() {
  const [city, setCity] = useState<City | null>(null)

  const onCitySelected = (c: City) => {
    setCity(c)
  }

  return (
    <div className="App-container">
      <div className="App-leftPane">
        <CitySelection
          selectedCity={city}
          onCitySelected={onCitySelected}/>
      </div>
      <div className="App-separator-left"></div>
      <div className="App-rightPane">
        <WeatherView
          city={city}/>
      </div>
      <div className="App-separator-right"></div>
    </div>
  )
}

export default App;
