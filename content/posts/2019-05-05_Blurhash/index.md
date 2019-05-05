---
title: What is Blurhash?
author: gargron
date: 2019-05-05
draft: true
tags:
- mastodon
categories:
- New Features
---

The latest point release of Mastodon (2.8.1) adds a small new feature that might have a significant impact on all adult content creators on the platform. The feature has a fancy, memorable name: Blurhash. But first, let's talk about how adult content works on Mastodon.

Mastodon allows you to put content warnings on post. These can be textual, hiding the text content, for example if you want to talk about spoilers or something uncomfortable for other people. Images and videos can be hidden as well, even while leaving the text visible. When the images and videos are hidden, you only see a black box where they would be, that can be clicked to show them.

Beyond providing visual protection against say, co-workers looking over your shoulder to see something inappropriate on your screen, Mastodon also does not load said images or videos at all until you choose to unhide them, which helps if it's important that inappropriate content is not stored in your browser's cache. But there is a drawback. Every post with hidden media looks the same. They all blend together. Especially in public timelines, which provide a stream of all public posts that people use to explore Mastodon outside of their friend circle. As a result, posts with hidden media usually get less interactions.

{{< figure src="blurhash-demo-cat.png" caption="Side-by-side comparison of the original picture of Doris (cat) and the generated blurhash, which is the string `KJG8_@Dgx]_4V?xuyE%NRj`" >}}

Here comes Blurhash. Developed by [Dag Ågren][WAHa_06x36], who is behind the popular iOS app for Mastodon, [Toot!][toot], it is an algorithm that compresses a picture into a short string of letters. The string is so small that there is no problem with saving it in the database, instead of as an image file, and conversely, sending it along with API responses. That means that string is available before any image files are loaded by the browser. You can see where this is going... When you decode the string back into an image, you get a gradient of colors used in the original image.

So little information is transmitted through blurhash that is is safe to display even if the underlying content is inappropriate, and the resulting gradient is pleasant to look at. Even more importantly, it's different for each image, making posts with hidden media look different from each other, which should hopefully increases their chances of getting noticed. But that's not all! Even for posts where images and videos are not supposed to be hidden, it provides a pleasant placeholder while the much heavier image files are loaded by the browser.

If you would like to use Blurhash in your project, there is a [Ruby port][ruby] on RubyGems and a [JavaScript port][javascript] on NPM. More are to be published by [Dag Ågren][WAHa_06x36] in the future!

[WAHa_06x36]: https://mastodon.social/@WAHa_06x36
[toot]: https://itunes.apple.com/app/toot/id1229021451?ls=1&mt=8
[ruby]: https://rubygems.org/gems/blurhash
[javascript]: https://www.npmjs.com/package/blurhash
