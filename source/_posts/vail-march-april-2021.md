---
title: "Vail Systems March + April 2021"
date: 2021-05-05 9:34:00
tags:
  - Vail
comments: false
thumbnailImage: "https://res.cloudinary.com/dheqbiqti/image/upload/fl_progressive,r_50:5/v1620230407/Projects/Vail/vailThumbnailMarchApril.png"
---

What I've been doing at [Vail Systems](https://www.vailsys.com/) for March + April.

<!-- excerpt -->

_Cross posted on [dev.to](https://dev.to/bmitchinson/vail-systems-feb-2021-4kbl)_

What I've been doing at [Vail Systems](https://www.vailsys.com/) for March + April.

Writing for both March and April in this post, so it's a bit longer. I spent much
of the last month getting ready for a new Software Engineering position at
Pillar Technologies in Des Monies, as well as working through the loss of a
family member. My start date at Pillar is May 19th, and I can't wait to begin.

Currently I'm taking time off to relax + travel, as well as to do some
contracting for a friend's business.

## What I've worked on (Technical)

- Using `ffmpeg-fluent` and ffmpeg to convert user-uploaded audio to universal
  formats. How to convert and manage codecs and conversion
- Updating our application to support uploaded audio in addition to in-app
  generated audio. (Database -> GraphQL -> Client)
- Using PlantUML as a way to communicate abstract ideas concretely, and iterate
  on design in a traditional code-based merge request process
- Learning how to negotiate salaries, and how to respectfully exit a company
- Presented on how to organize GraphQL schema inside a NestJS based application

#### Let GraphQL abstract the Database

Often my impulse is to have an app's GraphQL schema mirror the database 1:1.
Recently, we added a new database table, and it made much more sense to instead
abstract under an existing GraphQL type.

It allowed for flexibility since the resolver now would pull data from more than
one database source. It helped me realize that unless you're willing to make
constant changes to your schema each time the database is altered, having your
schema align 1:1 with your database makes you miss out on the abstraction
opportunities offered by GraphQL.

I think we could have promoted this idea by only resolving the fields that were
in use on the client. We had resolvers that resolved every field of a table,
even if it wasn't in use client-side. If instead, we only added fields when the
need on client arose, we'd have a much slimmer + more readable GraphQL schema,
and it'd be less tempting to make every database field available by default.

#### Using type predicates

Type Predicates are cool! Our resolver was handling two possible interfaces, and
it was nice to find a type-safe way to handle either interface. Earlier in my
career I would have resorted to `any` so it's exciting to start reaching
further to see how TypeScript can help. I'd like to take an advanced TypeScript
course sometime soon.

[Using Type Predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)

#### Sometimes you can break tests

One sprint I was working on a ticket, and when I finished the AC, some existing
tests broke. These broke because the ticket was part of a large new
feature, and without the remaining tickets completed, tests were going to stay
broken.

I assumed "don't let tests break", and took on two more tickets simultaneously,
in an effort to implement all of the features necessary to make tests green.

In retrospect, I don't think this was the way to go. In the event you're merging
to a feature branch and not mainline code, I think it might be okay to break
tests.

If it's documented (`// will be green in TTPSP-189`), I think letting them fail
will help code review stay small + keep the team moving faster. The expectation
remains that these tests will be green before reaching mainline code, so if this
happens again, I'd like to bring it up to my team to see what they think of the
approach.

## What I've Learned (Personal)

#### Working from home -> move around the house

While I like my desk setup, I find I'm most productive when I move around the
house. Room, living room couch, kitchen table. Moving around has helped my brain
stay a lot more focused.

#### Why is the house a mess

After a day of work, I'd look at the kitchen or my room and think "why is it
such a mess here", and start feeling pretty down. I was home all day, I really
didn't have time to clean? I was home all day, yet there's nothing ready for
dinner?

I was at work! Of course the house is a mess, I haven't been "home", I've been
at "work". Reminding myself of that line has helped me feel better when I end
work for the day. Still looking forward to being at an office soon to have a
physical representation of that line.

#### Realistic estimates, not best case

It can be tempting for me to give "best case estimates" during standups as a way
to push myself to get something done as quickly as possible. I'd like to find
other ways to motivate myself that don't result in flakey estimations from my
team's perspective.

Going forward I'd like to practice giving more likely estimates and working
to complete them a bit sooner than originally expected, instead of finishing
right down to the wire or late.

## What I'd like to improve

#### Creating tickets for experimentation efforts

I'm privileged to be on a team where we're able to take time and experiment
with new ideas. I've found that I sometimes give myself too many things to
juggle: improving a Jenkins step, adding a new cypress improvement,
experimenting with a new build tool. It became difficult to track all of these
initiatives. I'd like to ticket ideas for refactors / features and make sure
to note why I find them valuable. Then it'd be a bit more motivating to return
to existing ideas during free time, instead of endlessly creating new ideas,
and never completing any.

#### 26 files changed, pump the breaks.

That's an indication that you might need to slow down and reassess your design.

## Resources found / Articles I liked:

- [React Bundles and Code Splitting - Emma Goto](https://www.emgoto.com/react-bundles-and-code-splitting/)
- [Using type predicates](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
- [Capable + Fast UML](https://www.planttext.com/)
