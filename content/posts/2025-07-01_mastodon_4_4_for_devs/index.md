---
title: "Mastodon 4.4 for Developers"
description: "Here's what developers need to know about the upcoming Mastodon 4.4 release."
date: 2025-07-01
slug: mastodon-4-4-for-devs
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
draft: false
---

Mastodon 4.4 is just around the corner: the [release candidate is now available](), and the final release should be coming along very soon. Just before the final version arrives, we wanted to shine the spotlight on some of the new features and changes that will be particularly important to anyone building apps or integrations.

As a reminder, we also share a monthly engineering update (our [Trunk and Tidbits](https://blog.joinmastodon.org/categories/trunk-and-tidbits/) series) and if you’ve been following those, some of these changes may already be familiar. You’ll see below that there are a lot of useful new additions that have arrived during this development cycle.

We’ve divided this post into two broad sections: updates that are likely to be most relevant for developers of client applications, and updates that are more applicable to the broader Fediverse, other integrations, or contributors to Mastodon itself. Let’s dive in.

## Client apps

### Quote Posts

We wrote about [our approach to implementing Quote Posts](https://blog.joinmastodon.org/2025/02/bringing-quote-posts-to-mastodon/) earlier in the year. Mastodon 4.4 brings the first element of this implementation - support for verifying and displaying remote quote posts that conform to [FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md), a [Fediverse Enhancement Proposal](https://codeberg.org/fediverse/fep/src/branch/main) we shared with the broader developer community.

In practical terms, this means that incoming quote posts can now be displayed in the web UI. We expect to update our own mobile apps to display quote posts in the coming months. Being quoted and quoting other people and is not implemented yet (this is coming in Mastodon 4.5).

In the REST API, quote posts are represented by a new `quote` attribute on [Status](https://docs.joinmastodon.org/entities/Status/#quote) and [StatusEdit](https://www.notion.so/Mastodon-4-4-for-Developers-1eb6208ac91b80fbb5bce9aaeb61d9f9?pvs=21) entities.

The special CSS class `quote-inline` is used to represent backward-compatible information that is redundant with the display of quote posts, and can be safely hidden by clients which display quote posts. [Read more about this in the FEP](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md#backward-compatibility-considerations).

### Authentication changes

There have been a number of improvements to the security (authentication and authorization) model in version 4.4.

The older (and much less-secure) OAuth password grant type was removed during this development cycle. There was also a fix for [OAuth Client Auth](https://www.rfc-editor.org/rfc/rfc6749.html#section-2.3) with HTTP Basic Auth with SSO ([#34501](https://github.com/mastodon/mastodon/pull/34501)), and a fix to prevent user tokens being used on the account creation API ([#34828](https://github.com/mastodon/mastodon/pull/34828)).

There is a new [userinfo endpoint](https://docs.joinmastodon.org/methods/oauth/#userinfo) for retrieving OpenID Connect claims. Note: Mastodon is not an OpenID Provider, but we are providing a standard userinfo endpoint when using the `profile` scope.

We strongly recommend that developers make use of the `/.well-known/oauth-authorization-server` [metadata endpoint](https://docs.joinmastodon.org/spec/oauth/#authorization-server-metadata), available since Mastodon 4.3, to discover how the server is configured.

Many thanks to [Emelia](https://hachyderm.io/@ThisIsMissEm) for continuing to help us improve these security features in Mastodon.

### Account management

Version 4.4 brings some updates to the featured content tab on user profiles on the web. There are related new REST API endpoints for managing that content:

- Add and manage [endorsed accounts](https://docs.joinmastodon.org/methods/accounts/#endorsements)
- Add and manage [featured hashtags](https://docs.joinmastodon.org/methods/tags/#feature)

There is also now an API for managing attribution domains for shared links, via the `accounts/update_credentials` [endpoint](https://docs.joinmastodon.org/methods/accounts/#update_credentials) (thanks [@c960657](https://github.com/c960657)).

### Media

There’s a new filter action to blur media ([filter_action: blur attribute](https://docs.joinmastodon.org/entities/Filter/#filter_action)).

There are new APIs for [deleting media attachments that are not in use](https://docs.joinmastodon.org/methods/media/#delete), and also for [deleting associated media when deleting a status](https://docs.joinmastodon.org/methods/statuses/#delete).

It is now possible to query the instance metadata endpoint for the [configured length for media descriptions](https://docs.joinmastodon.org/entities/Instance/#description_limit).

### Server Rules and Terms of Service

We recently shared some changes that are being implemented to [provide additional legal features](https://blog.joinmastodon.org/2025/05/legal-features-updates/).

From an API perspective, there are several changes here:

- About, Privacy Policy and Terms of Service URLs are now returned via `/api/v2/instance`.
- Rule entities [now have a new translations attribute](https://docs.joinmastodon.org/entities/Rule/#translations).
- Servers with a reason required with a reason required for registration [now return this in their instance metadata](https://docs.joinmastodon.org/entities/Instance/#registrations-reason_required).
- A [breaking change in the sign-up API](https://github.com/mastodon/mastodon/discussions/34495) which enables the addition of an age check for new users. Server administrators now have a setting to set a minimum age requirement when creating a new server, asking users for their date of birth. The date of birth is checked against the minimum age requirement server-side, but not stored. If you are building a client app that supports account creation, you should be aware of this change and ensure that your app handles the date of birth field correctly.
  - `registrations.min_age` has been [added to the Instance entity](https://docs.joinmastodon.org/entities/Instance/#registrations-min_age).
  - the `date_of_birth` parameter has been added to the [account creation API](https://docs.joinmastodon.org/methods/accounts/#create).

### Miscellaneous API updates

- Deprecated API endpoints [now have `Deprecated` headers](https://docs.joinmastodon.org/api/guidelines/#deprecations).
- It is now possible to access `/api/v2/instance` without authentication if limited federation mode is enabled.
- Favorite and boost counts will now match those provided by the remote server, if available.

## Fediverse ecosystem

We have also been working on improvements to how Mastodon interoperates and interacts with the rest of the Fediverse. Here are a couple of the most important things you should know about.

### HTTP Signatures

We’ve added experimental support for receiving HTTP Message Signatures ([RFC9421](https://www.rfc-editor.org/rfc/rfc9421)).

For now, this needs to be explicitly enabled through the `http_message_signatures` feature flag (`EXPERIMENTAL_FEATURES=http_message_signatures`). This currently only covers verifying such signatures (inbound HTTP requests), not issuing them (outbound HTTP requests).

### Fediverse Auxiliary Service Providers

We’re working on providing more useful services to the Fediverse as a whole, beyond just Mastodon. You can read the [Fediverse Auxiliary Service Provider specification](https://github.com/mastodon/fediverse_auxiliary_service_provider_specifications) on GitHub. We’re excited about the idea of shared, decentralised services that expand the scope of individual servers, help to balance the load between groups of instances, and provide augmented capabilities across diverse platforms. For example, there could be FASP implementations that provide link preview generation, anti-spam services, or improved search and discovery. None of these are limited to supporting Mastodon, so they offer some interesting possibilities for greater collaboration between different Fediverse software implementations. Curious to learn more? Take a look at [this session from FOSDEM 2025](https://video.fosdem.org/2025/ud2208/fosdem-2025-4531-fediscovery-improving-search-and-discovery-on-the-fediverse.av1.webm).

In version 4.4, we’ve enabled initial support for FASPs in Mastodon, via the `fasp` feature flag. This is mostly of interest to developers who would like to implement their own FASP. In this initial step, it also includes the capability to share data with a discovery provider (see [https://www.fediscovery.org](https://www.fediscovery.org/)). Let us know if you’re interested in trying out our existing discovery provider, or if you plan to work on additional FASP ideas.

### Contributing features to Mastodon

One more interesting update, is for developers who wish to contribute to the Mastodon core code. We now have a simple feature flag system, configured via the `EXPERIMENTAL_FEATURES` environment variable. This supports a comma-separated list of feature flags for configuring experimental features. In version 4.4, the supported feature flags are `fasp` and `http_message_signatures`.

In the future, if you want to contribute a significant new feature, then you may wish to discuss with the team to potentially have it behind an experimental feature flag. There's no specific requirement for new features to be marked as experimental, but it can be useful to have a way to selectively test, before they are fully integrated into the core codebase. This sets a foundation for doing so in the future.

## Thanks for your support

We love to see all of the great apps and creative integrations that developers build on Mastodon and contribute to the Fediverse! Take a look at the [changelog for 4.4]() for full details of all the updates - that also includes links to the relevant issues, pull requests with commits, and documentation.
