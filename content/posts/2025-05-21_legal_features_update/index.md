---
title: "Updating some legal features"
description: "Setting up optional Terms of Service, server rules translations and age requirements - new features coming in Mastodon 4.4"
slug: legal-features-updates
date: 2025-05-21
draft: false
categories:
- New Features
tags:
- mastodon
authors:
- mastodon
resources:
- name: hero
  src: hero.png
---

Mastodon’s core purpose is to connect you with your friends and communities, to have conversations that matter to you.

Communities need some ground rules; and, on the internet, we also need to be aware of any regulations that are relevant where our services are being operated. In the upcoming release of Mastodon (version 4.4), there are three key updates to our legal features that support these requirements for server administrators.

## Terms of Service

Mastodon servers already have _Server Rules_ and a _Privacy Policy_, that administrators need to define when they create their instance. There will also now be an optional _Terms of Service_. To help you get started, we’re providing a generator (based on a template from our own law firm). The effective change date of the Terms of Service will be included, to allow users to review them before taking any action.

If you operate a Mastodon instance, you should decide whether you need a Terms of Service - it _may_ not apply if you run a single-user instance where you are the only user, for example. If you do need one, you should look through the text that is provided by the generator, and decide whether this is appropriate for your server and jurisdiction (i.e. for the laws of the country where your server is located).

On the client side, there is [a new API for developers to fetch and display a server’s Terms of Service](https://docs.joinmastodon.org/methods/instance/#terms_of_service) (including versions and effective dates) inside their apps. We’ve also enhanced the [information provided in the instance data](https://docs.joinmastodon.org/entities/Instance/#terms_of_service), to provide the URLs for the Terms of Service and Privacy Policy.

## Server rules translations

We’re providing the ability for server rules to be translated into multiple languages. This means that the rules which apply to everyone that uses your Mastodon instance, will now be able to be read in different languages, as appropriate for your user base.

Administrators will now be able to optionally provide translations for each rule in the server settings. If no translated version is provided for a given language, the default text for that rule will be used instead.

The API has been [updated](https://docs.joinmastodon.org/entities/Rule/#translations) in version 4.4, the rules will now be returned with translations where these apply. Developers will need to update their apps to use translations where available (our own apps will be updated soon).

## Setting age requirements

We are introducing a new option for server administrators to set a minimum age requirement for user sign-up. When the option is enabled, the Mastodon instance will require a date of birth to be provided when a new account is created. This value will be validated against the minimum age setting, and then discarded.

It is important to note that Mastodon is not implementing age verification. This minimum age check data is not being stored. The feature only enables administrators to specify a baseline age requirement for new accounts on their servers, potentially to comply with local laws, or per their own preferred operating processes.

There’s a change to the sign-up API to support this new feature (previously announced [here](https://github.com/mastodon/mastodon/discussions/34495)). Our own mobile apps already support servers that have a minimum age specified.

## Next steps

The two Mastodon servers that we operate (mastodon.social and mastodon.online) run preview versions of our next major versions, and we’ve started to enable these features there already. If you have an account on one of these servers, you will receive an email in the coming weeks notifying you about the new Terms of Service.

A beta release of Mastodon 4.4 will be available in the coming weeks, and we'll be looking for feedback ahead of the final release. If you’re interested in testing the beta, please keep an eye on our [GitHub repository](https://github.com/mastodon/mastodon).

If you operate a Mastodon instance, we want to point out that there are some recent regulatory changes in different places around the world, that may affect your service depending on where you are located. We’re grateful to our friends at [IFTAS](https://about.iftas.org) for sharing information on these changes - be sure to take a look at [their resources](https://connect.iftas.org/library-category/legal-regulatory/) if you need some guidance around these.

Finally, and very importantly - we want to thank you, for being a part of the Mastodon community. Unlike the legacy centralised networks, Mastodon is not “one size fits all”. It is important that there are many different Mastodon servers, reflecting the diverse groups and cultures around the world. We appreciate your support.

{{< donate >}}
