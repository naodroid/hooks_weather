import React, { useState, ChangeEvent } from 'react';
import { useSearchCities } from '../../city/SearchCity';

import './CitySelection.css'
import { City } from '../../entity/WeatherEntities';

/**
 * @param props {
 *  keyword : string
 *  selectedCity: City?
 *  onSeleced: (City) => void
 * }
 */
export function CityList(props: any) {
    const {
        keyword,
        selectedCity,
        onCitySelected
    } = props
    const cities = useSearchCities(keyword)
    const selectedCityId = (selectedCity != null) ? selectedCity.id : 0

    return (
        <div className="City-list-container">
            { cities.map((city, index) => {
                const selected = city.id === selectedCityId
                return (
                    <CityCell
                        city={city}
                        selected={selected}
                        onCitySelected={onCitySelected}
                        key={index}/>
                )
            })}
        </div>
    )
}
/**
 *
 * @param props {
 *   city: City
 *   selected: bool,
 *   onCitySelected: (City) => void
 * }
 */
function CityCell(props: any) {
    const {
        city,
        selected,
        onCitySelected
    } = props
    const coords = city.coord
    const className = selected ? "City-list-cell City-list-selected" : "City-list-cell"

    const onClick = (event: any) => {
        if (onCitySelected) {
            onCitySelected(city)
        }
    }

    return (
        <div className={className} onClick={onClick}>
            <span className="name"> { city.name }</span>
            <span className="coords"> { coords.lat + "," + coords.lon }</span>
            <div className="separator"/>
        </div>
    )
}

