---
title: How I Made This Site
date: 2019-5-30 
tags: 
- Open Source
- Web Dev
keywords:
- Website
- Github
- Open Source
- Hexo
- Tranquilpeak
- LouisBarranqueiro
- Theme
- Custom
- Portfolio
comments: true 
coverImage:
autoThumbnailImage: false
thumbnailImage: https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,r_50:5/v1559264812/Projects/BenMitchinson.com/WebsiteBanner.jpg
coverMeta: out
coverSize: partial
---

I set out to use what I learned about javascript from my internship at 
[ISE](http://blog.iseinc.biz/meet-our-team-2018-summer-interns)
to create a responsive blog style portfolio using a static site generator. 
The goal was to host it for free on github pages alongside its source code, 
to allow for easy and immediate editing from anywhere, and to contribute to 
open source projects along the way.
</br>
<!-- excerpt -->
I set out to use what I learned about javascript from my internship at 
[ISE](http://blog.iseinc.biz/meet-our-team-2018-summer-interns)
to create a responsive blog style portfolio using a static site generator. 
The goal was to host it for free on github pages alongside its source code, 
to allow for easy and immediate editing from anywhere, and to contribute to 
open source projects along the way.

### My Initial Approach:
Before beginning my internship, I created a small site using only vanilla HTML +
CSS. Funny to look back at now and consider how many unnecessary and 
completely inaccessible animations I chose to include.
</br></br>
{% video center autoplay muted nocontrols loop 
https://res.cloudinary.com/dheqbiqti/video/upload/v1559357737/Projects/BenMitchinson.com/PCjkR5917p0Z41qbk5toTyQrMMaFf8kSELyErCau.mp4 "First attempt - Summer 2017"%}

With no version control and no templates, sure hosting was incredibly simple
([I used to host out of my personal dropbox account](https://droppages.com/)),
but nothing about the design allowed me to change content quickly, and the pages
were completely unresponsive on anything but one zoom level of desktop. 

### Fast Forward:
One year later, with a solid understanding of git and various JS frameworks
and a better eye for design, I began working on a site based on
Louis Barranqueiro's excellent hexo theme 
[Tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak).

Now the site is hosted alongside it's source code on [github](https://github.com/bmitchinson/benmitchinson.com) 
in an npm package.
</br></br>
{% image center https://res.cloudinary.com/dheqbiqti/image/upload/v1559279970/Projects/BenMitchinson.com/Audit.jpg "My lighthouse score - May 2019" %}

### Open Source Contributions:
[My implementation of video tags](/Video-Tag-Demo) 
took the longest to complete, and hopefully should be merged in soon. 
Identifying a valuable improvement, iterating on the idea upon review, writing 
up documentation, and providing [a demo page for the feature](/Video-Tag-Demo)
Took a good amount of time outside of classes, but I'm looking forward to 
contributing more now that I have some experience.
</br>
Others:
* [Accessibility improvements](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/pull/548)
* [User Interaction](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/pull/547)
* [Icon improvements](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/pull/542)
and [Documentation updates](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak/pull/543)

### What I Learned:
* Using JS to write HTML taught me more than writing it plainly
* Engaging with other contributors results in me pushing myself to learn more
* The beginning fundamentals of a11y
* CDN best practices
* Faster photoshop workflows 
* How to manage traffic and implement trackers on google analytics 
* Device responsive styling
* Have patience with those reviewing your contributions. They're doing it solely
out of kindness and most likely have a full-time job.

### What's Next?
I'm looking forward to being able to pick up some issues on a larger project now
that I'm quite a bit more comfortable. Hopefully, I can find something interesting
to possibly maintain, outside of work + classwork.
