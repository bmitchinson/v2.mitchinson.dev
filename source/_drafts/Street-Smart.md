---
title: Street Smart
date: 2019-06-19 00:00:00
tags:
  - IoT
  - React
  - Express
  - Node
  - Raspberry Pi
  - School
  - Firebase
  - Live
comments: true
coverImage: http://localhost:4000/Street-Smart/ss_cover.jpg # (use transform (/upload/fl_progressive/v_149...) ) @ 2500 x 1512
autoThumbnailImage: false
thumbnailImage: https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,r_50:5/v1561401615/Projects/StreetSmart/ss_banner.jpg
coverMeta: out
coverSize: partial
gallery:
---

For my final project in Internet of Things last spring, our team of 5 created
an API, web app, and Raspberry Pi car sensor. The Pi utilizes an On Board
Diagnostics (OBD) system, enabling in cabin alerts when speeding is detected.
All events are forwarded to firebase, and from there an Express API and React App
on Heroku provide reports and visualizations of driving habits and vehicle health.
</br>
<!-- excerpt -->

## [Live Demo](street-smart.xyz) • [Showcase Poster](https://res.cloudinary.com/dheqbiqti/image/upload/v1561400335/Projects/StreetSmart/SSposter.pdf) • [GitHub](https://github.com/bmitchinson/streetsmart)

For the final project of "Internet of Things" last spring, our team created
an API, web app, and Raspberry Pi car sensor. The Pi utilizes an On Board
Diagnostics (OBD) interface, eventually enabling in cabin alerts when speeding is detected.
All events are forwarded to Firebase, and from there an Express API and React App
on Heroku provide reports and visualizations of driving habits and vehicle health.

( We use the free tier of Heroku, meaning the app sleeps every 30 minutes. You
might have to wait a moment for the app to spin up upon initial load: 
[Street-Smart.xyz](street-smart.xyz) 👍) 

### Front End
[Harsh Patel](https://github.com/hhpatel09) and I worked on the Express API and React interface in order
to demonstrate viewing sensor data on a "realtime" map. I tore apart [React Shards](https://designrevision.com/docs/shards-dashboard-lite/),
a well styled theme from Design Revision, to throw together an interface quickly.
I most proud of my implementation of the realtime map, as that component card
was created from scratch using our API, and [React Leaflet](https://react-leaflet.js.org).

### Car Travel Simulation Script
To have realistic testing data, and to be able to demo to our class, I created a 
script in node to simulate car travel. It's got speed accurate travel based on
any given route of coordinates, and uploads to Firebase just like our sensor.

<div style="height:600px;overflow-y:scroll">
{% tabbed_codeblock SimulateTrip.py - GitHub https://github.com/bmitchinson/StreetSmart/blob/master/server/SimulateTrip.js %}
      <!-- tab javascript -->
require('dotenv').config();
const firebase = require("firebase");
var moment = require('moment');

// Firebase initializtion
firebase.initializeApp({
  apiKey: process.env.APIKEY,
  authDomain: process.env.DOMAIN + '.firebaseapp.com',
  projectId: process.env.DOMAIN
});

var db = firebase.firestore();

// Initial Values for simulating a "trip"
let Battery = Math.floor(Math.random() * 60) + 40 // Will decay slowly

// Optional status code enabled for the entire trip
let StatusCode = ""

// Starting time of the trip
let Driver = "Tyler" // Constant
let Time = moment('05-2-2019 10:45', 'MM-DD-YYYY hh:mm');

// to use for simulated trip
let checkpointStrings = [
  "41.663611, -91.534595",
  "41.663627, -91.537588",
  "41.656694, -91.537728",
  "41.656615, -91.530174",
  "41.654159, -91.530218",
  "41.650474, -91.531966",
  "41.649512, -91.532020",
  "41.649472, -91.515884"
]

let speedLimits = [
  25, 35, 25, 25, 25, 25, 45
]

// Alters varience from speed limit
let DriveStyle = 5 // -2: Slow driver, 0: Strict Driver, 1: Late, 3: Stupid
let sampleRate = 12 // Sample every 15 seconds
let timeFactor = 3 // Move time along 3x times faster
let pushMode = true // If enabled results are pushed to firebase
let delayMode = true // If enabled, time / speed MPH accurate delays occur

// Converts strings to GeoPoints for publishing 
let checkpoints = []

checkpointStrings.forEach((text) => {
  let geo = new firebase.firestore.GeoPoint(
    Number(text.split(',')[0]), Number(text.split(',')[1]));
  checkpoints.push(geo);
})

function cordDistKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2 - lat1);  // deg2rad below
  var dLon = deg2rad(lon2 - lon1);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180)
}

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

async function sim(){
let carGeoPoint = checkpoints[0];
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log(Time.format('lll') + ": Starting 🚗  @ "
  + String(carGeoPoint.latitude) + ", " + String(carGeoPoint.longitude) +
  " Driver Style: " + DriveStyle)
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
// Begin adding data in simulated time (if delayMode, otherwise all at once)
let index = 0
for (const destPoint of checkpoints){
//checkpoints.forEach((destPoint, index) => {
  if (index != 0) {
    // Variance in speed
    let carMPH = speedLimits[index - 1] + (DriveStyle * Math.floor(Math.random() * 10) + 1)
    if (DriveStyle == 0) {
      carMPH--
    }
    let carMPS = carMPH / 3600
    let carMPSample = carMPS * sampleRate
    let milesBetween = cordDistKm(destPoint.latitude, destPoint.longitude,
      carGeoPoint.latitude, carGeoPoint.longitude) * .6214; //KM to Miles
    let subPointsCount = milesBetween / carMPSample
    let subPoints = [];
    let latShift = (destPoint.latitude -
      carGeoPoint.latitude) / subPointsCount
    let longShift = (destPoint.longitude -
      carGeoPoint.longitude) / subPointsCount
    let subPointsIndex = 0;
    while (subPointsIndex < subPointsCount - 1) {
      carGeoPoint = new firebase.firestore.GeoPoint(
        carGeoPoint.latitude + latShift,
        carGeoPoint.longitude + longShift
      )
      if (pushMode) {
        await db.collection("events").doc().set({
          RealData: false,
          Battery: Battery,
          Driver: Driver,
          Location: carGeoPoint,
          Speed: carMPH,
          SpeedLimit: speedLimits[index - 1],
          SpeedStatus: (carMPH - speedLimits[index - 1]),
          StatusCode: StatusCode,
          Time: firebase.firestore.Timestamp.fromDate(Time.toDate())
        }).then(() => {
          console.log("🔥 ✔️");
        })
      }
      if (delayMode) {
        sleep(1000 * sampleRate / timeFactor);
      }
      subPointsIndex++
      Time = Time.add(sampleRate, 'seconds')
      console.log(Time.format('lll') + ": 🚗  located @ " +
        String(Math.round(carGeoPoint.latitude * 1000000.0) / 1000000.0) +
        ", " + String(Math.round(carGeoPoint.longitude * 1000000.0) / 1000000.0)
        + "\ngoing " + carMPH + "MPH in a " + speedLimits[index - 1] + "MPH Zone"
      );
    }
    Battery--
    carGeoPoint = checkpoints[index]
    if (pushMode) {
      await db.collection("events").doc().set({
        RealData: false,
        Battery: Battery,
        Driver: Driver,
        Location: carGeoPoint,
        Speed: carMPH,
        SpeedLimit: speedLimits[index - 1],
        SpeedStatus: (carMPH - speedLimits[index - 1]),
        StatusCode: StatusCode,
        Time: firebase.firestore.Timestamp.fromDate(Time.toDate())
      }).then(() => {
        console.log("🔥 ✔️");
      })
    }
    if (delayMode) {
      sleep(1000 * sampleRate / timeFactor);
    }
    Time = Time.add(sampleRate, 'seconds')
    console.log(Time.format('lll') + ": 🚗  reached point " + String(index+1) + "! " + checkpointStrings[index]);
  }
  index++
}
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
console.log("End of trip");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}

// Call the main sim async function
sim()

/* db.collection("bentest").doc().set({
  RealData: false,
  Battery: Battery,
  Driver: Driver,
  Location: carGeoPoint,
  Speed: carMPH,
  SpeedLimit: speedLimits[index - 1],
  SpeedStatus: (carMPH - speedLimits[index - 1]),
  StatusCode: StatusCode,
  Time: firebase.firestore.Timestamp.fromDate(Time.toDate())
}).then(() => {
  console.log("🔥 ✔️");
}) */
      <!-- endtab -->
  {% endtabbed_codeblock %}
</div>

A bit about the math to simulate times and events. Embedded code. Would be nice to
clean up since I was forced to write this script overnight in case our sensor didn't function.

### Got selected for showcase (link to modern?)


### Improvements for the front end
* GraphQL for a proper resource managed paginated API, instead of random express routes that fetch + deliver much more data then necessary 
* Bundling / proper package management. Really want to learn about that soon.
* Authentication is one of my biggest weaknesses, we faked it 

### Credit template

Pic of team in gallery?
Snap of it first working
Managing API Keys with dotenv 

-- SITE ICON

- links -
side by side video + terminal:
https://res.cloudinary.com/dheqbiqti/video/upload/v1561338591/Projects/StreetSmart/SS_Demo.mp4

firestore:
https://res.cloudinary.com/dheqbiqti/video/upload/v1561400335/Projects/StreetSmart/firestore.mp4

speedled:
https://res.cloudinary.com/dheqbiqti/video/upload/v1561400335/Projects/StreetSmart/speedled.mp4

