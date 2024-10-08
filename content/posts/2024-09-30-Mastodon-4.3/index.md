---
title: "Mastodon 4.3"
subtitle: "New safety and discovery tools and a refreshed look"
description: "Grouped notifications, notification filtering, better onboarding and a refreshed look await in this new release of our decentralized open-source social media software."
author: gargron
draft: false
date: 2024-10-08
categories:
- New Features
tags:
- mastodon
- changelog
resources:
- name: hero
  src: hero.png
---

Mastodon 4.3 just landed! If you’re a [mastodon.social](https://mastodon.social) user, you might have already seen some of this in action as we’ve been gradually rolling out these updates over the course of the last 11 months in nightly releases, but we’re finally making a new stable release available to the community. If you use a different server, you will get access to these improvements once your server operator upgrades.

### Notifications

On Mastodon, your experience depends a lot on the moderation style of the server that hosts your account, but your unique ability to choose a server that suits your needs the best is useless if you don’t have much insight into how moderation decisions impact you. If a moderator decision results in you losing followers, or no longer being able to follow people from another server, you will now be notified and have the ability to export a list of the affected profiles.

Also, if a moderator decision targets your account specifically, you will now receive an in-app notification so you can’t miss it.

We’re also bringing two new major features to help people deal with unwanted attention. Notification grouping has arrived in Mastodon, allowing you to make sense of your notifications even if your posts are going viral. Instead of inundating your screen with hundreds of individual notifications for the same post, you’ll see a summary of how many people boosted or favourited it.

<video src="filtering.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

We’re also introducing a brand new system for filtering unwanted notifications. You get to decide what happens to notifications from people you don’t follow, who aren’t following you, recently created accounts, or unsolicited private mentions. You can either send them to the void immediately, never to be seen again, or put them into a special inbox you can peruse when you want.

### Design

One of the ongoing efforts is to make Mastodon easy and delightful to use. We’ve invested a significant amount of money and time into working with professional designers and performing user testing over the last few years, but we really ramped up our efforts in 2023. Mastodon is quite a large application, and our resources remain very constrained compared to our corporate competitors, but we’ve made significant progress on improving the look and feel of Mastodon across the board.

<video src="compose.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

We have redesigned the new post composer to be much more intuitive to use, to make sure you get your post right the first time. Not only does it look better, but you can now re-arrange media you’ve uploaded as you see fit, and see exactly what layout it will be displayed in. We’ve also made content warnings and word filters easier to notice and expand.

Across the web app, our iconography and color palette got a refresh, link previews look even better, and you can now hover over anyone’s name to peek at their profile and quickly follow or unfollow them. We also redesigned all of the “utility” emails (password resets, follow notifications, etc.) as well as the first welcome email to help you identify what’s most important.

Among various redesigned dialogs, new confirmation dialogs for muting and blocking describe exactly what effects muting and blocking will have. If you are about to block another server, we’ll show you exactly how many followers you would lose to help avoid potential mistakes. In the spirit of surfacing product education in more areas, clicking the domain on someone’s profile now brings up information about Mastodon’s decentralized nature.

### Onboarding and discovery

Helping new users get started on Mastodon has been a key focus for us over the past few years. We found that people would skip follow recommendations during onboarding and end up with a boring feed that doesn’t offer anything new for hours or days.

We value the user’s agency over what is shown in the home feed, and pride ourselves on being a reliable platform to keep up with the people you care about without opaque algorithms randomizing which things you see in which order. This presents a challenge when other platforms have created an expectation that the user only has to passively consume what is generated for them instead of actively curating what they want to see.

On Mastodon, you need to follow people or hashtags to see them in your home feed. To bridge the gap for people who fly past the onboarding, we’ve introduced a little carousel with follow recommendations that will appear above the first post older than four hours on the first page of your home feed.

<video src="carousel.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

We’ve also significantly improved the system of follow recommendations as a whole, mixing generalized results like profiles popular in your language with personalized ones like profiles that a lot of the people you follow, follow. For added transparency, the reason for the recommendation is displayed along with it.

### Helping writers and journalists

In this version we’re introducing a new way to highlight writers and journalists on the fediverse. By adding a single line to their HTML, publishers can feature the fediverse profile of the page author in the link previews on Mastodon. That way, when lots of different people are sharing the link, or the link is trending in the News tab, you can easily navigate to the author’s fediverse profile and follow them right from within Mastodon to receive future updates. Publications like The Verge and TechCrunch are already using this.

<video src="author.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

We’ve also put a fresh coat of paint on our website embeds. You’ve always been able to embed a Mastodon post on your own website, but we’ve made them look a lot better and gave them a more graceful fallback when the source is slow to load or no longer available. Of course, the dialog for embedding a post now looks a lot better as well, offering a simple click to copy button. Keep in mind that you can only embed posts that are public!

### What’s next?

Now that 4.3 is done, our focus for the next release will be on implementing the highly requested features of quote posts, as well as the ability for server operators to subscribe to managed blocklists, which along with our new initiative of [pluggable fediverse discovery providers](https://fediscovery.org) should make running small and medium-sized fediverse servers much more viable; and with Ghost entering the fediverse, further improving how long-form content from other fediverse platforms is displayed within Mastodon.

We are extremely grateful to everyone who supports Mastodon through Patreon, our 501(c)3 in the US, and other means. Unlike our competitors, we don’t take venture capital, don’t sell ads and don’t sell your data. While other social media platforms have teams of hundreds of engineers working on them, we operate on less than 500K USD annually with a team of only 4 full-time employees, and a number of contractors. If you’d like to see the pace of development increase, **please consider chipping in** so we can hire more people!

{{< donate >}}

### In other news

<video src="plushie.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

The Mastodon stuffed toy is *almost* ready to go on sale. We're waiting for the shipments to arrive at the warehouse. Find out more in the [original announcement]({{< relref path="2024-04-13_Plushie/index.md" >}}).
