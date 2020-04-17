'use strict';
const fs = require('fs');

let rawdata = fs.readFileSync('data.json');
let data = JSON.parse(rawdata);
let timeArray = []
for (var i=0; i<data.length; i++){
    for (var time in data[i]) {
        if(time === 'timestamp'){
            timeArray.push(data[i][time])
        }
    }
}
timeArray.sort()

const convertedTimeArray = []

timeArray.forEach( (data) => {

let unix_timestamp = data
// Create a new JavaScript Date object based on the timestamp
// multiplied by 1000 so that the argument is in milliseconds, not seconds.
var date = new Date(unix_timestamp);
// Day part from the timestamp
var Day = date.getDay();
// Month part from the timestamp
var Month = date.getDate();
// Year part from the timestamp
var Year = date.getFullYear();

return (Year+'-'+Month+'-'+Day)
})