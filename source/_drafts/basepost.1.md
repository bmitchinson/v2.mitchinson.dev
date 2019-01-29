---
title: Spotilight
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

I'm building a lightweight showcase for spotify playlists in attempt to
better share libraries across streaming services. Built open source without 
using JS frameworks in an attempt to learn fundamentals the right way.

# [GitHub](https://github.com/bmitchinson/Spotilight)

</br></br>
<!-- More -->

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
* Follow me as a user right from the site? Both Apple Music and Spotify? Soundcloud? Youtube? Tidal? Amazon Music?

# Questions:
* Playlist Folder Support?
* How to integrate the Spotify API? 
* Pagination of new pages on scroll 

# Steps:
* Create a site, hosted on benmitchinson.com, outside of the hexo index
* Explore how to develop that site and serve/(just open?) that site locally.
* Draft up all page interaction + design
* Build small main page with demo images + playlist links
* Test view naviagation, all on one page, with non url routing. (Refreshing brings you back to landing)

# Helpful Links

### SPA With Vanilla JS
* SPA With Vanilla JS: https://medium.com/frontend-fun/js-vanilla-script-spa-1b29b43ea475
* Bryan Manuele: https://medium.com/@bryanmanuele/how-i-implemented-my-own-spa-routing-system-in-vanilla-js-49942e3c4573
* Rishav Sharan: https://dev.to/rishavs/making-a-single-page-app-in-ye-good-olde-js-es6-3eng
* Robinsr: https://robinsr.github.io/blog/post/vanilla-es6-spa-1
* Authorization Guide
https://developer.spotify.com/documentation/general/guides/authorization-guide/

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

######## Rate Limiting:
To reduce the amount of requests, use endpoints that fetch multiple entities in one request. For example: If you often request single tracks, albums, or artists, use endpoints such as Get Several Tracks, Get Several Albums or Get Several Artists, instead.

Note: If Web API returns status code 429, it means that you have sent too many requests. When this happens, check the Retry-After header, where you will see a number displayed. This is the number of seconds that you need to wait, before you try your request again.