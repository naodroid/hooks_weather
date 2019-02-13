My first React Hooks example, showing weather forecast using `Open Weather API`


# Preparing

## create api key

1. get API key from open weather
2. write key to `.env` file, with named `REACT_APP_API_KEY`

example

```txt
REACT_APP_API_KEY="YOUR_KEY"
```

## craete city list

For reducing json size, I filtered city.json, japan only.

0. install python3
1. download all cities from [Open weather](http://bulk.openweathermap.org/sample/), `citiy.list.json.gz`
2. extract it and put it in `tools/` folder
3. run python code in `tools/`, python3 city_filter
4. `jp_cities.json` will be craeted
5. put in in `src/city/` folder

# run

`npm start` to run
