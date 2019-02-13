import json

# open-weather's city list file is too large.
# So this program filters only JP-cities from cities-json.
# How To use
# 1. download city.list.json from
#   http://bulk.openweathermap.org/sample/city.list.json.gz
# 2. place this folder
# 3. run code:  python3 city_filter.py
# 4. jp_cities.json will be created
def filter_jp():
    with open("city.list.json", "rb") as json_file:
        cities = json.load(json_file)
        jp = [city for city in cities if city["country"] == "JP"]
        print(len(jp))
        with open("jp_cities.json", "w") as jp_file:
            json.dump(jp, jp_file)


if __name__ == "__main__":
    filter_jp()
