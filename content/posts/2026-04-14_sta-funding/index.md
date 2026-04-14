---
title: "Sovereign Tech Agency funding"
description: "Announcing a service agreement for new work to improve Mastodon and the broader ecosystem."
date: 2026-04-14
categories:
- News
tags:
- mastodon
authors:
- mastodon
resources:
- name: hero
  src: hero.png
  title: "The Mastodon wordmark alongside the Sovereign Tech Agency logo on a white background"
draft: false
---

We are delighted to announce that Mastodon has been awarded a €614k service agreement by the [Sovereign Tech Fund](https://www.sovereign.tech/) ([@SovTechFund](https://mastodon.social/@sovtechfund)) to support improvements and updates to Mastodon and the broader software ecosystem. Out of the total amount, €90k is set aside to be shared with other Fediverse projects that choose to implement the protocols developed during the work - more on this, below.

Mastodon’s mission is to connect the world through thriving online communities, and this investment enables us to do that by providing funding for solutions to some key infrastructure challenges faced within the Fediverse ecosystem. We are in the process of hiring two new backend developers to help work on the projects listed below, for delivery in the next two years.

## The work ahead

The service agreement covers five major deliverables.

### Blocklist synchronisation

We will deliver improvements to moderation and safety features, specifically starting with more featureful blocklist synchronisation. This will enable Mastodon server administrators to subscribe to shared blocklists; we will also implement the open [FIRES protocol](https://fires.fedimod.org/), for more advanced blocklist synchronisation. Administrators will have a choice to either automatically apply third-party blocklists, or to use them as suggestions which can be reviewed for use by their server.

The timeline is for the team to work on this as soon as possible, with implementation by the end of 2026.

### Remote media storage

We will address a long-standing problem of media storage. Currently, Mastodon servers (and other Fediverse software) store local copies of media attached to posts as they are distributed throughout the network. This can be a headache for server administrators, as they need to scale their media storage accordingly; this incurs recurring storage costs, as well as additional bandwidth costs. We will implement a new [Fediverse Auxiliary Service Provider](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications) (FASP) that will allow sharing storage and media processing between servers.

The timeline for implementation is by the end of 2026. This project includes funded interoperability work with other Fediverse software (see below).

### Automated content detection

We will build a reference implementation of a Automated Content Detection service, again as a new Fediverse Auxiliary Service Provider with an open protocol.

This will allow server owners to opt-in to use external tools to scan content for spam, illegal materials, etc in order to help them fight bad actors; they could self-host these tools if they choose to do so, or share the infrastructure with other servers for better efficiency. An important element is that we want to make how data is being processed transparent to users of Mastodon servers that opt-in for these services.

We expect to work with and learn from existing efforts from other organisations in these areas.

The timeline is for work to begin late in 2026, with implementation by the end of Q2 2027. This project includes funded interoperability work with other Fediverse software (see below).

### End-to-end encryption for private messages

We will coordinate with the [Social Web Foundation’s End-to-End Encrypted (E2EE) messaging project](https://socialwebfoundation.org/2025/12/19/implementing-encrypted-messaging-over-activitypub/), to ensure that their specifications cover important use cases, for example, in relation to safety and reporting options. We will implement support for the ActivityPub E2EE extensions for private messages in Mastodon once the [ActivityPub E2EE Messaging Task Force at the W3C](http://github.com/swicg/activitypub-e2ee) has delivered a specification, and interoperability is demonstrated.

The timeline for this piece of work is for it to happen during 2027, after initial work has been delivered from the E2EE projects mentioned above.

### Documentation improvements

We will focus on a set of improvements to our project documentation, including:

- a new documentation website, organising content for server administrators, developers, and people who use the Mastodon website and apps;
- improvements to server upgrade instructions, including an improved installation, upgrade, and setup process and extensive upgrade information in our documentation;
- a new, officially-supported container-based installation method for Mastodon, to make it easier for administrators to have the correct versions of our runtime and dependencies.

The timeline is to start on this as soon as practical, with work concurrent with the other deliverables.

## Next steps

We’re excited to get started, and we’ve started recruitment to assist with the work. Keep an eye on our blog for updates, and have a look at the [roadmap](https://joinmastodon.org/roadmap) where we will add information about current and upcoming work in the near future.

You can also find information about this investment [on the Sovereign Tech Agency website](https://www.sovereign.tech/tech/mastodon).

An important element of this agreement is that €90k of funding is earmarked to be shared with other Fediverse projects wanting to implement support for the two new Fediverse Auxiliary Service Provider specifications we will develop. In the coming months, we will share a form so projects can register interest in these interoperability opportunities.

## Finally

A *huge* thank you to the Sovereign Tech Agency for their support of open source and the Fediverse!

We are grateful for this funding, but this is not all that we need! We have even more plans and ideas to tackle the complex challenges that we need to address for everyone. We really appreciate all the donations from the people who use Mastodon every day, so please continue to donate when you can, to help us to build a sustainable open social web for everyone.

{{< donate >}}
