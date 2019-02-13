import {JsonObject, JsonProperty} from "json2typescript";
import { City, Weather, Detail } from "./WeatherEntities";
import { Weather1day } from "./Weather1day";

@JsonObject
export class WeatherChildInfo {
    @JsonProperty("dt", true)
    dt: number = 0

    @JsonProperty("weather", [Weather])
    weather: Weather[] = []

    @JsonProperty("base")
    base: string = ""

    @JsonProperty("main")
    main: Detail = new Detail()
}
@JsonObject
export class Weather5days {
    @JsonProperty("cod")
    cod: number = 0

    @JsonProperty("list")
    list: WeatherChildInfo[] = []


    @JsonProperty("city")
    city: City = new City()
}