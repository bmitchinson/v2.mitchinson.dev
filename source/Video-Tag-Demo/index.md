---
title: Video Tag Demo
date: 2019-1-8 22:30:00
tags:
keywords:
comments: false
autoThumbnailImage: false
coverMeta: out
coverSize: partial
---

A page to demo my potential video tag pull request to the [tranquilpeak theme](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/). 
This is meant for internal
demo-ing, if you've found this article while browsing my site,
go ahead and just move on to the next one 😅 apologies!
</br>
<!-- More -->
# Documentation for the tag to be updated on [my fork](https://github.com/bmitchinson/hexo-theme-tranquilpeak/blob/videotag/DOCUMENTATION.md)
# [Current open pull request](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/pull/527)

# The Video Tag
The video tag supports any mp4 video, as it's widely accepted by modern web
standards over other video formats. [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
</br>

For images, you used the scss figure file, but to be honest, I wasn't sure how to do that. Would happy to either take suggestions for implementation, or to let someone else implement that portion properlly.

# Just a bland video
code:
{-% video https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 a sample caption %}
</br></br>

{% video https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 a sample caption %}

# 'nocaption'
code:
{-% video nocaption https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 This won't show %}
</br></br>
{% video nocaption https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 This won't show %}

# Percentage Width: '60%'
Height will scale accordingly
</br></br>
code:
{-% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 
60% Percent Width of 60 %}
</br></br>
{% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 
60% Percent Width of 60 %}

# Alignment: 'left', 'right', 'center' (Default: left)
Can't get captions to align. Not sure how it works for 
images? Tried to check but it was kinda confusing.
</br>

code:
{-% video [left/center/right] https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% left caption %}
</br></br>
{% video left https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% left caption%}

{% video center  https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% center caption %}

{% video right https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% right caption %}

# Extra div: 'clear'
don't know what this really does haha.
Tried to reference [this post](https://stackoverflow.com/questions/10184934/why-div-class-clear-div-is-used-after-multiple-floating-divs-in-a-containe) but, either way it works as mentioned in the image.js.
</br></br>
code:
{-% video center clear https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% Clear Caption %}
</br></br>
{% video center clear https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% Clear Caption %}

# 'autoplay' (with 'mute') and 'loop'
Video will autoplay **as long as it's muted**. This is a web standard decided by
browsers in order to avoid annoying users.</br></br>
code:
{-% video center autoplay muted loop https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 'autoplay' with 'muted' %}
</br></br>
{% video center autoplay muted loop https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 'autoplay' with 'muted' %}

# Hide controls: 'nocontrols'
Right click on the video for controls. Useful when using
with auto play and loop. Similar to using a gif within an image tag, except much more web friendly and faster.
This purpose is the reason why I made the tag.
</br></br>
code:
{-% video center nocontrols autoplay muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 
Controls off %}
</br></br>
{% video center nocontrols autoplay muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 
Controls off %}

# Poster (Thumbnail)
I think image is (..., [Thumbnail], [Picture], ...), and this is (..., [Video], [Poster], ...) Might want
to fix that here to match image habit of entry to avoid confusion?</br></br>
code:
{-% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4
https://peach.blender.org/wp-content/uploads/title_anouncement.jpg 100% 60 
Poster (Thumbnail) Enabled %}
</br></br>
{% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4
https://peach.blender.org/wp-content/uploads/title_anouncement.jpg 100% 60 
Poster (Thumbnail) Enabled %}