## [Mitchinson.dev](https://mitchinson.dev)

![](https://i.imgur.com/9Ac5NYS.png)

Built using [my custom fork](https://github.com/bmitchinson/hexo-theme-tranquilpeak) of Louis Barranqueiro's hexo theme [tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak), using static site engine [Hexo](https://hexo.io).

### Organization
More details to come soon, including a writeup on how I developed and organized the site. 

All files on the [master branch](https://github.com/bmitchinson/Mitchinson.dev) are used as source files for Hexo to be able to build my website. The build is then deployed on the [gh-pages branch](https://github.com/bmitchinson/Mitchinson.dev/tree/gh-pages).

[My fork of tranquilpeak](https://github.com/bmitchinson/hexo-theme-tranquilpeak) is used as the theme of the blog in a separate repo located under `themes/bmitchinson_tranquilpeak`.

### Running the site locally
This is very easy to do, and a great way to learn hexo and it's common theme structure. [More details on the site here](https://Mitchinson.dev/About-This-Site/)

(From the master branch) Run:
* `npm i` @ root dir
* `npm i` @ themes/bmitchinson_tranquilpeak
* `npm start` @ themes/bmitchinson_tranquilpeak (to build the theme)
* `npm start` @ root dir (to generate the site and serve it locally)

This gives you a version of the site at `localhost:4000` for tinkering and testing 👍
