import {JsonObject, JsonProperty} from "json2typescript";

import {
    Coord,
    Detail,
    Weather
} from './WeatherEntities'

//-------------------------------
@JsonObject
export class Weather1day {
    @JsonProperty("dt")
    dt: number = 0

    @JsonProperty("coord")
    coord: Coord = new Coord()

    @JsonProperty("weather", [Weather])
    weather: Weather[] = []

    @JsonProperty("base")
    base: string = ""

    @JsonProperty("main")
    detail: Detail = new Detail()

    @JsonProperty("visibility")
    visibility: number = 0

    //めんどくさくなってきたので省略

    @JsonProperty("id")
    id: number = 0

    @JsonProperty("name")
    name: string = ""

    @JsonProperty("cod")
    cod: number = 0
}

/*
{
    "coord": {
        "lon": 145.77,
        "lat": -16.92
    },
    "weather": [
        {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 300.15,
        "pressure": 1007,
        "humidity": 74,
        "temp_min": 300.15,
        "temp_max": 300.15
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.6,
        "deg": 160
    },
    "clouds": {
        "all": 40
    },
    "dt": 1485790200,
    "sys": {
        "type": 1,
        "id": 8166,
        "message": 0.2064,
        "country": "AU",
        "sunrise": 1485720272,
        "sunset": 1485766550
    },
    "id": 2172797,
    "name": "Cairns",
    "cod": 200
}*/