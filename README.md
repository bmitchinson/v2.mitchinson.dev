## [BenMitchinson.com](https://benmitchinson.com)

![](https://i.imgur.com/9Ac5NYS.png)

Built using [my custom fork](https://github.com/bmitchinson/hexo-theme-tranquilpeak) of Louis Barranqueiro's hexo theme [tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak), using static site engine [Hexo](https://hexo.io).

### Organization
More details to come soon, including a writeup on how I developed and organized the site. 

All files on the [master branch](https://github.com/bmitchinson/BenMitchinson.com) are used as source files for Hexo to be able to build my website. The build is then deployed on the [gh-pages branch](https://github.com/bmitchinson/BenMitchinson.com/tree/gh-pages).

[My fork of tranquilpeak]() is used as the theme of the blog in a submodule located under `themes/`.

### Running the site locally
This is very easy to do, and a great way to learn hexo and it's common theme structure. More details in a writeup on the site soon.

(From the master branch) Run :
* `npm i` @ root dir
* `npm i` @ themes/bmitchinson_tranquilpeak
* `npm start` @ themes/bmitchinson_tranquilpeak
* `npm start` @ root dir

This gives you a version of the site at `localhost:4000` for tinkering and testing 👍
