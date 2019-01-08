---
title: Video tag Tests
date: 2011-0-0 00:00:00
tags:
keywords:
comments: false
autoThumbnailImage: false
coverMeta: out
coverSize: partial
---

A page purely to demo my video tag pull request
</br>
<!-- More -->
The video tag supports any mp4 video, as it's widely accepted by modern web
standards:</br></br>

{% image center https://res.cloudinary.com/dheqbiqti/image/upload/v1546983072/Screenshots/mp4compat.png %}

# Just video

{% video https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 %}

# No caption

# left right center

# Fig-20,25,33,50,75,100

# clear

# Autoplay on + off

# Controls

# Poster (Thumbnail)
Combined w autoplay off for demo?

# Height on? No percentage?
isn't percentage working right now? Is that due to container sizing?

# Width? No percentage?
isn't percentage working right now? Is that due to container sizing?

# loop

# muted

# autoplay non muted? What happens?

# loop + controls + sizing + poster -> no auto

# Documentation updated 👍
Includes notes that autoplay can only be on only if muted
copied table + format from image heading
Code blocks of all examples next to their video counterpart on the demo page