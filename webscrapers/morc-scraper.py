from bs4 import BeautifulSoup
import requests
import re
import json
from locationResolver import resolveTrailLocation
from parseTimestamp import parseTimestamp

def main():
    trail_data = scrape_for_trail_data()
    with open('../src/trail_data.json', 'w') as outfile:
        json.dump(trail_data, outfile)

def scrape_for_trail_data():
    page = requests.get("http://www.morcmtb.org/forums/trailconditions.php")
    soup = BeautifulSoup(page.content, 'html.parser')

    contents = soup.contents
    raw_trail_info = []
    parsed_trail_info = []

    for item in contents:
        if not isinstance(item, str):
            item_text = getattr(item, 'text')
            if item_text.endswith('\r\n\n\n'):
                raw_trail_info.append(item.text)

    keys = ["name", "condition", "comments", "username", "timestamp", "parsedTimestamp", "location"]
    for item in raw_trail_info:
        parsed_data_str = re.sub(r"((\r)*(\n)+(\t)*(\r)*(\n)*(\t)*)", ',', item)
        parsed_data_obj = parsed_data_str[1:len(parsed_data_str)-1].split(',')
        parsed_trail_info.append(parsed_data_obj)

    parsed_trail_info = append_remaining_trail_data(parsed_trail_info)
    return parsed_trail_info

def append_remaining_trail_data(parsed_trail_info):
    for x in parsed_trail_info:
        x["parseTimestamp"] = parseTimestamp(x.get("timestamp"))
        x["location"] = resolveTrailLocation(x.get("name"))
    return trail_data

if __name__ == "__main__":
    main()
