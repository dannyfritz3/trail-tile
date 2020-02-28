import json

def resolveTrailLocation(trailName):
    with open('./utility-data/static_location_data.json') as infile:
        location_data = json.load(infile)
        print("test")