---
title: "Highlighting journalism on Mastodon"
subtitle: "A new feature for media organizations, journalists and bloggers"
description: "Today we're launching a new feature that will highlight writers and journalists that are active on the fediverse when their articles are being shared."
date: 2024-07-02
draft: false
author: gargron
tags:
- mastodon
- changelog
- media
categories:
- New Features
resources:
- name: hero
  src: hero.png
---

To reinforce and encourage Mastodon as the go-to place for journalism, we’re launching a new feature today. You will notice that underneath some links shared on Mastodon, the author byline can be clicked to open the author’s associated fediverse account, right in the app. This highlights writers and journalists that are active on the fediverse, and makes it easier than ever to follow them and keep up with their future work—potentially across different publications. Writers often work with different publishers over the span of their careers, but Mastodon is the perfect platform to amass a loyal audience that you, as the author, truly own, and can take with you across the fediverse.

Some of the first websites adopting this feature are The Verge, MacStories, and MacRumors. If you have an account on [mastodon.social](http://mastodon.social) and use the web version or one of our official mobile apps, you will see associated fediverse accounts underneath their articles, no matter who posts them. Of course, it’s also part of Mastodon’s API, so we expect to see support among the vast array of third party apps for Mastodon as well. All Mastodon features are always available to all third-party apps since the API that powers the web version and the official mobile apps is the exact same for everyone.

{{< figure src="screenshot-web-story.png" >}}

<div class="grid grid-cols-2 gap-4 not-prose my-8">
  <div class="col-span-1">{{< figure src="screenshot-web-link1.png" >}}</div>
  <div class="col-span-1">{{< figure src="screenshot-web-link2.png" >}}</div>
</div>

### The technical

We’ve decided to create a new kind of OpenGraph tag—the same kind of tags you have on your website to determine which thumbnail image will appear on the preview for the page when shared on Discord, iMessage, or Mastodon. It looks like this: `<meta name="fediverse:creator" content="@Gargron@mastodon.social" />`.

The handle can be any fediverse account, not just Mastodon. That includes Flipboard, Threads, WordPress (with the ActivityPub plugin installed), PeerTube, Pixelfed, and many others. It will work with and without the leading at-symbol for the handle. If multiple tags are present on the page, the first one will be displayed, but we may add support for showing multiple authors in the future. We intend to propose a specification draft for other ActivityPub platforms in the coming weeks.

The support for this tag is currently rolled out on [mastodon.social](http://mastodon.social) and any other server that uses a recent Mastodon nightly release, but the feature will only show up for links to moderator-approved websites. In the future we would like to make the feature available to all without a manual review process. **For now, if you’re part of a news organization, please reach out to us at [hello@joinmastodon.org](mailto:hello@joinmastodon.org) so we can enable it for your website.**
