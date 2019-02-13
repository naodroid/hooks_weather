import { City } from "../entity/WeatherEntities";
import { useState, useEffect } from "react";
import { JsonConvert } from "json2typescript";
import { async } from "q";

//read all cities from json
function useReadAllCities() : City[] {
    const [cities, setCities] = useState([] as City[])
    useEffect(() => {
        async (() => {
            let jsonData = require('./jp_cities.json')
            let conv = new JsonConvert()
            let cities: City[] = conv.deserializeArray(jsonData, City)
            setCities(cities)
        })()
    }, [])
    return cities
}

//filter cities from city name
export function useSearchCities(keyword: string) : City[] {
    const [cities, setCities] = useState([] as City[])
    const allCities = useReadAllCities()
    const lower = keyword.toLocaleLowerCase()
    useEffect(() => {
        if (lower.length < 3) {
            setCities([])
        } else {
            async (() => {
                let r = allCities.filter((value, index) => {
                    return value.name.toLowerCase().indexOf(lower) >= 0
                })
                setCities(r)
            })()
        }
    }, [keyword, allCities.length])

    return cities
}