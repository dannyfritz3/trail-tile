import requests

def resolveTrailLocation(trailName):
    params = dict(
        input="%s Minnesota" % (trailName),
        key="AIzaSyBe_FhCgqtf6ohN-5Okch3DTBy0iwvbMFw",
        inputtype="textquery",
        fields=["formatted_address"]
    )
    response = requests.get(url="https://maps.googleapis.com/maps/api/place/findplacefromtext/json", params=params).json()
    if len(response.get("candidates")) == 0:
        return "St. Croix, WI"
    return response.get("candidates")[0].get("formatted_address").split(", ")[1]