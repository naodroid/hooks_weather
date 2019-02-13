import {JsonObject, JsonProperty} from "json2typescript";

@JsonObject("city")
export class City {
    @JsonProperty("id")
    id: number = 0
    @JsonProperty("name")
    name: string = ""
    @JsonProperty("country")
    country: string = ""
    @JsonProperty("coord")
    coord: Coord = new Coord()
}

//
@JsonObject("Coord")
export class Coord {
    @JsonProperty("lon")
    lon: number = 0
    @JsonProperty("lat")
    lat: number = 0
}
@JsonObject("Weather")
export class Weather {
    @JsonProperty("id")
    id: number = 0
    @JsonProperty("main")
    main: string = ""
    @JsonProperty("description")
    description: string = ""
    @JsonProperty("icon")
    icon: string = ""
}
@JsonObject("Detail")
export class Detail {
    @JsonProperty("temp")
    temp : number = 0
    @JsonProperty("pressure")
    pressure : number = 0
    @JsonProperty("humidity")
    humidity : number = 0
}

