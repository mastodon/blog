---
title: "5.0: Laying the foundation"
description: "First looks at the upcoming changes to Mastodon’s composer and navigation on web"
date: 2026-08-18
categories:
  - New Features
tags:
  - mastodon
  - engineering
  - design
authors:
  - imani
resources:
  - name: hero
    src: hero.jpg
---

Two weeks ago, we shared insights from Mastodon’s first Discovery Week and how it’s informing our roadmap. Today, we’re offering a deeper dive on what’s in store for Mastodon 5.0 – not an exhaustive list of changes, but a glimpse into major decisions and the thoughts behind them.

<blockquote class="info">
Note: This article contains mockups and screenshots of work currently in development – the final experience may be different from what you see here.
</blockquote>

# Composing posts in 5.0

Discovery Week showed that Mastodon users are generally happy with the composer UI – and the bigger challenges hindering creation are higher-level and often cultural. So, what does it mean to lay a better foundation for composing on Mastodon?

We think it starts with fixing what’s obviously broken: The composer has limited real estate, and users are often wildly unclear about their visibility and interaction settings when composing.

## The composer breaks free.

The composer window has been confined to Mastodon’s sidebar for 10 years – and we’re finally moving it. In 5.0, the composer opens as a overlay: There when you need it, with plenty of space to create – and hidden when you don’t.

{{< figure video="demo_opening_and_minimising_composer.mp4" caption="Prototype of the upcoming composer menu. In addition to this menu, users can quick-compose a post from a prominent ‘New post’ action in the redesigned main navigation." >}}

## The visibility selector is a dropdown again.

We briefly introduced a visibility settings *modal* in 4.5 alongside the addition of quote posts. At the time, we were trying to offer important context about how quote settings actually worked, how they were impacted by visibility settings, and the various permutations that were possible. And we heard you loud and clear – the modal approach was clunky, and it added friction by forcing both the eye and the cursor to travel farther on the screen.

We knew that the overly explanatory modal was a band-aid fix to a deeper problem: Our visibility settings are downright confusing. Discovery Week confirmed that ‘quiet public’ is particularly misunderstood and that the existing UI doesn’t help users understand the ways that mentions impact who can see their post.

## ‘Quiet public’ leaves the chat.

The setting itself isn’t going anywhere – it’s just now displayed in the UI as a more accurate representation of what it is: A sub-setting applicable to *public* posts that hides the post from search and discovery views.

In other words, you can configure ‘quiet public’ on a public post by simply disabling the setting “Discoverable in public feeds & search results”.

{{< figure src="./image8.jpg" caption="Quiet public represented in the 5.0 composer" >}}

## Quote settings also have a new look.

To make the dropdown pattern work with all permutations of visibility & quotability, *without* over-explaining to the user, we’ve broken down the options into simpler decisions.

Quote settings start with a toggle of ‘Allow others to quote.’ On public posts, the user can toggle on this setting, and then choose whether to allow quotes from everyone or from followers only.

{{< figure video="demo_toggling_on_quote_settings.mp4" caption="Prototype showing how a user can toggle on quote settings to reveal additional options." >}}

Quotes were implemented in a way that when you set your post visibility to followers-only, it means that only you can quote. In the new UI, this is represented by disabling the option ‘Allow others to quote.’

{{< figure video="demo_switching_to_followers_visibility.mp4" caption="Prototype showing that when a user selects ‘Followers’ as the post visibility, the options for discovery and quoting are disabled." >}}

### The visibility selector label also adapts to context.

When you compose a followers-only post and then mention someone who’s not following you, that person still sees your post. Today, this consequence is not obvious in the UI.

In 5.0, the visibility selector’s label updates when you’ve mentioned people in a followers-only post. The name of the first mention is prepended to the label, and if there are multiple mentions, a count is added.

If you’re replying to someone, the OP themself is listed first – regardless of whether you remove the at-mention text from your composer.

{{< figure src="./image1.jpg" caption="Example of a reply-in-progress, with a visibility label that includes the name of the OP and a count of other mentions (”Sage, Your followers + 1 other”)" >}}

# Messaging in 5.0

## Private mentions are now ‘messages’.

[Insights from Discovery Week](/2026/08/discovery-week-2026-what-we-learned-and-what-were-doing-next/) and [previous feedback on Github](https://github.com/mastodon/mastodon/issues/24837) confirmed that the term ‘private mention’ creates more confusion than it alleviates. In 5.0, ‘private mention(s)’ will be renamed ‘message(s)’ throughout the UI. The icon has also changed to a more familiar choice: the chat bubble.

{{< figure src="./image2.jpg" caption="The 5.0 desktop web interface, showing the Messages navigation link and corresponding page." >}}

## DMs are distinguished from posts in the composer.

Users should never worry that they’re publishing something that’s meant to be private. That’s why in 5.0, direct messaging has its own composer. Access it from the Messages page, from a user’s profile, or from the composer button in the bottom right corner of the browser window.

{{< figure src="./image3.jpg" caption="Messaging composer opened, showing a ‘New message’ header, and a clearer label on who sees the message, and a ‘Send’ instead of ‘Publish’ button." >}}

## DMs are also removed from confusing places in the UI.

Starting in 5.0, users will no longer see direct messages in their timeline or profile pages. DMs will be accessible from the Messages page, and nothing changes with notifications.

# Changes to navigation in 5.0

## Navigation is now single-column.

Now that the composer has a new home, we’re able to move all of the important actions to the left navigation.

{{< figure src="./image4.jpg" link="./image4.jpg" target="_blank" caption="Example of the Home page on desktop, with the redesigned navigation." >}}

## We’re de-emphasising the Mastodon logo, and letting the fediverse take the spotlight.

Mastodon is many servers wrapped into one ecosystem – we’re simply providing the infrastructure. In the top left area of the navigation, users on independent servers running on Mastodon 5.0 will see their server’s name (and optional icon) displayed more prominently, with a small ‘Powered by Mastodon’ indicator (shout out to Vivaldi Social for the visual inspiration).

**Server admins:** Add an app icon and a server name under *Preferences > Administration > Server Settings > Branding* to make the most of this experience.

**Future-gazing:** We’re looking at ways to enable custom color schemes, both for end users and for server admins.

{{< figure src="./image5.jpg" caption="Example of the navigation on a fake server, ‘somewhere.social’. The server’s icon appears next to the server name and ‘Powered by Mastodon’ badge." >}}

### Custom feeds now have greater prominence.

Mastodon users can organise the accounts they follow into custom feeds, using a feature that Mastodon has historically called ‘lists’. It’s a powerful feature for controlling one’s timeline, but Discovery Week revealed that it’s also an under-discovered one.

Despite the fact that most Discovery Week participants were overall more orientated to Mastodon than the average person, 1 in 10 was unaware that this functionality existed. We see this lack of awareness in actual feature usage as well: On mastodon.social, 92% of users active in the last year have zero lists.

In 5.0, lists are renamed ‘custom feeds’ and are immediately accessible from the side navigation – not hidden behind an accordion.

{{< figure src="./image6.jpg" caption="Zoomed-in example of 6 custom feeds in the main navigation." >}}

**Future-gazing:** We’d eventually like to allow users to add hashtags and other filter options to these custom feeds, sort or pin custom feeds, and much more.

## Followed hashtags have *less* prominence (for people not already using them).

Many users have requested an ability to follow hashtags but exclude them from their main feed.

It turns out that this functionality already exists (sort of) – it was just hidden in the advanced web UI as a separate, client side feature that only Mastodon’s earliest power users knew about. In fact, it was *so* buried in the interface that most members on our team were unaware it existed or was possible.

What exists: In the advanced web UI, you can pin any hashtag without following it, which creates a new column. From there, you can even combine multiple hashtags or exclude hashtags within that column’s feed.

This is great news. It means we’re further along than we thought on the path to more powerful hashtag-focused timelines. We envision a future, not so long from now, where users can add hashtags to custom feeds and choose whether to include or exclude from their main feed – just like you can do with ‘lists’ of accounts today. We believe we can get there as soon as Mastodon 5.1 or 5.2. In the meantime, though, we’re de-emphasising followed hashtags to avoid guiding users to a version of the feature that we know we’re likely to sunset soon.

What this means practically for 5.0: If you follow any hashtags, you’ll see them in the side navigation. If you don’t, there’s no empty navigational parent item for ‘Followed hashtags’, and no obvious link that page. We’ll also communicate on the ‘Followed hashtags’ page that a better experience is coming soon.

## Page headings are updated for clarity and consistency.

Think header labels, top-level controls, icon choices, etc. These are the little things that add up, and we realized we had at least 12 different headers – many of which used nonstandard icons to communicate what actions are available on the page. In 5.0, we’ve standardised headers to eliminate the guesswork.

By the way, the advanced UI isn’t gone in 5.0 – nor are the local and federated feeds (if enabled on your server).

{{< figure src="./image7.jpg" caption="Example of the Advanced Layout." >}}

# What’s next?

We hope that these changes provide a strong foundation for what’s to come — this is only the beginning!

We’re looking for a few folks who are willing to test a basic prototype of these changes and provide feedback. If you’d like to participate, please fill out [this interest form](https://surveys.joinmastodon.org/s/cmsxb01a2000so501w6mdoz5j).
