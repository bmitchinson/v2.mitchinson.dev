---
title: Developing Spotilight
date: 2010-0-0 00:00:00
tags:
- Spotilight
- Music
- Web Dev
keywords: 
- JavaScript
- Spotilight
- Project
- Website
- FrontEnd
comments: true
coverImage: (use transform (/upload/fl_progressive/v_149...) ) @ 2500 x 1512
autoThumbnailImage: false
thumbailImage: 1500 x 400
coverMeta: out
coverSize: partial
gallery:
---

In an attempt to learn fundamentals I'm building an open source 
"[Vanilla](http://vanilla-js.com/)" JavaScript SPA to show off your spotify 
playlists.

# [GitHub](https://github.com/bmitchinson/Spotilight) ● [Live Demo](/Spotilight)

</br></br>
<!-- More -->

# No Frameworks
Last summer, I spent my internship at ISE working on a single page 
application in React. The experience was invaluable, but I had never worked in 
web before, so starting from a UI framework and working backwards presented 
plenty of challenges. Decided to tackle this idea using only JS in order to
get a better grasp on things like routing, proper styling, simple bundling,
and accessibility.

# Hosting
The app is hosted on a dedicated page within my hexo blog, served with github 
pages. By creating a new hexo "page", I'm able to add separate applications to 
the site, and have it hidden from my blogs main index view. I plan on hosting 
multiple apps with this method, with a seperate writeup to detail their 
development and implementation.

# Resources

# Other's Code:
* Spinners: http://tobiasahlin.com/spinkit/
* Spotify API: https://developer.spotify.com/console/

# Hosting your own:
All website code is available [here](github.com/bmitchinson/spotilight), with
instructions on how to host your own profile. I reccomend simple hosting on
something like  [GitHub Pages](https://pages.github.com)

# Upcoming Features:
* [soundiiz](https://soundiiz.com) is easily the best way to convert playlists 
across streaming services. Their accuracy is really high and eventually they
want to offer an API, but as of now, it's not available. Until then, I don't
think converting playlists to other streaming services would really be possible :(

<!-- NOTES TO DELETE FROM POST -->

# Planned Features:
* "Spotlight Selection" for a pinned highlight of all music
*** Somehow store a backlog of all entries?
* Use of the Spotify API to pull all public playlists from a user.
*** This way, when the user updates their playlists, the site is dynamic.
*** Hopefully no scraping needed? Otherwise a daily scrape to update the site?
* Search all playlist names
* Cross Device Support
* Themed to look similar to Spotify's default page, but fast + fluid
* Development documented on benmitchinson.com
* Public analytics on your page, privately for me?

# Would be cool if:
* Apple music support, an API for converting playlists ?
*** Similar to switching between UI Dark + Light mode
* A way to host at benmitchinson.com, even tho that's currently a hexo build?
* Woah what about a "now playing" thing similar to discord's thing.
* Follow Playlists right from the SPA:
https://github.com/spotify/web-api/issues/1146
* Follow me as a user right from the site? Both Apple Music and Spotify? 
Soundcloud? Youtube? Tidal? Amazon Music?
* #playlistID -> Straight to that playlist view

# Questions:
* Playlist Folder Support?
* How to integrate the Spotify API? 
* Pagination of new pages on scroll 

# Steps:
[x] Create a site, hosted on benmitchinson.com, outside of the hexo index
[x] Explore how to develop that site and serve/(just open?) that site locally.
[x] Draft up all page interaction + design
[] Build small main page with demo images + playlist links (CSS Grid All Page View)
[] Test view naviagation, all on one page, with non url routing. (Refreshing brings you back to landing)

* Move CSS to a CDN
* Uglify to reduce size? Gulp bundling? Parcel?

# Helpful Links
* http://localhost:4000/Spotilight/
* view-source:http://localhost:4000/Spotilight/
* https://cloudinary.com/console/media_library/folders/all/Spotilight

### SPA With Vanilla JS
* SPA With VJS by Santiago Da Rosa: https://medium.com/frontend-fun/js-vanilla-script-spa-1b29b43ea475
* VJS Routing by Bryan Manuele: https://medium.com/@bryanmanuele/how-i-implemented-my-own-spa-routing-system-in-vanilla-js-49942e3c4573
* Rishav Sharan: https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng
* Robinsr: https://robinsr.github.io/blog/post/vanilla-es6-spa-1

### Random DOM stuff
* https://www.digitalocean.com/community/tutorials/how-to-make-changes-to-the-dom
* https://stackoverflow.com/questions/26986129/play-multiple-css-animations-at-the-same-time

### Spotify API
* Console (Endpoint Directory)
https://developer.spotify.com/console/
* Dev Dashboard (Client ID)
https://developer.spotify.com/dashboard/
* Am I effected by this API Change?
https://developer.spotify.com/community/news/2018/06/12/changes-to-playlist-uris/
* Web API Overview: pages 
https://developer.spotify.com/documentation/web-api/
* Reference Beta
https://developer.spotify.com/documentation/web-api/reference-beta/
* Old Reference
https://developer.spotify.com/documentation/web-api/reference/
* Web API Libraries
https://developer.spotify.com/documentation/web-api/libraries/
* Spotify Connect API https://developer.spotify.com/documentation/web-api/guides/using-connect-web-api/
* Authorization Guide
https://developer.spotify.com/documentation/general/guides/authorization-guide/

######## Rate Limiting:
To reduce the amount of requests, use endpoints that fetch multiple entities in one request. For example: If you often request single tracks, albums, or artists, use endpoints such as Get Several Tracks, Get Several Albums or Get Several Artists, instead.

Note: If Web API returns status code 429, it means that you have sent too many requests. When this happens, check the Retry-After header, where you will see a number displayed. This is the number of seconds that you need to wait, before you try your request again.