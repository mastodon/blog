---
title: "Mastodon 4.5 for Developers"
description: "Mastodon 4.5 contains several technical changes that developers will want to learn about."
date: 2025-10-29
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

_**Update October 31:** Added a missing section about new timeline settings._

Mastodon 4.5 is almost ready. We just released the first (and hopefully only) [release candidate](https://github.com/mastodon/mastodon/releases/tag/v4.5.0-rc.1), and the final release should be coming along very soon. This is once again a good time to highlight some of the new features and changes that are important to anyone building on top of Mastodon and its APIs.

This post has two major sections: updates that are likely to be most relevant for developers of Mastodon client applications, and updates that are more applicable to the broader Fediverse and other ActivityPub-compatible services.

Remember that we also post a monthly engineering update (our [Trunk and Tidbits](https://blog.joinmastodon.org/categories/trunk-and-tidbits/) series). If you’ve been reading them every month, some of these changes may be familiar. You’ll see below that there are a lot of useful new additions that have arrived during this development cycle.

Let's have a look at what's new here.

## Client apps

### Quote Posts

Mastodon 4.4 included the ability to verify and display consent-respecting quote posts, as defined by a Fediverse Enhancement Proposal that we shared: [FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md).

We previously introduced two new API entities to represent quotes, [Quote](https://docs.joinmastodon.org/entities/Quote/) and [ShallowQuote](https://docs.joinmastodon.org/entities/ShallowQuote/). Mastodon 4.5 improves these by adding new states: `blocked_account`, `blocked_domain`, and `muted_account`. These are cases where the quote is authorized, but should not be displayed by default to the user currently viewing the post. Mastodon 4.4 returned a state of `unauthorized` in those cases, but we decided that applications should be able to offer a way to see the quoted posts anyway. See the documentation of the entities above, and [this PR](https://github.com/mastodon/mastodon/pull/36619).

The biggest change compared to 4.4 is of course that we now allow authoring of quote posts! In the REST API this can be as simple as adding a `quoted_status_id` attribute when creating a new status. As a minimum however, clients should make sure that quoting the status in question is allowed. To help you get acquainted with all of the relevant changes to the API, we added an ["Implementing quote posts" guide](https://docs.joinmastodon.org/client/quotes/) to the developer documentation.

### Fetch all replies, and AsyncRefresh

Mastodon 4.4 introduced a new feature to fetch missing replies to a remote status. This was not enabled by default, and had no immediate effect in any user interfaces. Mastodon 4.5 enables the feature by default, and also includes some user-facing changes in the web UI that support it.

The challenge here is that finding out *whether replies are missing*, and the actual *fetching of missing replies*, both happen in asynchronous background jobs; tasks that are independent of the client's API request. We face this problem in a number of places across the Mastodon code base, so we wanted to come up with a generic solution.

To support the pattern, we added a new API called [AsyncRefresh](https://docs.joinmastodon.org/methods/async_refreshes/). When an endpoint has an associated background refresh job, its response may include the `Mastodon-Async-Refresh` HTTP header to indicate that there are additional tasks being performed. Clients can then poll the AsyncRefresh endpoint to check the status of the job, and decide when to re-request the original resource. This is covered in the new documentation linked above.

We decided to make "Fetch all replies" the first use-case to try out this new API. When querying the [`/api/v1/statuses/:id/context` endpoint](https://docs.joinmastodon.org/methods/statuses/#context) you might now encounter the new custom HTTP header.

Please note that the new AsyncRefresh API is still marked as being *experimental*. We want to ensure that it works for at least one other use-case before declaring it final. We commit to keeping the experimental endpoint around for one Mastodon version after releasing the final endpoint, to help ease the transition.

### New timeline settings

Mastodon 4.5 offers server administrators granular options to decide which timelines can be accessed by everyone, only by signed in users or not at all. See the documentation of the `Instance` entity, [specifically this attribute and all the following](https://docs.joinmastodon.org/entities/Instance/#timeline_access) for what is possible and how to detect a server's current settings.

This can lead to situations where when you request a timeline through one of the [timeline endpoints](https://docs.joinmastodon.org/methods/timelines/) you now get a `401` response, meaning access is disabled.

There is one notable exception: Even if access to timelines is disabled completely, they might still be useful as a tool for moderators to scan for new statuses proactively. That is why there is a new role permission to override the settings. See the [`Role` entity](https://docs.joinmastodon.org/entities/Role/#permission-flags) documentation. You will still be able to request timelines on behalf of users with this permission, even when access is disabled for everyone else.

## Fediverse ecosystem

Mastodon is part of a much larger constellation - the Fediverse, powered by ActivityPub and related open standards. We want to contribute to the whole system, and integrate well with other apps and services in the Fediverse.

### Quote Posts

We released the specification for consent-respecting quote posts (aka [FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md)) a little while ago now. At this point, there is a fully featured implementation in Mastodon. This means it could be a good time to implement the FEP in other Fediverse software.

The FEP itself allows some leeway for implementation - for example, when defining the audience in quote policies. If you are interested in the choices that Mastodon made in those cases, the content of the FEP itself has been updated with additional clarifications. You may also want to have a look at our ["Implementing quote posts" guide](https://docs.joinmastodon.org/client/quotes/) to get a more complete picture how this works inside of Mastodon, even if you are not planning on using our APIs.

### HTTP Signatures

Mastodon 4.4 added experimental support for receiving HTTP Message Signatures ([RFC9421](https://www.rfc-editor.org/rfc/rfc9421)) behind a feature flag.

The feature flag has been *removed* in Mastodon 4.5. Servers running Mastodon 4.5+ will accept incoming HTTP Message Signatures that can be verified. See [our documentation](https://docs.joinmastodon.org/spec/security/#http-message-signatures) for additional details.

## Keep on building with us!

It means a lot to us that developers want to spend their time working on apps for the Mastodon community, and the broader Fediverse as a whole. Thank you.

Finally, this is blog post is only a summary of the developer-centric features in the new release. We encourage you to have a dig into the [changelog for 4.5](https://github.com/mastodon/mastodon/releases/tag/v4.5.0-rc.1) for full details of all the updates.
