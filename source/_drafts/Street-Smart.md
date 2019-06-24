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
coverImage: # (use transform (/upload/fl_progressive/v_149...) ) @ 2500 x 1512
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
<!-- More -->

# [Live Demo](street-smart.xyz) • [Showcase Poster](https://res.cloudinary.com/dheqbiqti/image/upload/v1561400335/Projects/StreetSmart/SSposter.pdf) • [GitHub](https://github.com/bmitchinson/streetsmart)


Might take a minute to spin up because i'm on the free tier

### Got selected for showcase (link to modern?)

### Script details
A bit about the math to simulate times and events. Embedded code. Would be nice to
clean up since I was forced to write this script overnight in case our sensor didn't function.

### Improvements for the front end
* GraphQL for a proper resource managed paginated API, instead of random express routes that fetch + deliver much more data then necessary 
* Bundling / proper package management. Really want to learn about that soon.
* Authentication is one of my biggest weaknesses, we faked it 

### Credit template

Pic of team in gallery?
Snap of it first working


- links -
side by side video + terminal:
https://res.cloudinary.com/dheqbiqti/video/upload/v1561338591/Projects/StreetSmart/SS_Demo.mp4

firestore:
https://res.cloudinary.com/dheqbiqti/video/upload/v1561400335/Projects/StreetSmart/firestore.mp4

speedled:
https://res.cloudinary.com/dheqbiqti/video/upload/v1561400335/Projects/StreetSmart/speedled.mp4

