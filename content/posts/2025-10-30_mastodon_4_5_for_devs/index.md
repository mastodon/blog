---
title: "Mastodon 4.5 for Developers"
description: "Here's what developers need to know about the upcoming Mastodon 4.5 release."
date: 2025-10-30
slug: mastodon-4-5-for-devs
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

Mastodon 4.5 is almost ready. We just released the first (and hopefully only) [release candidate](https://github.com/mastodon/mastodon/releases/tag/v4.5.0-rc.1) and the final release should be coming along very soon. This is once again a good time to highlight some of the new features and changes that are important to anyone building apps or integrations.

As a reminder, we also share a monthly engineering update (our [Trunk and Tidbits](https://blog.joinmastodon.org/categories/trunk-and-tidbits/) series) and if you’ve been following those, some of these changes may already be familiar. You’ll see below that there are a lot of useful new additions that have arrived during this development cycle.

We’ve divided this post into two broad sections: updates that are likely to be most relevant for developers of client applications, and updates that are more applicable to the broader Fediverse, other integrations, or contributors to Mastodon itself. Let’s dive in.

## Client apps

### Quote Posts

Mastodon 4.4 released with the capability to verify and display quote posts as defined by our specification, [FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md).

Mastodon 4.4 introduced two new API entities to represent quotes, [Quote](https://docs.joinmastodon.org/entities/Quote/) and [ShallowQuote](https://docs.joinmastodon.org/entities/ShallowQuote/). Mastodon 4.5 improves those by adding new states: `blocked_account`, `blocked_domain`, `muted_account`. These are cases where the quote is authorized but should not be displayed by default to the user currently viewing the post. In Mastodon 4.4 we just returned a state of `unauthorized` in those cases, but we decided that applications should be able to offer a way to see the quoted posts anyway. See the documentation of the entities above and [this PR](https://github.com/mastodon/mastodon/pull/36619).

The biggest change compared to 4.4 is of course that we now allow authoring of quote posts. In the REST API this can be as simple as adding a `quoted_status_id` attribute when creating a new status. But clients should at least make sure that quoting the status in question is not disallowed. To help you get acquainted with all the relevant changes to the API, we added an ["Implementing quote posts" guide](https://docs.joinmastodon.org/client/quotes/).

### Fetch all replies / Async Refreshes

Mastodon 4.4 introduced a new feature to fetch missing replies to a remote status. This was not enabled by default and had no immediate effect in any user interfaces. Mastodon 4.5 enables the feature by default and also includes some user facing changes in the web UI around this.

The challenge here is that finding out if replies are missing and the actual fetching of missing replies both happen in asynchronous background jobs that are independent of the client's API request. We face this problem in a number of places so we wanted to come up with a generic solution.

The result is a new API called [AsyncRefresh](https://docs.joinmastodon.org/methods/async_refreshes/). Affected API endpoints may include a custom HTTP header, `Mastodon-Async-Refresh` in their response to let clients know that some kind of background job is currently running which might affect future results for this call. Clients can then use the new API endpoint to poll for updates on the state of the job to help them decide when to re-request the original resource. Please see the linked documentation for all the details.

We decided to make "Fetch all replies" the first use-case to try out this new API. When querying the [`/api/v1/statuses/:id/context` endpoint](https://docs.joinmastodon.org/methods/statuses/#context) you might now encounter the new custom HTTP header.

Please note that the new "AsyncRefresh" API is still marked as being experimental. We want to make sure it works for at least one other use-case before declaring it final. We commit to keep the experimental endpoint around for one Mastodon version after releasing the final endpoint to help ease the transition.

## Fediverse ecosystem

We have also been working on improvements to how Mastodon interoperates and interacts with the rest of the Fediverse. Here are a couple of the most important things you should know about.

### Quote Posts

While we released the protocol specification (as [FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md)) a while ago, now there is a fully featured implementation in Mastodon. This means it might be a good time to implement the FEP in other fediverse software.

The FEP itself allows some leeway for implementation, e.g. when defining the audience in quote policies. If you are interested in the choices that Mastodon made in those cases, the FEP itself has been updated with additional clarifications. You might also want to have a look at our ["Implementing quote posts" guide](https://docs.joinmastodon.org/client/quotes/) to get a fuller picture how this works inside of Mastodon, even if you are not planning on using our APIs.

### HTTP Signatures

Mastodon 4.4 added experimental support for receiving HTTP Message Signatures ([RFC9421](https://www.rfc-editor.org/rfc/rfc9421)) behind a feature flag.

This feature flag has been removed in Mastodon 4.5. Servers running Mastodon 4.5+ will accept incoming HTTP Message Signatures that can be verified. See [our documentation](https://docs.joinmastodon.org/spec/security/#http-message-signatures) for additional details.

## Thanks for building on Mastodon!

We love to see all of the great apps and creative integrations that developers build on Mastodon and contribute to the Fediverse! Take a look at the [changelog for 4.5](https://github.com/mastodon/mastodon/releases/tag/v4.5.0-rc.1) for full details of all the updates - it also includes links to relevant issues, pull requests with commits, and documentation.
