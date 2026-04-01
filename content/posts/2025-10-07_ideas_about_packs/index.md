---
title: "Our ideas about Packs"
subtitle: "How can we create shareable sets of user recommendations?"
description: "Sharing our thoughts and plans behind sharing collections of accounts in the Fediverse."
author: imani
draft: false
date: 2025-10-07
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

## Background

Mastodon’s timeline doesn’t rely on dopamine-driven algorithms – it is chronological and consent-based, showing only posts from accounts you (the person using Mastodon) have followed.

This focus on privacy and conscious consumption is what leads many people to join the Fediverse in the first place. It also places an unfair ultimatum on incoming users: You’ll have to make an effort to figure out who to follow, or your timeline will mostly be empty.

Bluesky pioneered a brilliant solution to this “empty feed problem” in 2024, with the introduction of “Starter Packs”, a feature that allows users to curate and share their own collections of recommended accounts.

We believe that these kinds of user-generated, curated collections could help people to find their tribe more quickly when they join the Fediverse. At the same time, envisioning a similar feature that prioritises user consent, *and* works across a constellation of independent servers, is no small feat.

In this blog post, we want to talk about bringing a similar concept to Mastodon and the Fediverse. We’ll use the word “Packs” to refer to the shareable collections of identifiers throughout, but we’ve not yet landed on final terminology - so, consider this word a placeholder, and not what this will definitely be called in Mastodon.

## Challenges and considerations

We know that there have been existing efforts to make it easier to discover curated collections of users (for example, [fedidevs.com](https://fedidevs.com/starter-packs/) offers “Starter Packs”). We’ve been happy to see these being shared, as they can help people discover interesting individuals and organisations to follow. We'd be equally happy to have the creators of these tools provide feedback on our own ideas 🙂

We believe that there are several ways to improve on the existing examples, that are more aligned with the values we try to bring to the Fediverse, and that offer more to the decentralised ecosystem as a whole.

Firstly, it’s important to us that users have control over whether they appear in Packs on Mastodon. Early design explorations with our concept of Packs led us to the following possibilities:

- Packs will become an extension of discovery. Users who wish to opt out entirely from Packs will be able to do so by disabling the existing setting, labelled *“Feature profile and posts in discovery algorithms”*. This will signal that an account cannot be added to a Pack.
- Users will be notified when they are included in a Pack. Unlike on Bluesky, where users wishing to remove themselves from a Starter Pack must either report the Starter Pack, or block the user, users on Mastodon will have a more neutral mechanism to remove themselves from a Pack they do not wish to be part of.
(note: we implemented something similar with the Quote Posts feature, where an original post can be removed from a quote post; this same idea would flow through to Packs).

As always, federation presents its own challenges. Just as Mastodon users can follow people on other Fediverse servers, our goal is for them to also be able to find and interact with Packs created elsewhere in the Fediverse. When Alice creates a Pack on her server `example.com`, how does Bob on `example.online` get to know about it, and come to interact with it? What if `example.com` and `example.online` run different ActivityPub-compatible software? These questions can be addressed via established Fediverse discussion processes.

## Next steps

We’re in the process of collaborating with other Fediverse developers on a [Fediverse Enhancement Proposal (FEP)](https://codeberg.org/fediverse/fep), so that a common implementation for Packs can be made available to developers of any ActivityPub software. The initial work is [now available on GitHub](https://github.com/mastodon/featured_collections). The FEP process will be the place to direct any technical questions.

Meanwhile, we’re also conducting broader research to understand overarching themes related to user onboarding, and how we can make things easier for people to get started on Mastodon.

We expect to release an initial version of Packs, plus other minor improvements to onboarding, in Mastodon 4.6. In the meantime, the next stable release (Mastodon 4.5) is right around the corner!

### We want to hear your thoughts

We want to make Packs a great feature for discovery and onboarding! If you have thoughts on the ideas described above (beyond the technical aspects that will be part of the FEP), contact us at [feedback@joinmastodon.org](mailto:feedback@joinmastodon.org). We may not be able to respond to every individual message, but we’ll be reading every piece of feedback to learn more about your ideas.
