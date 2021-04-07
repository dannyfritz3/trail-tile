export const mapCoordinates = {
    "Battle Creek": {
        "reimtbX": "-10354896",
        "reimtbY": "5611554"
    },
    "Bertram Chain of Lakes": {
        "reimtbX": "-10446610",
        "reimtbY": "5667854",
    },
    "Carver Lake Park": {
        "reimtbX": "-10350542",
        "reimtbY": "5606186"
    },
    "Cottage Grove Bike Park": {
        "reimtbX": "-10349262",
        "reimtbY": "5597117"
    },
    "Elm Creek": {
        "reimtbX": "-10398850",
        "reimtbY": "5648661"
    },
    "Hillside Park": {
        "reimtbX": "-10412804",
        "reimtbY": "5668317"
    },
    "Lake Rebecca": {
        "reimtbX": "-10436070",
        "reimtbY": "5631256"
    },
    "Lebanon Hills": {
        "reimtbX": "-10374662",
        "reimtbY": "5586981"
    },
    "Lone Lake Park": {
        "reimtbX": "-10400501",
        "reimtbY": "5605454"
    },
    "Minnesota River Trail": {
        "reimtbX": "-10381834",
        "reimtbY": "5592584"
    },
    "Monarch Singletrack": {
        "reimtbX": "-10430561",
        "reimtbY": "5602252"
    },
    "Murphy Hanrehan": {
        "reimtbX": "-10390997",
        "reimtbY": "5577444"
    },
    "Salem Hills": {
        "reimtbX": "-10360948",
        "reimtbY": "5599802"
    },
    "Sunfish Lake Park": {
        "reimtbX": "-10343323",
        "reimtbY": "5618807"
    },
    "Terrace Oaks": {
        "reimtbX": "-10379469",
        "reimtbY": "5585379"
    },
    "Theodore Wirth": {
        "reimtbX": "-10389802",
        "reimtbY": "5618312"
    }
};


export const parseWeatherDate = (timestamp) => {
    var timestamp_split = timestamp.value.split('-');
    var month = parseInt(timestamp_split[1]);
    var day = parseInt(timestamp_split[2]);

    switch (month) {
        case 1: month = "January"; break;
        case 2: month = "February"; break;
        case 3: month = "March"; break;
        case 4: month = "April"; break;
        case 5: month = "May"; break;
        case 6: month = "June"; break;
        case 7: month = "July"; break;
        case 8: month = "August"; break;
        case 9: month = "September"; break;
        case 10: month = "October"; break;
        case 11: month = "November"; break;
        case 12: month = "December"; break;
        default: month = "";
    }
    return `${month} ${day}`;
};

export const createFancyTimestamp = () => {
    var month;
    var day;
    var year;
    var hours;
    var minutes;
    var suffix;

    var timestamp = new Date();

    //get the string for the month of timestamp
    switch (timestamp.getMonth()) {
        case 0: month = "January"; break;
        case 1: month = "February"; break;
        case 2: month = "March"; break;
        case 3: month = "April"; break;
        case 4: month = "May"; break;
        case 5: month = "June"; break;
        case 6: month = "July"; break;
        case 7: month = "August"; break;
        case 8: month = "September"; break;
        case 9: month = "October"; break;
        case 10: month = "November"; break;
        case 11: month = "December"; break;
        default: month = "";
    }

    day = timestamp.getDate();
    year = timestamp.getFullYear();
    hours = timestamp.getHours() > 12 ? timestamp.getHours() - 12 : timestamp.getHours();
    suffix = timestamp.getHours() >= 12 ? "pm" : "am";
    minutes = timestamp.getMinutes();

    //combine the variables to make one formatted string that will be returned
    var returnTimestamp = [
        `${month} ${day}, ${year}`,
        `${hours}:${minutes} ${suffix}`
    ];
    return returnTimestamp;
};

export const parseFancyTimestamp = (timestamp) => {
    var timestampNow = createFancyTimestamp();
    var timestampThen = timestamp;

    if (timestampThen[0] === timestampNow[0]) {
        return `Today @ ${timestampThen[1]}`;
    } else {
        return timestamp;
    }
};

export const parseWindDirection = (degrees) => {
    if(0 <= degrees && degrees < 22.5) {
        return "N";
    } else if(22.5 <= degrees && degrees < 67.5) {
        return "NE";
    } else if(67.5 <= degrees && degrees < 112.5) {
        return "E";
    } else if(112.5 <= degrees && degrees < 157.5) {
        return "SE";
    } else if(157.5 <= degrees && degrees < 202.5) {
        return "S"
    } else if(202.5 <= degrees && degrees < 247.5) {
        return "SW";
    } else if(247.5 <= degrees && degrees < 292.5) {
        return "W";
    } else if(292.5 <= degrees && degrees < 337.5) {
        return "NW";
    } else {
        return "N";
    }
};