---
title: "Mastodon 5.0 for Developers"
description: "Mastodon 5.0 contains several technical changes that developers will want to learn about."
date: 2026-10-30
draft: true
slug: mastodon-5-0-for-devs
authors:
 - mastodon
tags:
 - mastodon
 - engineering
categories:
 - Engineering
resources:
- name: hero
  src: hero.png
---

We just published the first [release candidate](https://github.com/mastodon/mastodon/releases/tag/v5.0.0-rc.1) for the next version of Mastodon, and the final release isn't far off. Version 5.0 is all about laying the groundwork for a more approachable user interface. Given that, there is not a single big new feature that third-party developers need to dig into. But as usual, there are a lot of smaller changes here and there that you might want to be aware of.

Regular readers of our monthly Trunk and Tidbits engineering update may already be familiar with some of the following changes.

And as always, please consult the full release notes / changelog if you would like to see everything that changed.

## Client apps

The 5.0 release containing the API changes described in this blog post comes with an API version bump to version **12**. You can check `api_versions.mastodon` in the [`GET /api/v2/instance`](https://docs.joinmastodon.org/methods/instance/#v2) response to confirm what a server supports.

### New flow for new user sign-ups

Mastodon 5 deprecates the [`POST /api/v1/accounts`](https://docs.joinmastodon.org/methods/accounts/#create) endpoint used to sign up new users. As far as we know, it was never widely implemented by apps, but was abused in recent attacks.

For apps that want to offer new users to sign up to a server, Mastodon 5 introduces a new parameter, `prompt=create`, that can be appended to the existing endpoint [`GET /oauth/authorize`](https://docs.joinmastodon.org/methods/oauth/#authorize) that is used for OAuth authorization.

Since most apps will already implement the latter, it should be relatively easy for them to now also support user sign-ups.

There is one caveat though: When the OAuth flow for the newly signed-up user finishes, said user might not be in a usable state yet. For example, it might be pending validation of the email address. Apps can check for the state of the user using the new [`AccountState` entity](https://docs.joinmastodon.org/entities/Account/#AccountState) that is now included in accounts.

### New home feed filtering options

Some users would like more control over what they see in their home feed. To accomodate that, Mastodon 5 adds four new parameters to the [`GET /api/v1/timelines/home`](https://docs.joinmastodon.org/methods/timelines/#home) endpoint that can be used to further filter what is returned by the endpoint:

* `exclude_direct`
* `exclude_reblogs`
* `exclude_quotes`
* `exclude_replies`

### New content warning flag

A new user setting has been added to control whether content warnings should be used by default. Users with this setting on should be prompted to enter a content warning every time they compose a new post.

The new setting, `source[spoiler_field]`, can be set via the [`PATCH /api/v1/accounts/update_credentials`](https://docs.joinmastodon.org/methods/accounts/#update_credentials) endpoint. Its current value is returned by both the [`GET /api/v1/accounts/verify_credentials`](https://docs.joinmastodon.org/methods/accounts/#verify_credentials) and the [`GET /api/v1/preferences`](https://docs.joinmastodon.org/methods/preferences/#get) endpoint.

### Reactions on server announcements can now be disabled

Server announcements is a feature that is used quite differently across servers. Many do not use it all. It is also the only place in Mastodon that allows for emoji reactions. This is not just inconsistent, the implementation also has performance implications that make it unsuitable for very large servers. 

That is why Mastodon 5.0 allows administrators to disable the reactions on a per announcement basis. To detect whether an announcement supports reactions, a new property `reactions_allowed` was added to the [`Announcement` entity](https://docs.joinmastodon.org/entities/Announcement/).

Clients can still try to send reactions, but will receive an HTTP status of `400` in the case that reactions are not allowed for the given announcement.

## Fediverse ecosystem

### Improved signature support

Mastodon 4.7 already introduced major improvements to the two areas where cryptographic signatures are used to secure federation: Full(er) support for HTTP Message Signatures (RFC9421) and an implementation of "Object integrity proofs" (FEP-8b32) to eventually replace JSON-LD signatures.

Mastodon 5 builds upon this by adding support for `ML-DSA-44` for inbound requests. This is the first step to introduce support for "post-quantum" algorithms.

### More targeted `Delete` activities for accounts

Mastodon pre-5 could not with any certainty know which other fediverse servers ever learned of the existence of an actor and cached said actor's data. That is why Mastodon used to (and in many cases will continue to) send `Delete` activities for actors to all servers it knows about.

This can lead to a lot of unnecessary `Delete` activities being sent across the network. Mastodon 5 introduces an option for administrators to track which servers requested an actor in the form of a bloom filter. A bloom filter allows (within a small margin of error) to decide if a server has requested an actor before, without having to store a full list of said servers. If enabled, Mastodon will send `Delete` activities only to servers that really need to see them.

For servers that enable this feature this comes with the small downside that actor objects can only be fetched with signed requests.

(Note that if you need to fetch and inspect an actor document manually, you can always use the excellent [browser.pub](https://browser.pub) or [fedify](https://github.com/fedify-dev/fedify)'s CLI mode to do so with a signed request.)

## Keep building the open social web!

Thank you to everyone building apps, tools, and integrations on Mastodon and across the Fediverse. This blog post covers the highlights; you can find the full details in the [Mastodon 5.0 changelog on GitHub](https://github.com/mastodon/mastodon/releases/tag/v5.0.0-rc.1).
