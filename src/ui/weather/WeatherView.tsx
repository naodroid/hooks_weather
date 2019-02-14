import React, { useState } from 'react'
import './WeatherView.css';
import { Weather } from '../../entity/WeatherEntities'
import { useWeather5daysWithCityId } from '../../api/WeatherAPI';
import { WeatherChildInfo } from '../../entity/Weather5days';

/**
 *
 * @param props {
 *    city: City?
 * }
 */
export function WeatherView(props: any) {
    const {
        city
    } = props
    const cityId = (city != null) ? city.id : -1
    const weather = useWeather5daysWithCityId(cityId)
    if (weather.result == null) {
        return (<div></div>)
    }
    const list = groupWeatherByDate(weather.result.list)
    const renderCard = (l : WeatherChildInfo[], index: number) => {
        return (<WeatherCard weatherList={l} key={index}/>)
    }
    const cityName = (city != null) ? city.name : ""

    return (
        <div>
            <div className="weather-city-area"> {cityName} </div>
            { list.map(renderCard) }
        </div>
    )
}


/**
 *
 * @param props  {
 *   weatherList: WeatherInfo[]
 * }
 */
function WeatherCard(props: any) {
    const weatherList = props.weatherList as WeatherChildInfo[]
    const first = weatherList[0]
    const date = dtToMMDD(first.dt)

    const renderCell = (info: WeatherChildInfo, index: number) => {
        const iconUrl = "http://openweathermap.org/img/w/" + info.weather[0].icon + ".png"
        const temp = Math.ceil(info.main.temp)
        return (<div className="weather-inner" key={index}>
            <div className="weather-time"> { dtToHHMM(info.dt) }</div>
            <img className="weather-icon" src={iconUrl}/>
            <div className="weather-temp"> { temp }℃ </div>
        </div>)
    }

    return (
        <div className="weather-card">
            <div className="weather-date">{date}</div>
            <div className="weather-line">
                { weatherList.map(renderCell) }
            </div>
        </div>
    )
}
//grouping same day data
function groupWeatherByDate(info: WeatherChildInfo[]): WeatherChildInfo[][] {
    let result: WeatherChildInfo[][] = []
    let lastMMDD: string = ""
    for (let i of info) {
        let mmdd = dtToMMDD(i.dt)
        if (lastMMDD !== mmdd) {
            result.push([])
        }
        result[result.length - 1].push(i)
        lastMMDD = mmdd
    }
    return result
}
function dtToMMDD(dt: number) : string {
    const d = new Date(dt * 1000)
    const month = d.getMonth() + 1;
    const day  = d.getDate();
    return "" + month + "/" + day
}
function dtToHHMM(dt: number) : string {
    const d = new Date(dt * 1000)
    const h = d.getHours()
    const m = d.getMinutes()
    return "" + h + ":" + (m / 10) + (m % 10)
}
