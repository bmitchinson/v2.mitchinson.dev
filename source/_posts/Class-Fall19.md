---
title: 'Classes: Fall 2019'
date: 2019-12-25 00:00:00
tags:
  - React
  - Preact
  - Rails
  - School
  - Firebase
  - Live
comments: true
coverImage: https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive/v1577661158/Projects/Fall19Summary/fall_apps_cover.jpg
autoThumbnailImage: false
thumbnailImage: https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,r_50:5/v1577661157/Projects/Fall19Summary/fall_apps_thumbnail.jpg
coverMeta: out
coverSize: partial
gallery:
---
Quick highlight of three web apps I developed this semester using React, [Preact](https://preactjs.com/), and Ruby on Rails.
</br>
<!-- more -->

## Classroom • React • [GitHub](https://github.com/bmitchinson/CS5800-Team9)
[Jacob](https://github.com/jacobwatters), [Greg](https://github.com/SS-GregMich), and I worked on a three-person agile team to develop a web app for managing course sections, class documents, submission grading, and user management.
</br></br>
- Material UI components
- React context providers for theming.
- Entity Framework Core and Dotnet on the backend.

Entity Framework Core was great for learning JWT Token distribution, and how to lock down endpoints to user role (Teacher, Student, ...etc).
</br></br>
{% video center autoplay muted nocontrols loop 
https://res.cloudinary.com/dheqbiqti/video/upload/r_10,q_60,b_white/v1578015318/Projects/Fall19Summary/course_page_sort.mp4 80% Editing course details as an admin - made easy with material-ui table%}
</br>
{% video center autoplay muted nocontrols loop 
https://res.cloudinary.com/dheqbiqti/video/upload/r_10,q_60,b_white/v1578016334/Projects/Fall19Summary/grading.mp4 100% Grading student submissions as an instructor %}

## Deals on Rails • Ruby on Rails • [Demo](https://selt2019-g010-final.herokuapp.com/) 
*You might notice a delay in fetching the demo, as the free tier of heroku needs a moment to reboot the application*

For Software Engineering Languages and Tools, [Colton](https://github.com/cjmiller1622), [Stephen](https://github.com/ssiemonsma), [Olivia](https://github.com/osandvold302), [Chase](https://github.com/chasejohnson3), and myself worked on a 5 person agile team to build a directory for
local restaurant deals. It works with a voting system similar to Reddit for
customers, and establishments can sign up to post their own deals.
</br></br>
{% video center autoplay muted nocontrols loop 
https://res.cloudinary.com/dheqbiqti/video/upload/r_10,q_40,b_white,w_2150,h_3000,x_600,y_0,c_crop/v1578018134/Projects/Fall19Summary/daily.mp4 80% Daily Cal %}

It was great to learn how to use facebook as for external sign-on and implement
JS in the context of a rails app as well.

The major lesson was learning to **build functionality first, and style second**.
I've got a habit of tweaking UI and design instead of fully implementing a 
feature, and doing the opposite let us deliver on time.
</br></br>

{% image center https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive/v1578018927/Projects/Fall19Summary/testing.jpg 80% Coverage report with testing completed using cucumber and rspec %}

Hosting a live prototype at the end of every 2-week sprint made deploying our final
product much easier.
</br></br>

{% image center https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive/v1578363584/Projects/Fall19Summary/iteration.jpg 90% Sprint 1 vs Sprint 3 %}

## Real-Time Temperature Graph • Preact • [GitHub](https://github.com/bmitchinson/ece4880/tree/master/Lab1/frontend)
A semester goal of mine was to find an outlet for using preact and typescript,
so I included them in our online-enabled thermostat for senior design.
</br></br>
The site displays data from Firebase, populated by a Raspberry Pi with a 
temperature sensor. Things like the display on the Pi needed to be 
controlled from the frontend, so firebase was used for two way communication.
</br></br>
{% video center autoplay muted nocontrols loop 
https://res.cloudinary.com/dheqbiqti/video/upload/r_10,q_60,b_white/v1578528449/Projects/Fall19Summary/graph_switch_crop.mp4 80% Reflecting hardware changes through firebase realtime database %}

We setup the Pi inside a small tupperware container with a lipstick phone charger.
All client-side code was written in a [multiprocess python script](https://github.com/bmitchinson/ece4880/blob/master/Lab1/pi/main.py), and it sent text
messages through Twilio. We were able to solder the sensor to a headphone
jack, and use a 3.5mm port to keep the device modular.
</br></br>
{% image center https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,q_50/v1578527039/Projects/Fall19Summary/device.jpg 100% The device %}
</br>
{% image center https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,q_50/v1578527182/Projects/Fall19Summary/guts.jpg 60% The guts 🤮%}

For building out the graph, I used [preact-charts](https://github.com/influx6/preact-charts). It's built on top of d3, and tinkering with the underlying
d3 code made for a pretty terrible experience. Missed having the
options of react components to choose from, and this single-view site wasn't
a great way to benchmark preact.
</br></br>
{% video center autoplay muted nocontrols loop 
https://res.cloudinary.com/dheqbiqti/video/upload/r_10,q_40,b_white/v1578530394/Projects/Fall19Summary/graph_demo.mp4 100% Displaying measured temperatures %}

## Looking Back and Future Goals
Would have liked to include:
- Integration tests -> automated with github actions.
  - Working on three "agile" teams at once makes using agile difficult. Testing then either suffered or was non-existent.
- Remote hosting of Entity Framework Core + SQL
  - Never found a simple solution.
  - Having more experience with docker now, I could use that to spin something up quickly.
- Create a realistic benchmark of preact vs react to make more educated decisions
on our upcoming CHI project. 
  - We'll be hosting a web app to be viewed on mobile devices in a local area network inside a medical tent.