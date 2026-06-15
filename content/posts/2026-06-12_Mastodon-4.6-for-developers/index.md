---
title: "Mastodon 4.6 for Developers"
description: "Mastodon 4.6 contains several technical changes that developers will want to learn about."
date: 2026-06-12
draft: false
slug: mastodon-4-6-for-devs
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

We just published the first [release candidate](https://github.com/mastodon/mastodon/releases/tag/v4.6.0-rc.1) for the next version of Mastodon, and the final release isn't far off. Version 4.6 brings a number of exciting new features, including the highly anticipated Collections. and a fresh, more consistent approach to profile pages (now, with more intuitive editing). Those are only two of the more visible updates - the release is packed with other enhancements across the backend, web front end, and official mobile apps.

If you’re a developer building with the Mastodon API (or, if you’re looking to understand how Mastodon integrates with the wider Fediverse), this post is intended as a “primer” on the main changes in version 4.6 that we think are worthy of your attention. As we’ve done for the past couple of releases, this guide is divided into two parts - APIs and features most relevant to developers of Mastodon client applications; and, federation changes and specification updates related to the ActivityPub ecosystem.

We also publish a monthly Trunk and Tidbits engineering update, so if you have been following those posts, some of these changes may already be on your radar. We hope this post serves as a useful guide to what we’ve done to improve the latest release of Mastodon.

## Client apps

The 4.6 release containing the new APIs described in this blog post comes with an API version bump to version 10. You can check `api_versions.mastodon` in the [`GET /api/v2/instance`](https://docs.joinmastodon.org/methods/instance/#v2) response to confirm what a server supports.

### Collections

The biggest new feature in Mastodon 4.6 is Collections - a new kind of public, curated account list that are a great way to share recommended people to follow for newcomers, or to those exploring new topic areas. Accounts can create collections with a name, description, topic (hashtag), and language setting.

Collections are managed via a new API under the /api/v1 namespace.

The core endpoints are:

- [`POST /api/v1/collections`](https://docs.joinmastodon.org/methods/collections/#create) - create collections
- [`GET/PATCH/DELETE /api/v1/collections/:id`](https://docs.joinmastodon.org/methods/collections/) - manage a collection
- [`POST /api/v1/collections/:id/items`](https://docs.joinmastodon.org/methods/collections/#add_account) - add members
- [`DELETE /api/v1/collections/:id/items/:id`](https://docs.joinmastodon.org/methods/collections/#remove_account) - remove a member
- [`POST /api/v1/collections/:id/items/:id/revoke`](https://docs.joinmastodon.org/methods/collections/#revoke_item) - revoke inclusion
- [`GET /api/v1/accounts/:id/collections`](https://docs.joinmastodon.org/methods/collections/#get_collections) - list an account's collections
- [`GET /api/v1/accounts/:id/in_collections`](https://docs.joinmastodon.org/methods/collections/#in_collections) - list which of an account's collections you are in

There are also new notification types associated with collections, namely `added_to_collection` (received when your account is added to a collection) and `collection_update` (received when a collection you’re in has had any of its metadata, like title or description, updated).

See the [Getting started with Collections guide](https://docs.joinmastodon.org/client/collections/) in the developer documentation for a more detailed discussion.

### Fallback notifications

When we add new features to Mastodon, they often come with new notification types that all apps need to implement to show correctly. Understanding that this leaves a gap between when a new Mastodon version comes out and their app updates, we’ve also implemented a system of fallback notifications, allowing you to render notifications in your app even when your app doesn’t support them.

To take advantage of this, include the parameter `supported_types` when making a request to get one or multiple notifications or notification groups with the list of types that your app supports now. Any notifications that aren’t those types will now contain a [`fallback` attribute](https://docs.joinmastodon.org/entities/Notification/#fallback-optional), containing a [`NotificationFallback` entity](https://docs.joinmastodon.org/entities/NotificationFallback/) you can use to render a fallback message.

### Profile editing

Mastodon 4.6 introduces a dedicated API for editing profile information, separate from the existing `api/v1/accounts/update_credentials`.

The new endpoints are:

- [`GET /api/v1/profile`](https://docs.joinmastodon.org/methods/profile/#get-current-user-profile) - retrieve the current user's full profile
- [`PATCH /api/v1/profile`](https://docs.joinmastodon.org/methods/profile/#update-current-user-profile) - update profile information

The new [`Profile` entity](https://docs.joinmastodon.org/entities/Profile/) returns `note` and `fields` as raw unprocessed text, rather than rendered HTML. This makes it easier for clients to populate editing interfaces correctly. The entity also exposes fields that were not previously available in the API, including `avatar_description`, `header_description`, `attribution_domains`, and profile tab preferences (`show_media`, `show_media_replies`, `show_featured`).

The endpoints also provide `formatted_note` and `formatted_fields` for when you need the rendered HTML versions.

### Instance API additions

The [`GET /api/v2/instance`](https://docs.joinmastodon.org/methods/instance/#v2) response now exposes several new limits under `configuration.accounts` that client apps should use, rather than assuming or hard-coding defaults:

- `max_note_length` - maximum bio length
- `max_display_name_length` - maximum display name length
- `max_profile_fields` - maximum number of custom profile fields
- `profile_field_name_limit` and `profile_field_value_limit` - character limits for field names and values

The server thumbnail object also gains a `description` field for its alt text.

### Account and status API changes

**Filtering account statuses:** [`GET /api/v1/accounts/:id/statuses`](https://docs.joinmastodon.org/methods/accounts/#statuses) now accepts an `exclude_direct=true` parameter to omit private mention posts from the response. You can use this to avoid showing them on profiles (although they would obviously only be visible if the current user has access to them), with the added bonus that excluding them makes the response a bit faster as well.

**New account fields:** Three new fields on the [`Account` entity](https://docs.joinmastodon.org/entities/Account/) reflect new profile tab preferences: `show_media`, `show_media_replies`, and `show_featured`. If your app has a profile screen, you should update it to respect these preferences; respectively, whether a “Media” tab is shown, whether the “Media” tab includes media from replies, and whether the “Featured” tab is shown.

**Preview card attribution:** The [`PreviewCard` entity](https://docs.joinmastodon.org/entities/PreviewCard/) now includes a `missing_attribution` boolean. Attribution is what we sometimes call the `fediverse:creator` feature, a fediverse account linked to a link preview. The new boolean attribute indicates that the link claims to be attributed to the current user, but the link’s domain is not in the user’s `attribution_domains` setting. You can use this to prompt the user to update their `attribution_domains`.

### Wrapstodon

Wrapstodon is what we call Mastodon’s “year in review” feature. You’ll find the property `wrapstodon` in the response of [`GET /api/v2/instance`](https://docs.joinmastodon.org/methods/instance/#v2) which will contain the current year if the feature is enabled and you are within the eligibility period, and `null` otherwise. If it is the current year, you can check if the current user already has a generated report or is eligible for one by checking the response of [`GET /api/v1/annual_reports/:year/state`](https://docs.joinmastodon.org/methods/annual_reports/#get-state). It will contain a `state` attribute which is `available` if there is already a report, `generating` if one is being generated right now, `eligible` if you can request one, and `ineligible` otherwise. If it is `eligible`, you can offer the user to generate their Wrapstodon report. To do that, you need to submit [`POST /api/v1/annual_reports/:year/generate`](https://docs.joinmastodon.org/methods/annual_reports/#generate-a-new-annual-report-generate) (until you do that, nothing will be generated). The response will contain the [`Mastodon-Async-Refresh` header](https://docs.joinmastodon.org/methods/async_refreshes/) you can use to check for progress. Once the report is generated, it will be available from [`GET /api/v1/annual_reports/:year`](https://docs.joinmastodon.org/methods/annual_reports/#get) as an [`AnnualReport`](https://docs.joinmastodon.org/entities/AnnualReport/) entity.

## Fediverse ecosystem

### Collections

Collections have a full ActivityPub representation. We’ve been working on this in the open, via [FEP-7aa9](https://codeberg.org/fediverse/fep/src/branch/main/fep/7aa9/fep-7aa9.md). The way it works is very similar to how we implemented quote posts ([FEP-044f](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md)), as actors issue authorizations for being included in collections.

Actors now include a `featuredCollections` property linking to a collection endpoint that lists their public `FeaturedCollection` objects. This in addition to the existing `featured` (for pinned posts) and `featuredTags` (for featured hashtags) properties.

Actors also now include a new `interactionPolicy` property, with a`canFeature`attribute, indicating the audience for which collection inclusion requests are automatically approved—public, followers-only, or manual approval only.

### New profile preferences federated over ActivityPub

The new profile tab preferences are federated as properties on the Actor object: `showFeatured`, `showMedia` and `showRepliesInMedia`. This allows other Fediverse software to respect an account's preferences when showing their profile.

### HTTP Signatures

Several changes have been made to HTTP Signature handling, to align with current standards:

**Multiple keypairs.** Mastodon now supports remote actors that present multiple keypairs, improving interoperability with implementations that rotate signing keys or publish more than one.

**Skipping the `Accept` header.** Mastodon no longer includes the `Accept` header in the signed portion of outgoing HTTP requests, for compatibility with proxies and CDNs that may rewrite it in transit.

**Temporary failure response code.** When Mastodon cannot verify an incoming HTTP Signature because it temporarily cannot reach the remote server, it now returns `503` rather than `401`, distinguishing a transient network issue from a genuine authentication failure.

### Other spec alignments

**JSON-LD `quote` definition.** The definition of `quote` in Mastodon's JSON-LD context was incorrect and has been fixed to be of type `@id`.

**ActivityPub `Accept` headers.** The `Accept` headers sent when fetching ActivityPub objects have been corrected to properly match the ActivityPub specification by including the JSON-LD profile.

**Non-ActivityPub `Link` headers.** A `Link: rel="alternate"` header pointing to e.g. RSS or Atom was incorrectly blocking discovery of the ActivityPub representation of a resource. This is now fixed.

### Webfinger Profile URI Discovery

Mastodon 4.6 implements [FEP-2c59](https://codeberg.org/fediverse/fep/src/branch/main/fep/2c59/fep-2c59.md), including the `webfinger` property on actors and using it when validating usernames. You can read more about how Mastodon implements this in our WebFinger documentation.

### Activity Intents

Mastodon 4.6 implements [FEP-3b86](https://codeberg.org/fediverse/fep/src/branch/main/fep/3b86/fep-3b86.md) (Activity Intents). Activity Intents provide a way for servers to advertise URL templates for common interactions—follow, reply, boost, favourite—that allow compatible apps and tools to redirect the user to the correct page without hardcoding or guessing the URL. One example is Mastodon’s own share tool, share.joinmastodon.org, which uses this FEP to redirect the user to correct share page on their server.

Mastodon's WebFinger responses now include `interactionPattern` link templates for supported intent types. The remote interaction dialog in Mastodon's web UI has been updated to prefer these advertised intents when a remote server supports them, improving the experience for users on servers running different software as different apps gradually upgrade to support the same Activity Intents approach.

## Keep building the open social web!

Thank you to everyone building apps, tools, and integrations on Mastodon and across the Fediverse. This blog post covers the highlights; you can find the full details in the [Mastodon 4.6 changelog on GitHub](https://github.com/mastodon/mastodon/releases/tag/v4.6.0-rc.1).
