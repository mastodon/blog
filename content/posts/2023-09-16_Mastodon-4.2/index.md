---
title: "Mastodon 4.2"
subtitle: "A new search experience and more!"
description: "In this massive update we've added search and removed friction. What's not to love?"
date: 2023-09-21
author: gargron
draft: true
tags:
- mastodon
- changelog
categories:
- New Features
resources:
- name: hero
  src: hero.png
---

As Mastodon continues to grow, we’d like to make sure we’re doing all we can to help you connect with your friends and your interests. Most importantly, we want to bring you features that make it much easier to connect with people that matter to you.

In this version we overhauled search. The interface for searching is completely new and inspired by the app Ivory—as you type, a popout provides you with quick actions, such as, go directly to hashtag, search only for profiles, or, when writing or pasting a URL, open URL in Mastodon. Your recent searches are now available for quick access, and search results use infinite scroll. That’s only the surface—we reworked and fine-tuned all of the data indexes to make searching for people’s profiles more intuitive, so you can now find people by words in their bio and not only their name. In order to make it easier to distinguish the results you’re looking for from impersonators or third-party bots, we’re now surfacing verified links prominently in the search results. The most exciting news is that for the first time, you can now search for posts. We support a wide variety of operators to help you narrow down your search, such as only retrieving posts that have an embedded link, or a poll, or is from a specific user, or posted between specific dates. Correspondingly, we’ve reworked settings to assemble all privacy choices in one place to provide an easy overview, so you can control if you want your posts to appear in search or on the Explore page—both are opt-in.

<video src="search.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

Speaking of overhaul, we’ve also polished and adjusted many details in Mastodon’s web interface, such as adding more thread indicators, making article previews more beautiful, and removing cropping from image previews. By far the biggest changes are to the sign-up flow and what users see the first time they login after sign-up. User tests have helped us to identify areas where people lose their way during sign-up, so we’ve added progress indicators to guide people through the multi-step sign-up process and rewrote copy and labels to be more intuitive. Upon login, you are pointed to recommended first steps that include filling our your profile, following people, making your first post, and sharing your profile outside Mastodon. After deploying these changes on our own servers, we’ve noticed an increase in the average number of profiles a new user follows from 2.6 to 6.8. This number is one of primary indicators of a successful onboarding, as the home feed is the center point of Mastodon. For comparison, the average number of profiles a new user follows after signing up through our official Android app is around 8.

<video src="onboarding.mp4
" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

We’ve also revamped the interaction experience when you’re logged out. When people land on a Mastodon server other than their own—for example, when following a link shared through an instant messenger—they find themselves on a website that does not know who they are, and therefore cannot allow them to perform certain actions they can perform through the logged-in interface. To perform those actions, we must take them back to that logged-in interface. Previously, we overestimated how often such a scenario would occur to someone who’s on their own Mastodon server but isn’t logged-in, and overemphasized the login option. At the same time, we offered instructions on how to get to the given profile or post in the user’s own Mastodon server or app using copying and pasting URLs to the search box, which ended up being confusing, and perceived as overly complicated. In the new experience, you are asked to type in the domain of your Mastodon “home” while being offered autocomplete as you type, and are then redirected to the given post or profile in your logged-in interface.

<video src="interaction.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

All of these changes will be available to you once your Mastodon server operator upgrades to this new version. If you’re new to Mastodon, there is no easier place to start than simply signing up on mastodon.social, either from the web, or by downloading our official app for iOS or Android.

We’re excited to bring you these major improvements today and have much more we’d like to bring in the future. Thanks to all of you who have supported and continue to support our Patreon. You make it possible for us to continue to invest in and build more new experiences on Mastodon.

{{< donate >}}

### Other changes

We've changed so many things, but here are just some of our favourites...

- Search results now load more results as you scroll, just like other feeds
- Search results are generally better in a lot of tiny technical ways
- Boosts no longer pollute the Posts and Replies tab on profiles
- Server administrators and custom role enjoyers have new badges on their profiles
- Link cards have a new design featuring more details
- Polls finally have a button to see results without voting
- Pictures and videos are no longer cropped to 16:9 in feeds
- Edit profile screen has been refurbished
- New Privacy and Reach tab to control all the privacy and reach preferences
- Dropdowns look fresher, dangerous options tinted red
- Bot be gone, it’s “Automated” profile now
- Media with alternative text now features ALT badge
- Reply chains are now connected with lines for easier reading
- Search can now be found more easily on small screens
- Clicking usernames in people’s bios no longer takes you out of the interface
- Direct Messages now called Private Mentions for consistency
- Local and federated timelines have been moved to Live Feeds
- New option to not see posts from your lists on your Home Feed
- Hashtags at the end of posts now display as a hashtag bar
- Higher resolution and quality for uploaded images and videos
- Lots of minor color and typography adjustments to make Mastodon feel slick
- Lots of optimizations and performance improvements
