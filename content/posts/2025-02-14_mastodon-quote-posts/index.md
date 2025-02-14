---
title: "Bringing Quote Posts to Mastodon"
subtitle: "Our approach to this long-requested feature"
description: "Sharing our thinking and progress on bringing Quote Posts to Mastodon, with a goal to create a safe and respectful space for everyone."
author: mastodon
draft: false
date: 2025-02-14
categories:
- New Features
tags:
- engineering
- mastodon
- activitypub
resources:
- name: hero
  src: hero.png
---

Quote Posts are a popular feature of many social media platforms. They offer the ability to share another person's post to one's own followers, while adding a comment.

We want to share our thinking process in implementing Quote Posts in Mastodon, and explain why it has taken us some time to do so.

## Background

In the past couple of years, as Mastodon has grown, we’ve spent time meeting with community leaders across a spectrum of interests, to understand their needs. We have learned that many groups use Quote Posts as their primary means to build consensus and community on other platforms. Quote Posts used in this way convey trust and respect for the original post, building on or enhancing an original idea.

On the other hand, back when Mastodon was first developed, we had seen the feature used for malicious purposes on other platforms, for example, to intentionally quote someone out of context, to direct hate speech and harass people. At that time, it was an easy decision for us: Mastodon would not have quote posts.

The continued popularity of requests for us to implement the feature has shown that their absence prevents many people from joining the Fediverse. We want to add Quote Posts to help people to transition away from proprietary, billionaire-owned social media to the open social web.

If you’ve been following our project, we first mentioned that we were considering bringing Quote Posts to Mastodon [back in 2023](https://blog.joinmastodon.org/2023/05/a-new-onboarding-experience-on-mastodon/). During 2024, we applied for [a grant from the NGI0 Entrust Fund](https://nlnet.nl/project/Mastodon-Quoting/), to support our research and implementation efforts. With that support, we have done a lot of research and thinking, and we are sharing the outcomes of this work with you here.

## Challenges

There are two primary elements to bringing Quote Posts to Mastodon: user-centric, and technical.

As explained above, the team started out with a shared view that Quote Posts can be misused. Many people simply do not want their content to be reposted by others; or they may find that if it is, they receive unwelcome attention.

In order to mitigate these issues, we plan to include several features in our implementation:

- You will be able to choose whether your posts can be quoted at all.
- You will be notified when someone quotes you.
- You will be able to withdraw your post from the quoted context at any time.

We also want to build a tight integration for Quote Posts with the reporting functionality, to help people to feel more safe.

On the technical side, the concept of Quote Posts is not standardised - there is no agreed way to build this feature into a W3C ActivityPub implementation so that it is automatically interoperable with the other applications in the Fediverse. Today, some third party Mastodon clients approximate quote posts, by showing a preview if a post contains a link to another post - but those efforts do not come with any of the features that we want to include. We want to collaborate to create a specification, so that we can encourage a better (and safer) way for all clients to have this functionality. We’ve spent time talking with users, with other Fediverse software developers (which include user facing applications), and with the developers of our own client apps, about how they might expect to see or implement Quote Posts. The output from this will be concrete proposals to help everyone building on the social web.

## The process

We are in the process of writing ActivityPub extensions (which we will publish as [Fediverse Enhancement Proposals](https://codeberg.org/fediverse/fep)), in collaboration with other developers, to cover these features for any ActivityPub software that chooses to use them. These specifications can allow everyone to efficiently implement this same feature in an interoperable way. We’ve shared [initial work on this](https://socialhub.activitypub.rocks/t/pre-fep-quote-posts-quote-policies-and-quote-controls/5031) for ActivityPub developers, and we're also posting the [background research](https://github.com/mastodon/specs-background/blob/main/quote-posts/quote-posts-research-and-goals.md) we performed, that was discussed with others - in both cases, these are being posted as deeper-dives for technical audiences and other implementers; they do not represent final outputs and choices.

In addition to these proposals, this feature will impact many parts of the Mastodon codebase, including the ActivityPub-handling code, the public API, web user interface, moderation panel and capabilities (reporting will not be trivial), the administration panel, and the official iOS and Android applications. We’re working on it, but Quote Posts will still take more time to develop.

## The future

We know that Quote Posts are a source of concern for some members of the community, and highly-requested by others. We’re committed to sharing our progress, and listening to your feedback. Thanks for being a part of the open social web, and for using Mastodon.

{{< donate >}}
