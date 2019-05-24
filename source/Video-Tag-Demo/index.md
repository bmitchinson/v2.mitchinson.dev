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
A page to demo my video tag [pull request](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/pull/527) to the [tranquilpeak theme](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/).</br>
Feature branch of my fork [here](https://github.com/bmitchinson/hexo-theme-tranquilpeak/blob/videotag)</br>
Documentation of the feature [here](https://github.com/bmitchinson/hexo-theme-tranquilpeak/blob/videotag/DOCUMENTATION.md)

<!-- More -->

# The Video Tag
The video tag supports any mp4 video, as it's widely accepted by modern web
standards over other video formats. [Mozilla Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)

All code examples have a '-' placed before the opening %. 
This should be removed when using code, and is only included
to avoid placing videos within this post.


## Just a video with a caption
{-% video https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 a sample caption %}
</br></br>

{% video https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 a sample caption %}

## 'nocaption'
{-% video nocaption https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 This won't show %}
</br></br>
{% video nocaption https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 This won't show %}

## Percentage Width: '60%'
Height will scale accordingly

{-% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 
60% Percent Width of 60 %}
</br></br>
{% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 
60% Percent Width of 60 %}

## Alignment: 'left', 'right', 'center' (Default: left)

{-% video [left/center/right] clear https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% left caption %}
</br></br>
{% video left https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% left caption%}

{% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% center caption %}

{% video right clear https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% right caption %}

## Extra div: 'clear'
Works as mentioned in the image tag + noted in documentation. 'clear' is used in the right aligned video above, so that text doesn't overflow into the side. Not using clear in a small enough and side aligned video, allows for text to wrap around video. 

{-% video center clear https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% Clear %}
</br></br>
{% video center clear https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% Clear %}

## 'autoplay' (with 'mute') and 'loop'
Video will autoplay **as long as it's muted**. This is a standard from browser vendors in order to avoid annoying users.

{-% video center autoplay muted loop https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 'autoplay' with 'muted' %}
</br></br>
{% video center autoplay muted loop https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 'autoplay' with 'muted' %}

## Hide controls: 'nocontrols'
Right click on the video for controls. Useful when using
with autoplay and loop. Similar to using a gif within an image tag, except much more [web friendly and fast](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/replace-animated-gifs-with-video/).
This purpose is the main reason for implementing the video tag.

{-% video center nocontrols autoplay loop muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 
Controls off %}
</br></br>
{% video center nocontrols autoplay loop muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 50% 
Controls off %}

## Poster (Thumbnail)

{-% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4
https://peach.blender.org/wp-content/uploads/title_anouncement.jpg 50% Poster (Thumbnail) Enabled %}

{% video center https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4
https://peach.blender.org/wp-content/uploads/title_anouncement.jpg 50% Poster (Thumbnail) Enabled %}

## Fig-20,25,... classes
Example usage of the fig-20,25... classes for automatic width. As noted in the
documentation, fig classes automatically override to float left. Use custom 
width if ever needing to adjust alignment in addition to custom size.

{-% video nocontrols fig-25 autoplay loop muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp Fig-25 Example %}

{-% video nocontrols fig-75 autoplay loop muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp Fig-75 Example %}
</br></br>
{% video nocontrols fig-25 autoplay loop muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 Fig-25 Example %}
{% video nocontrols fig-75 autoplay loop muted https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4 Fig-75 Example %}