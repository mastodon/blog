---
title: "If you could edit tweets"
subtitle: "What’s new in Mastodon 2.4"
date: 2018-06-19
draft: false
author: gargron
categories:
- New Features
tags:
- mastodon
---

A fresh new release of the federated social network software is here, and while the primary focus of it has been on fixing bugs and improving performance, it brings a couple of notable new features to the board.

### Delete & Redraft

There are legitimate reasons why social media platforms rarely, if ever, have an editing function. In an environment where content spreads like wildfire in a matter of minutes, you could easily conceive of nefarious misuses such as creating a post about something agreeable and positive, and, once it reaches critical mass, changing the content to something malicious.

Credit where credit’s due, people have come up with a compromise a long time ago. For example, the Better Tweetdeck browser extension includes an edit function that essentially takes the contents of a tweet, deletes the tweet, and pre-fills the compose screen with the old contents ready for editing.

**Mastodon has adopted this Delete & Redraft function, with a slight change that allows us to avoid re-uploading the media altogether, so we can re-use it directly.**

![](https://cdn-images-1.medium.com/max/2000/1*eNMEH8zqbnZ9PlD865zvxg.png)

### Hide network

You can find out a lot about a person by looking at who that person associates with. Some people are more vulnerable to this than others, like dissidents, activists and people from persecuted groups.

In a social network, associations are important for other purposes, too. Finding good content by looking at who your friends follow, or confirming that an account is not a bot or sockpuppet by looking at who follows them. Still, **Mastodon now has an option to hide who you follow and who follows you from your profile.**

Of course, that isn’t perfect — the people you follow, and the people who follow *also *have profiles… But it’s at least a small obstacle to unsolicited data collection.

![](https://cdn-images-1.medium.com/max/2000/1*MHHC2NRdzytfTL6NL7mWjA.jpeg)

### Language filtering

Language filtering is vastly improved. When we released the feature, our community only had a handful of languages, and the language detection algorithm had a high rate of wrong guesses, which meant it was safer to err on the side of opting out of unfamiliar languages, rather than limiting your timelines to some particular language. Nowadays, Mastodon is extremely diverse, so the average person who speaks only their native tongue would have to go to the preferences screen and tick more than 20 boxes just to see only toots that they would understand. That’s obviously not how it should be.

**We’ve added the ability for people to select a default language for their toots to override automatic detection (therefore reducing false positives) and we turned the opt-out system around into an opt-in one**. Now, on the preferences screen, you only need to tick the boxes of the languages you want to see.

### Friend finding

The biggest challenge of any social network is, unsurprisingly, the “network effect”. It becomes more useful the more people that you care about are on it. Another one is surfacing interesting content, which is tangentially related, but a topic for another article/release.

We are adding a more prominent link to “Find Twitter friends” to the UI. The tool in question is called the [Mastodon Bridge](https://bridge.joinmastodon.org): **By having people sign in using their Twitter account and their Mastodon account, we can create a mapping between the two, and by checking the Twitter friend data, we can tell people who of their friends is on Mastodon, with a convenient “follow all” button.**

![](https://cdn-images-1.medium.com/max/2000/1*TDSbOXA2-c6JMD5BFB0aMA.jpeg)

There is a very common pattern where people would say to follow them on Mastodon, either on Twitter, Facebook, or another platform that was their primary. People who would listen to that would have to find a server, sign up, then find the person in the UI and finally follow them. We’re adding a new feature to roll all of that into one action: **You can now create personalized invite links. Send the invite link to your old friends and followers, and they will be able to sign up on the same server as you and automatically follow you straight away.** (Please mind that invites have to be enabled by your server admin — some have reasons not to allow that. Look out for the “Invite people” link in the UI, as it appears when the function is enabled)

![](https://cdn-images-1.medium.com/max/2000/1*PSeXkqRudSnlXds1zOdN3A.jpeg)

**To get started with Mastodon, you can [sign up for free here](https://mastodon.social/about) or [here](https://mstdn.io/about), or dive into the deep end of choice [by browsing the list of servers here](https://joinmastodon.org/#getting-started). Or, [use the bridge tool to find where your Twitter friends are](https://bridge.joinmastodon.org) and sign up there.**

Huge thanks to everyone who contributed to the recent releases ([see the full changelogs for accreditation](https://github.com/tootsuite/mastodon/releases/tag/v2.4.0)), to [everyone who sponsors](https://joinmastodon.org/sponsors) the project, and to everyone who makes the network worth using by being awesome tooters! 🐘
