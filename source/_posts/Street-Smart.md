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
comments: true
coverImage: https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive/v1561941864/Projects/StreetSmart/ss_cover.webp
autoThumbnailImage: false
thumbnailImage: https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,r_50:5/v1561941275/Projects/StreetSmart/ss_banner.webp
coverMeta: out
coverSize: partial
gallery:
---

For the final project in "Internet of Things" last spring, our team created
an API, web app, and Raspberry Pi car sensor. The Pi utilizes an on-board
Diagnostics (OBD) interface and the Overpass API to enable in-cabin alerts
when speeding is detected. All events are forwarded to Firebase, and an Express
API and React App hosted on Heroku provide reports and visualizations of driving
habits and vehicle health.
</br>

<!-- excerpt -->

For the final project in "Internet of Things" last spring, our team created
an API, web app, and Raspberry Pi car sensor. The Pi utilizes an on-board
Diagnostics (OBD) interface and the Overpass API to enable in-cabin alerts
when speeding is detected. All events are forwarded to Firebase, and an Express
API and React App hosted on Heroku provide reports and visualizations of driving
habits and vehicle health.

## [Showcase Poster](https://res.cloudinary.com/dheqbiqti/image/upload/v1561400335/Projects/StreetSmart/SSposter.pdf) • [GitHub](https://github.com/bmitchinson/streetsmart)

(We use the free tier of Heroku, meaning the app sleeps every 30 minutes. You
might have to wait a moment for the app to spin up upon initial load:
[Street-Smart.xyz](http://street-smart.xyz) 👍)

## The Front End

[Harsh Patel](https://github.com/hhpatel09) and I worked on the Express API and React interface in order
to demonstrate viewing sensor data on a "real-time" map. I tore apart [React Shards](https://designrevision.com/docs/shards-dashboard-lite/),
a well styled site template from Design Revision, to throw together an interface quickly.
I was most proud of my implementation of the real-time map, as that component card
was created from scratch using our API, and [React Leaflet](https://react-leaflet.js.org).
</br></br>

{% video center autoplay muted nocontrols loop
https://res.cloudinary.com/dheqbiqti/video/upload/q_50/v1561941958/Projects/StreetSmart/ss_demo.mp4
100% As data from traveling cars is published to Firestore, the map shows updates in real-time. %}

## Car Travel Simulation

To have realistic test data, and to demo to our class, I created a
script for generating car travel data. It simulates driving locations and speeds
along a given route of coordinates based on adjustable driver tendencies, and
uploads to Firebase in time accurate spacing, just like our in-car sensor.
</br></br>
It was great to implement async javascript, but going forward I really want
to use proper modules now that I understand how they work in ES6 a bit better.
Too many functions in one file. This script was created overnight because we were
having so many difficulties getting accurate location data for our sensor, so I'm
proud of what I was able to do in that amount of time.
</br></br>

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
let Battery = Math.floor(Math.random() \* 60) + 40 // Will decay slowly

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
var dLat = deg2rad(lat2 - lat1); // deg2rad below
var dLon = deg2rad(lon2 - lon1);
var a =
Math.sin(dLat / 2) _ Math.sin(dLat / 2) +
Math.cos(deg2rad(lat1)) _ Math.cos(deg2rad(lat2)) _
Math.sin(dLon / 2) _ Math.sin(dLon / 2)
;
var c = 2 _ Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
var d = R _ c; // Distance in km
return d;
}

function deg2rad(deg) {
return deg \* (Math.PI / 180)
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
console.log(Time.format('lll') + ": Starting 🚗 @ "

- String(carGeoPoint.latitude) + ", " + String(carGeoPoint.longitude) +
  " Driver Style: " + DriveStyle)
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  // Begin adding data in simulated time (if delayMode, otherwise all at once)
  let index = 0
  for (const destPoint of checkpoints){
  //checkpoints.forEach((destPoint, index) => {
  if (index != 0) {
  // Variance in speed
  let carMPH = speedLimits[index - 1] + (DriveStyle _ Math.floor(Math.random() _ 10) + 1)
  if (DriveStyle == 0) {
  carMPH--
  }
  let carMPS = carMPH / 3600
  let carMPSample = carMPS _ sampleRate
  let milesBetween = cordDistKm(destPoint.latitude, destPoint.longitude,
  carGeoPoint.latitude, carGeoPoint.longitude) _ .6214; //KM to Miles
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
  sleep(1000 _ sampleRate / timeFactor);
  }
  subPointsIndex++
  Time = Time.add(sampleRate, 'seconds')
  console.log(Time.format('lll') + ": 🚗 located @ " +
  String(Math.round(carGeoPoint.latitude _ 1000000.0) / 1000000.0) +
  ", " + String(Math.round(carGeoPoint.longitude _ 1000000.0) / 1000000.0) + "\ngoing " + carMPH + "MPH in a " + speedLimits[index - 1] + "MPH Zone"
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
  sleep(1000 _ sampleRate / timeFactor);
  }
  Time = Time.add(sampleRate, 'seconds')
  console.log(Time.format('lll') + ": 🚗 reached point " + String(index+1) + "! " + checkpointStrings[index]);
  }
  index++
  }
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  console.log("End of trip");
  console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
  }

// Call the main sim async function
sim()

/_ db.collection("bentest").doc().set({
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
}) _/
<!-- endtab -->
{% endtabbed_codeblock %}

</div>

### In-Car Sensor + Alerts

Our Raspberry Pi ran a script to collect GPS location and utilized the Overpass
API to fetch the speed limit of that location, pair them, and publish them to our
database. Additionally, if an instance of speeding was detected, the Raspberry Pi
lit up an LED to alert the driver. </br></br>

{% video center autoplay muted nocontrols loop
https://res.cloudinary.com/dheqbiqti/video/upload/v1561400335/Projects/StreetSmart/speedled.mp4
50% Speeding by exceeding 60MPH being detected %}

### Awards

Our presentation and live demo earned us one of 3 spots for IoT in "Modern Marvels",
the university's showcase for top projects completed throughout the year.
</br></br>

{% image center
https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive/v1561942238/Projects/StreetSmart/team.webp
80% The team (myself not pictured) presenting our demo %}

### Improvements

- Next time I build an API, I'd like to try GraphQL. Our client fetched much
  more data then was necessary, and did client-side filtering that could have been
  accomplished in the API layer.
- We only mocked the user account and lacked any sort of authentication on both the
  database or front end. Integrating tools like OAuth is
  something I need to get a handle on soon.

## [Live Demo](http://street-smart.xyz) • [Showcase Poster](https://res.cloudinary.com/dheqbiqti/image/upload/v1561400335/Projects/StreetSmart/SSposter.pdf) • [GitHub](https://github.com/bmitchinson/streetsmart)
