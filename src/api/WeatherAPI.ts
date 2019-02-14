
import { getRequest, getRequestDummy, useGetRequest, useGetRequestDummy } from './HttpFunctions';
import { Weather1day } from '../entity/Weather1day';
import Result from '../entity/Result';
import { JsonConvert } from 'json2typescript';
import { Weather5days } from '../entity/Weather5days';
import { useState, useEffect } from 'react';

const apiKey = process.env.REACT_APP_API_KEY
const useDummyRequest = false

//1day weather
export function useWeather1dayWithCityId(cityId: number | null) : Result<Weather1day> {
    const [result, setResult] = useState<Result<Weather1day>>(Result.empty)
    //access server
    useEffect(() => {
        (async () => {
            if (cityId && cityId > 0) {
                const url = "https://api.openweathermap.org/data/2.5/weather?id=" + cityId + "&appid=" + apiKey + "&units=metric"
                const dummyJson = require("./dummy1day.json")
                const pr = useDummyRequest ? getRequestDummy(dummyJson) : getRequest(url)
                const res = await pr
                const conv = new JsonConvert()
                const r = conv.deserialize(res, Weather1day)
                setResult(Result.success(r))
            } else {
                setResult(Result.empty)
            }
        })()
    }, [cityId])
    return result
}
//5days weather
export function useWeather5daysWithCityId(cityId: number) : Result<Weather5days> {
    const url: (string | null) = (cityId > 0)
        ? "https://api.openweathermap.org/data/2.5/forecast?id=" + cityId + "&appid=" + apiKey + "&units=metric"
        : null
    if (useDummyRequest) {
        const dummyJson = require("./dummy5days.json")
        return useGetRequestDummy<Weather5days>(dummyJson, Weather5days)
    }
    return useGetRequest<Weather5days>(url, Weather5days)
}






