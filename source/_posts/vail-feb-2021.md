---
title: "Vail Systems - Feb 2021"
date: 2021-03-06 00:00:00
tags:
  - Vail
comments: false
thumbnailImage: "https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,r_50:5/v1615085603/Projects/Vail/vail_Feb21.jpg"
---

What I've been doing at [Vail Systems](https://www.vailsys.com/) for the month of February.

<!-- excerpt -->

_Cross posted on [dev.to](https://dev.to/bmitchinson/vail-systems-feb-2021-4kbl)_

What I've been doing at [Vail Systems](https://www.vailsys.com/) for the month of February.

## What I've worked on

- Custom theming: Account specific client theming in Material UI
- Custom terminology in AWS Translate
- Using Kibana to create dashboards with KQL to analyze API performance.
- Using Nock with Cucumber to programmatically mock external calls
- Started learning about the advantages of Snowpack and ESModules

## What I've Learned (Technical)

#### Mocking external API calls

Nock is a great library, but I'm looking forward to
[MSW](https://github.com/mswjs/msw) growing. I'd be curious how they handle node
API mocking + recording. I don't think Nock is as full of a replacement of VCR
for ruby.

## What I've Learned (Personal)

#### Break down problems into a confined example

We had an issue using decorators with nestjs modules, and in order to ask for
help, I made a smaller reproducible example of the issue. This ended up being a
sort of "rubber duck", and helped me arrive at the solution myself. I'd like
to continue approaching problems with this style.

#### Company Technology Channels

Being distributed, it's hard to have conversations about specific
software and tooling when I'm not sure who to talk to. I'd like to help
implement specific channels dedicated to specific tools. a "cypress" channel
and a "rust" channel, anything anyone can think of. This way devs can pick and
choose what to be a part of, and share knowledge across teams. I suggested this
and will be following up to see if there's anything I can do to help.

## What I'd like to improve (Technical)

#### sorry-cypress

I want to investigate using `sorry-cypress` for better metrics +
parallelization in our k8s setup. The developer experience of cypress is
fantastic, but our build time is reaching an average of 30 minutes 😔

#### Stop reading + start trying

Often I'm reading about new tools / figuring out how something could work,
but not as often do I add the dependency to a throwaway branch and experiment.
I'd feel a lot more confident breaking down new technical challenges if I
had previously experimented more.

## What I'd like to improve (Personal)

#### Write as you learn

I hoped to put up two smaller blog posts about some TS examples I found
interesting and wanted to share, but I can't remember half of what I wanted to
note down now that it's been a few weeks. Going forward I'd like to a small
technical post as I'm finishing it up.

#### Pace yourself (Pomodoro)

I find myself working intensely for hours, and feeling burnt out toward the end
of the day. I'd like to work on restricting myself to blocks of time so that
I still have the energy to take on new things at the end of the day.

## Resources found / Articles I liked:

- [https://www.snowpack.dev/tutorials/react](https://www.snowpack.dev/tutorials/react)
- [https://twitter.com/dan_abramov/status/1368277175598735366?s=20](https://twitter.com/dan_abramov/status/1368277175598735366?s=20)

## Posts of Mine

#### Accessing private values of a class within a method decorator

https://repl.it/@bmitchinson/decorator#index.ts
