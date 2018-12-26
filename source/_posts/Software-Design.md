---
title: Software Design (Fall 18)
date: 2018-12-16 12:00:00
tags:
- School
- Java
keywords:
- School
- Java
comments: false
coverImage: https://res.cloudinary.com/dheqbiqti/image/upload/v1545175002/Projects/SWD/SWD.jpg
coverMeta: out
thumbnailImage: none
thumbnailImagePosition: none
coverSize: partial
---
This semester I completed our project based Java course "Software Design" and learned
a <u>ton</u>. Over the course of the semester, we were given a grid of assignments
for completion, and I thought I'd post some of the highlights. I completed 13 short
programs that covered topics like GUI using Swing, Multithreading, Networking, and 
entry level database work.

<!-- more -->

# SneakerHead

Our final project was to create a marketplace client where buyers and sellers
could create accounts and post items. It was completed over the course of 72
hours in a hackathon style weekend, and we ended up being selected as one of the
top four groups, and demoed our solution to peers.</br></br>

<video autoplay loop muted>
<source src="https://res.cloudinary.com/dheqbiqti/video/upload/v1545801850/Projects/SWD/sneakerhead_one.mp4"
type="video/mp4">
<p>Your browser doesn't support HTML5 video :/</p>
</video>


{% image center  https://res.cloudinary.com/dheqbiqti/video/upload/v1545801850/Projects/SWD/sneakerhead_one.mp4 "70%" 
"The main list of inventory availible to the user" %}
</br>
{% image center  https://res.cloudinary.com/dheqbiqti/image/upload/v1545513251/Projects/SWD/sold.gif 
"85%" "Sold!" %}

I had used SQLite previously for a hackathon project, but building a true cross-relational
database was a great experience. We didn't have much time to implement features
around that part of our table structure, but I feel confident working with databases
headed into future projects.

# Blackjack

The rest of the assignments I completed on my own in preperation of our interview
exams. Blackjack took me the longest, but was a great way to learn threading
and networking for the first time. Although it turned out to work pretty solidly, 
it really opened my eyes to all I still need to learn for managing proper 
cross network client connections. Also learned how to do basic threading and 
conditional locks.</br></br>

{% image center  https://res.cloudinary.com/dheqbiqti/image/upload/v1545785740/Projects/SWD/blackjack.gif 
"100%" "A sample round of cross client blackjack" %}

### Image Rotator
Using Graphics2D objects with AffineTransform objects applied on a timer thread.
</br></br>
{% image center  https://res.cloudinary.com/dheqbiqti/image/upload/v1545786647/Projects/SWD/rotate.gif 
"100%" "Triggering a timer thread with event handling" %}

### Bouncing Ball
Kicking off new runnables with event handling
</br></br>
{% image center  https://res.cloudinary.com/dheqbiqti/image/upload/v1545786911/Projects/SWD/bouncing.gif 
"80%" "Event processing to kickoff new runnables in a thread" %}

<!-- TODO:
Should be good without a thumbnail preview right?
Lighthouse? -> Swap Gifs to videos?
Check mobile view once live
-->