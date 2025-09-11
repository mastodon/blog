---
title: "Introducing quote posts"
subtitle: "We’re expanding ways to engage while preserving author safety."
description: "Over the years, we’ve learned just how essential quoting is to many of you. When done responsibly, quoting allows us to expand discussions, make new connections, and amplify underrepresented voices. Here's how quote posts will work on Mastodon."
date: 2025-09-11
author: mastodon
draft: false
tags:
- mastodon
- changelog
- activitypub
categories:
- New Features
- Product Launch
resources:
- name: hero
  src: hero.png
---

Over the years, we’ve learned just how essential quoting is to many of you. When done responsibly, quoting allows us to expand discussions, make new connections, and amplify underrepresented voices.

Quoting is a powerful tool, and like any tool, it can be misused. That’s why we’ve taken time to introduce quotes in a way that aligns with Mastodon values, focusing on safety and mental health – not just on engagement. We shared our thinking about [bringing quote posts to Mastodon](https://blog.joinmastodon.org/2025/02/bringing-quote-posts-to-mastodon/) earlier in the year.

Found something inspiring? Quote your favourite posts from where you typically boost them. Don’t want to be quoted? Disable quoting by default for all posts, or turn off quoting for a specific post. Want your thoughts to inspire a wider audience? Keep the default setting enabled to ‘Anyone’. **You’re in control of how much or how little you engage.**

Quote post functionality will arrive on [mastodon.online](http://mastodon.online) and [mastodon.social](http://mastodon.social) next week, and will be available in Mastodon 4.5 soon thereafter. Read on for a more detailed look at how quote posts will look and function in Mastodon 4.5.

## You’re in control of who quotes you {#controls}

### Default settings

Disable or limit quotes by navigating to *Settings > Preferences > Posting Defaults*. These defaults will apply to all *future* posts you create.

(Note: if your server is running Mastodon 4.4.x, you will find this setting under *Settings > Preferences > Other* instead)

<video src="defaults.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

Your visibility setting controls options for who can quote. When you make a followers-only post, others (including followers) won’t be able to quote it – this ensures that your post remains visible to only your followers.

### Post-level settings

Override your global settings for an individual post by navigating to *Visibility and interaction settings* within the composer.

<video src="individual-post.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

### Notifications and revocation {#revoke}

When someone quotes one of your posts, you’ll be notified. You can easily remove your quoted post from theirs, using the ••• Options menu.

<video src="revoke.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

Sometimes, removing a single post may not be enough. If you believe someone is abusing the ability to quote you, you can also take the following actions:

- Block the user. While this action won’t retroactively remove your post from posts the user has already published, it will prevent the user from quoting you in future posts.
- Change the quote settings for your published post. The next section outlines how to do this.

### Changing quote settings on a published post

On your own published posts, edit the quote settings from the ••• menu. Changes will prevent users from quoting your post in the future, but will not apply retroactively to quotes already published.

<video src="change-post.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

Only public and quiet public posts can be edited this way, since your followers-only posts and direct mentions can only ever be quoted by you.

## Quote anyone who wants to be quoted

### Quoting from the Boost menu

If an author of a post has enabled quoting, you’ll see an option to quote their post under a new menu accessed from the *Boost* button.
Your post will then appear within the composer window, where you can add your comment and post to continue the discussion.

<video src="initiate.mp4" autoplay playsinline muted loop class="rounded-md shadow-lg"></video>

**Power booster?** You can still boost quickly using `Shift + Click` on the *Boost* button or using the `B` hotkey.

**Quote responsibly.** Authors can remove their post if they’re uncomfortable with the way you’ve quoted them. See [Notifications and Revocation](#revoke) for more details.

### Quoting across the Fediverse {#fediverse}

While Mastodon will automatically approve or reject quotes according to your settings (see [You’re in control of who quotes you](#controls)), other Fediverse software might require manual approval of quotes. This means that when you quote posts from across the Fediverse, it may take time for your quote to appear. When the quote is approved, it will automatically update on your post.

As you may know, we worked on a [technical specification for the Fediverse that offers the concept of consent-respecting quote posts](https://codeberg.org/fediverse/fep/src/branch/main/fep/044f/fep-044f.md). We’ve also collaborated with other apps and services to make this work between platforms. We expect that not every platform will update to use this specification right away, but we hope to see more of them do so in the future.

**Developing a Mastodon client?** Visit our [draft developer implementation guide and documentation](https://github.com/mastodon/documentation/pull/1710).

## Stay tuned

As we mentioned at the start, quote post functionality will arrive on [mastodon.online](http://mastodon.online) and [mastodon.social](http://mastodon.social) next week. If you use a third-party app, the feature may not show up right away, and you may need to wait for the author to add it. It will be available more widely when Mastodon 4.5 is released in the near future.

For more information on how to use quote posts, [have a look at the FAQ section of the documentation](https://docs.joinmastodon.org/user/quote-posts/#faq).

If you’d like to preemptively opt out of being quoted, you can do so on Mastodon 4.4 under *Settings > Preferences > Other*.

We’re committed to making quote posts a tool for meaningful discourse. If you have thoughts on quote posts, reach out to us at [feedback@joinmastodon.org](mailto:feedback@joinmastodon.org). We may not be able to respond to every individual message, but we’ll be reading every piece of feedback to learn more about your ideas.

### Gratitude

We’d like to thank [the NGI Entrust Fund and NLNet](https://nlnet.nl/project/Mastodon-Quoting/) for their support towards building this feature for Mastodon and ActivityPub.
