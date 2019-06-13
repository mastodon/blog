---
title: "The Mastodon Spring Creator’s Release"
subtitle: "What’s in 2.3 for art and photography"
date: 2018-03-14
draft: false
author: gargron
hero: https://cdn-images-1.medium.com/max/2000/1*ZmjuwjpgJWplgio7HyWb_g.png
categories:
- New Features
tags:
- mastodon
- art
- changelog
---

The development of the next version of Mastodon coincided with the reveal of Vero, yet another commercial social network silo backed by millionaires with a shady past. Vero has struck a chord, at least until people [caught on to its background](https://twitter.com/_heyheytyler/status/968301107536523265), and it wasn’t just because of its unlimited marketing budget. It has struck a chord because it promised an alternative to Instagram, which started getting progressively worse for creators after being acquired by Facebook. The algorithmic timelines have led to a reality where your post could either get lucky and be seen by all of Instagram, or never be seen by your own followers.

This led me to think — what are the concrete differences between Instagram and Mastodon, and what prevents people from using Mastodon in the same way as Instagram? When you strip away the user interface, all social networks function more or less the same way: People create posts, follow each other, the posts go to the followers, and there’s varying degrees of taxonomy to categorize and browse those posts. The real difference is in the user interface, and what that interface puts emphasis on. Instagram does not allow posts without a picture or video, and the interface is adjusted to display those pictures and videos; while Mastodon does not allow posts without text, with pictures and videos being optional. And that’s the whole difference.

With that in mind, I asked myself, are there any parts of Mastodon that could be optimized for the Instagram use case, without interfering with how Mastodon works overall? And the answer was yes.

**This release focuses heavily on the artist experience.**

![](https://cdn-images-1.medium.com/max/2000/1*Fv7moc50GJ3pWSloIWgT9g.gif)

Since Mastodon supports a thriving app ecosystem, there are many different ways in which pictures and videos could be displayed to the viewer. To make sure that whatever aspect ratio a thumbnail is displayed in, it doesn’t cut off important bits, the new “crop” function allows you to select a focal point (or “focus” point) on the uploaded picture. That point will always stay in frame.

Although you were already able to pin posts before, this feature is now complete, displaying the pinned posts in the webapp and across servers, and not just the public profile. This allows you to feature your best work, or important links or conversations. Speaking of links, attaching media to a post no longer inserts a URL into the text of the post, and image-only posts are now allowed.

The media gallery in profiles has been reworked, and is now linked prominently in the webapp, on equal footing with the text-focused profile view. It was linked from a dropdown menu before, and as everybody knows, if something is in a dropdown menu, it might as well not exist. The media modal windows now fill more of the screen and support pinch-to-zoom.

A lot has also been done with how Mastodon pages appear in previews on other sites and apps. With a recent update in Discord, Mastodon videos linked there are finally playable inline. Profile pages in search results now display the bio as description, instead of a random status from the profile. Artists and photographers who publish adult content are no longer disadvantaged by not having their pictures appear in the previews.

You can also now backup your entire Mastodon account, including all the images and videos you uploaded, every 7 days.

That’s not all. There’s a lot more, and if you want every detail, you can read the [official changelog](https://github.com/tootsuite/mastodon/releases/tag/v2.3.0) — I’m gradually getting better at writing those in a way that’s understandable to non-developers.

Mastodon is built on open web protocols like ActivityPub, so it is possible that someone will write a piece of software that acts more like Instagram, and it will still integrate with Mastodon seamlessly — that’s how federation works, and we’re already seeing it with Mastodon and [PeerTube](https://medium.com/we-distribute/peertube-decentralized-video-powered-by-activitypub-and-webtorrent-8aaa4c3749d7). But for now, I hope that this release makes artists and photographers feel more at home on the fediverse.

*If you’d like to try Mastodon today, visit [joinmastodon.org](https://joinmastodon.org/#getting-started). You can select “I am an artist” from the dropdown if you’d like to see servers made specifically for art. Unlike some other platforms, it’s free!*
