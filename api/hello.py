from flask import Flask
from flask.wrappers import Response
from flask import request
from flask_cors import CORS
from dotenv import load_dotenv
import populartimes
import requests
import json
import os

load_dotenv()
app = Flask(__name__)
CORS(app)

api_key = os.environ.get('api_key')

@app.route('/data')
def hello_world():
    # lat = 47.658101130283974
    # lng = -122.31845242186691
    lat = request.args.get("lat")
    lng = request.args.get("lng")
    print(request.query_string)
    url = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location="+ str(lat) + "%2C" + str(lng) + "&radius=1500&type=restaurant&opennow=true&key=" + str(api_key)
    payload={}
    headers = {}
    response = json.loads(requests.request("GET", url, headers=headers, data=payload).text)
    # print(response['results'])
    response_list = response['results']
    output_list = []
    for index in range(len(response_list)):
        element = {}
        for key in response_list[index]:
            if (key == 'geometry'):
                location = response_list[index][key]['location']
                element['location'] = location
            if (key == 'place_id'):
                element['place_id'] = response_list[index][key]
                element['wait_time'] = getPopularTimes(response_list[index][key])
            if (key == 'name'):
                element['name'] = response_list[index][key]
            if (key == 'photos'):
                element['photos'] = response_list[index][key][0]
        if (element['wait_time'] != -1):
            output_list.append(element)
            element['walk_time'] = float(getWalkTime(element['place_id'], lat, lng)) / 60

    return json.dumps(output_list)

@app.route('/test')
def test():
    return populartimes.get(api_key, ["bar"], (48.132986, 11.566126), (48.142199, 11.580047))
    # 47.662297 -122.312643

def getPopularTimes(place_id):
    times = populartimes.get_id(api_key, place_id)
    # print(times)
    if 'current_popularity' in times:
        return times['current_popularity']
    return -1

def getWalkTime(place_id, lat, lng):
    url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=" + str(lat) + "%2C" + str(lng) + "&destinations=place_id:" + str(place_id) + "&mode=walking&key=" + str(api_key)
    payload = {}
    headers = {}
    response = json.loads(requests.request("GET", url, headers=headers, data=payload).text)
    return response['rows'][0]['elements'][0]['duration']['value']
