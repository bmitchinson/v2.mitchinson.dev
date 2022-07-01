## [Mitchinson.dev](https://mitchinson.dev)

[![Lighthouse Accessibility Badge](./badges/lighthouse_accessibility.svg)](https://github.com/bmitchinson/mitchinson.dev)
[![Lighthouse Best Practices Badge](./badges/lighthouse_best-practices.svg)](https://github.com/bmitchinson/mitchinson.dev)
[![Lighthouse Performance Badge](./badges/lighthouse_performance.svg)](https://github.com/bmitchinson/mitchinson.dev)
[![Lighthouse SEO Badge](./badges/lighthouse_seo.svg)](https://github.com/bmitchinson/mitchinson.dev)

---

![](https://i.imgur.com/9Ac5NYS.png)

---

Built using [my fork](https://github.com/bmitchinson/hexo-theme-tranquilpeak) of Louis Barranqueiro's hexo theme [tranquilpeak](https://github.com/LouisBarranqueiro/hexo-theme-tranquilpeak), using static site engine [Hexo](https://hexo.io).

### Organization

All files on the [main branch](https://github.com/bmitchinson/Mitchinson.dev) are used as source files for Hexo to be able to build my website. The build is then deployed on the [gh-pages branch](https://github.com/bmitchinson/Mitchinson.dev/tree/gh-pages).

[My fork of tranquilpeak](https://github.com/bmitchinson/hexo-theme-tranquilpeak) is used as the theme of the blog in a separate repo located under `themes/bmitchinson_tranquilpeak`.

### Running the site locally

It's easy to do, and a great way to learn hexo and it's common theme structure.

Make sure to clone using `git clone --recurse-submodules https://github.com/bmitchinson/Mitchinson.dev.git` in order to
simultaneously clone [my fork](https://github.com/bmitchinson/hexo-theme-tranquilpeak) of the tranquilpeak theme, as the markdown relies on it.

(From the main branch) Run:

- `npm i` @ root dir
- `npm i` @ themes/bmitchinson_tranquilpeak
- `npm start` @ themes/bmitchinson_tranquilpeak (to build the theme)
- `npm start` @ root dir (to generate the site and serve it locally)

This gives you a version of the site at `localhost:4000` for tinkering 👍
