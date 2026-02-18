---
title: "Our technical direction"
description: "Sharing the thinking behind the technical and product plans for upcoming releases."
date: 2026-02-17
categories:
- News
tags:
- mastodon
authors:
- renchap
- imani
resources:
- name: hero
  src: hero.png
draft: false
---

Hello everyone! I’m Renaud, and I’m the Technical Director at Mastodon. I’ve also been the technical lead for delivering Mastodon releases for several years now. This post is co-written with Imani, our lead product designer.

Mastodon continues to grow as more people seek alternatives to centralised social media and closed social networks. Today, we're sharing our vision for making the Fediverse more accessible, diverse, and empowering for everyone—from first-time users to established creators.

At its core, Mastodon remains a microblogging, or short form text app. We’re building an app that enables anyone to connect with their friends, and share their thoughts and creativity. We are part of an ecosystem of interconnected social apps known as the Fediverse - built on common standards and protocols, a space where you can choose the apps and communities that are the right fit for how you want to express yourself, and participate how and where you are most comfortable.

Over the past 18 months, we’ve focused on growing our core development team and improving our processes to set us up for this phase of the project. We’ve gone from having one or two full-stack developers, to a broader team with expertise and experience across backend, web, and mobile apps, working with a dedicated designer who helps us to think deeply about how people encounter and use the social web.

You’ve seen us increase the rate of updates over the past eighteen months - three major new versions ([4.3](https://blog.joinmastodon.org/2024/10/mastodon-4.3/), [4.4](https://blog.joinmastodon.org/2025/07/mastodon-4.4/) and [4.5](https://blog.joinmastodon.org/2025/11/mastodon-4.5/)), each with headline new features that the community has been waiting for: improved discovery; better onboarding; list management upgrades; new tools for server owners; and, of course, Quote Posts!

We’re far from done, and we plan to continue to deliver regular updates. It is important to understand that Mastodon is vital infrastructure for many, so we will also continue to spend a large proportion of our time on ensuring that the platform remains safe, stable and secure. This is a key reason why we take our time when it comes to evaluating new features.

## The broader roadmap

We recently reworked our [roadmap](https://joinmastodon.org/roadmap), to make it more specific about what we are working on in the immediate future (three to six months). The roadmap on our site represents what we’re directly building in the current and following release cycles: we deliberately keep it focused, and want to avoid committing to add functionality when we may not yet be ready to support it.

As we think about our plans, we recognise that we are also part of the broader Fediverse. We make an effort to implement features in an open and interoperable manner, creating new specifications when needed. Recent examples include [Quote Posts](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md), [Collections](https://github.com/mastodon/featured_collections), and the [Fediverse Auxiliary Service Provider](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications) specification - we’re excited to see other people build new implementations.

It’s also useful to provide a longer-term view of where we are going, so with that in mind, here's a broader view of what we're planning to build over the next 1-2 years.

### A social web for everyone

A thriving Mastodon ecosystem is one where anyone can participate, regardless of technical knowledge. We're redesigning core parts of the experience to make this a reality: a streamlined sign-up flow that explains server choice without overwhelming newcomers, improved search and discovery tools to help you find communities and conversations, and clearer navigation throughout the app.

### Promoting indie servers

Right now, too many newcomers default to the largest servers. We want to change that - because Mastodon is best when communities are spread across many independent servers, each with its own character and focus.

We’ll be shipping new admin tools to help independent server operators manage moderation and maintenance more easily, like a feature to use external blocklists, extensible ways to set up content scanning to detect illegal content or spam, and ways to reduce your media storage usage by delegating serving remote posts media files from a trusted third party.

We’ll also be redesigning server discovery to showcase the diversity of communities available. You’ll hear more about this from Hannah, our Community Director, in tomorrow’s post.

### A decentralised platform for content creators

Public figures, journalists, and institutions are looking for alternatives to mainstream platforms – and we want Mastodon to be their first choice. We’re introducing features designed specifically for creators: a redesigned profile view that better showcases their work, and an enhanced compose experience. For organisations like public institutions, we’re working on a new email notification option that allows people to follow their updates even if those people don’t have a Mastodon account yet. This means creators can reach their audiences wherever they are – whether they’re active in the Fediverse or still exploring their options. Our goal is to give audiences and creators a way to connect on their own terms, free from algorithmic manipulation.

### Onward, together

These upcoming changes represent our commitment to building a social web that puts people first. Mastodon won’t ever harvest your data or chase engagement metrics. We’re focused on creating spaces where authentic connection can flourish. If you have thoughts on software improvements, [drop us an email](mailto:feedback@joinmastodon.org?subject=Technical%20direction%20blog%20post), we’re listening.

### Support Mastodon

We’re a small team building software to power the Fediverse. Unlike ad-driven platforms, we operate entirely on donations – and _every contribution matters_. See [our donation page](https://joinmastodon.org/sponsors#donate) for ways to support us.

{{< donate >}}
