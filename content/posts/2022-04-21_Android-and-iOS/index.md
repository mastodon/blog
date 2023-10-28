---
title: "Official apps now available for iOS and Android"
subtitle: "A smoother Mastodon experience"
description: "Mastodon is now available on Google Play Store and the Apple App Store. Read about some of the design decisions we made for these apps!"
date: 2022-04-21
draft: false
author: gargron
tags:
- mastodon
- app
- android
- ios
categories:
- Product Launch
resources:
- name: hero
  src: hero.png
---

{{< app-download-links >}}

With the release of our Android app on the Play Store we are now present on both major mobile platforms. The apps are gaining overwhelmingly positive reviews, some even going so far as to claim that [our onboarding is smoother than any other social media platform's](https://bilge.world/mastodon-ios-app-review); our iOS app is rising through the ranks of top social networking apps on the App Store; and for the first time in Mastodon's history, server admins are seeing ever increasing numbers of new sign-ups from mobile apps instead of the web interface.

We hope the trend continues now that people can easily find the app and sign-up by simply searching Mastodon on their app store of choice, and now that Mastodon can take advantage of the app stores' own discovery features.

We've put a lot of care and resources into developing these apps, counter-acting the stigma that open-source projects do not prioritize ease of use and visual design by working with world-class UX designers that had prior experience working on major commercial social networks. As a result, we have apps that are extremely slick and visually pleasing and do not look out of place on their respective platforms.

This is an opportunity to take a closer look at some of the design considerations.

### Onboarding

{{< figure src="onboarding.png" caption="Signing up in the Android app" >}}

One of the challenges of Mastodon adoption is the onboarding process, because it's not enough to capture a person's desired username and e-mail and let them create an account, which is what people are used to from major websites; instead, you need to first choose a Mastodon server where you will make the account (comparable to e.g. choosing an e-mail provider). The implications of choosing the server are primarily in who is the entity responsible for the server, what moderation policies they enforce, what language and jurisdiction they operate in, and which domain name will be part of your username.

We approached this problem with a multiple-step sign-up flow that begins with choosing a server, then requires to agree to summarized moderation policies of the server, and finally goes on to the more familiar username, e-mail and password form. We maintain our own directory of servers that people submit to us after agreeing to some basic rules that guarantee data and user safety and quality of service; those are the servers we display on the first step by default. Still more consideration has been given to how to display them.

Our user studies have shown that retention drops off dramatically if the user has to wait for moderator approval before being able to log in (exception being experienced Mastodon users who are already invested in the network and know exactly what they are getting into by requesting an account from an invite-only server); people lose interest and never login even after being approved. Therefore we do not show invite-only servers in the app, focusing instead on the ones that allow people to get started immediately.

The determining factor in a user's experience on a server is the number of other active users on the server. All discovery features are ultimately powered by user activity, and the first user on a server would have to do a lot of exploration off-site (through word of mouth, browsing other servers, or other channels) to fill their home feed. But cultivating a decentralized social network, we do not want power to concentrate on just a few ever-growing servers. Therefore, rather than simply putting the most active servers on the top, our algorithm pushes medium-sized servers higher.

We also provide a search field that allows inputting the server domain directly.

The last step in onboarding, after the user has confirmed their e-mail address, they are presented with the options to follow a selection of accounts popular on the server that predominantly post in the user's language, or to head to the explore tab to look at what's trending on the server.

### Discovery

{{< figure src="explore.png" caption="Explore tab in the Android app" >}}

While designing the official apps we got an opportunity to reconsider some Mastodon features. The federated timeline, also known as the public timeline, firehose, or "whole known network", is a view into a Mastodon server's real-time database of public posts; and the local timeline is that, but filtered by only posts originating from your Mastodon server. While some people came to rely on those tools, there were a few reasons to (at least initially) omit them from the apps.

The federated timeline has too low of a signal vs. noise ratio to be effective as a discovery tool. Due to the way Mastodon pulls down content to provide more detailed profiles and conversations, the federated timeline becomes unmanageable on servers of all sizes, even single-user ones. Unsurprisingly, most content is not actually worth looking at, and in some cases, actively undesirable.

This real-time view into everything that's published on the server is a platform for all sorts of abuse that can only be stopped after the damage has been done. Normally, if someone posts spam or nudity, it would not be seen by anyone but themselves. Local and federated timelines instantly turn that into an issue affecting everyone. This puts extra strain on moderators.

With Apple and Google historically holding apps accountable for content users can access through the app, even when the app could be reasonably classified as a browser, showing unfiltered content is a ticking time bomb for the app's presence on the major app stores. Especially considering our goal of attracting new users, those users are of-yet less invested in Mastodon as a platform and less likely to use in-app reporting and blocking tools instead of giving up on the app.

Instead, we offer a new explore tab that highlights, among other things, currently popular posts. It is a much more efficient way to find interesting content and follow users on Mastodon without scrolling through many low-quality posts and unfamiliar languages. All data that Mastodon uses for calculating rankings is locally sourced so it's heavily skewed towards things that are popular on your server, and everything goes through your server's moderators before appearing on the explore tab, making it much less prone to abuse.

We also have a vision of a new feature to eventually supplant local timelines: groups. We imagine a group as a place with an actually separate timeline that you can post to, without the post also going out to the public, your profile, and your followers' home feeds. This timeline could be made visible for group members only. You could join it from your account on any other server, thus alleviating concerns of infrastructure centralization while giving people everything they've ever wanted from local timelines. We're set to complete this feature this year.

### Going forward

We are not done! While we have decided against including the local timeline in our apps initially, understanding that this feature is important for many community servers on Mastodon in the absence of still theoretical and not yet proven groups, we will be adding it to the explore tab. And while the apps support all core functionality of Mastodon, there are still missing features like lists, pinned posts, new post notifications ("bell icon!"), editing, phrase filters management and so on that will be gradually added as we continue development. Plus the aforementioned groups feature in Mastodon itself!
