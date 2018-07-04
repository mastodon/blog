---
title: "Cage the Mastodon"
subtitle: "An overview of features for dealing with abuse and harassment"
date: 2018-07-05
draft: true
author: gargron
categories:
- Guides
tags:
- mastodon
- abuse
---

A year ago I wrote about Mastodon's [features for dealing with abuse and harassment that were improvements over Twitter's status quo]({{<< ref "posts/2017-03-03_Learning-from-Twitter-s-mistakes.md" >>}}). Development in that area has not been standing still, and it's about time we do another comparison.

First, a refresher on the fundamentals, which haven't changed: Mastodon is decentralized between independently-operated servers. These servers each have a separate admin, and possibly a moderation team, as well as their own code of conduct. From that follows that:

* You can be with a community that resonates with your values and ideas of moderation
* The ratio of "everyone" to "people who can handle abuse reports" is much, much higher than on any centralized service
* The moderation team of your server, be it just one admin or multiple people, is a lot closer to you and more approachable and can therefore take abuse seriously

So that's already a huge advantage over other platforms due the basic design. And in my opinion it's got advantages over the other extreme, too, a pure peer-to-peer design, where everyone would have to fend for themselves, without the pooled resources. However, there's more.

### Design decisions

Before I proceed, I need to delineate that the following design decisions are more about what the software nudges you towards, rather than a tamper-proof barrier against some behaviours, which is not possible. **Mastodon deliberately does not support arbitrary search**. If someone wants their message to be discovered, they can use a hashtag, which can be browsed. What does arbitrary search accomplish? People and brands search for their own name to self-insert into conversations they were not invited to.

What you can do, however, is search messages you posted, received or favourited. That way you can find that one message on the tip of your tongue.

Another feature that has been requested almost since the start, and which I keep rejecting is **quoting messages**. Coming back to my disclaimer, of course it's impossible to prevent people from sharing screenshots or linking to public resources, but quoting messages is *immediately actionable*. It makes it a lot easier for people to immediately engage with the quoted content... and it usually doesn't lead to anything good. When people use quotes to reply to other people, conversations become performative power plays. "Heed, my followers, how I dunk on this fool!" When you use the reply function, your message is broadcast only to people who happen to follow you both. It means one person's follower count doesn't play a massive role in the conversation. A quote, on the other hand, very often invites the followers to join in on the conversation, and whoever has got more of them ends up having the upper hand and massively stressing out the other person.

Twitter forces you to choose between two extremes, a protected account and a fully public account. If you have a public account, all your tweets are visible to everyone and infinitely shareable. Mastodon realizes that it's not something you might always want, though. **Each individual message can either be**:

- Fully public, appearing to your followers, the firehose, anyone looking at your profile
- Unlisted, appearing to your followers and anyone looking at your profile, but skipping the firehose
- Private, appearing only to your followers and people mentioned in it
- And direct, appearing only to people mentioned in it

Unlisted messages are perfect if you want to be just a little low-key and not attract strangers to interact with you; private is great when you don't want your messages easily shared around. Each choice can be set as the default. And of course, on top of that, **you can "lock" your account**: Locking prevents people from being able to follow you without you getting a chance to say yes or no first.

Mastodon has a lists feature for categorizing the people you are following and making your home feed more readable by essentially splitting into multiple ones, but unlike on Twitter, **you cannot add someone to a list unless you are already following them**, and the lists are personal, not public.

### Hiding things

Mastodon offers a massive amount of ways to hide unwanted content from your eyes. Are strangers bothering you? You can **block notifications from people you don't follow**. You don't want someone to easily see your posts, as well as forgetting they exist? The good old **block** function is there. It hides notifications from the person, it hides any messages that mention the person, it hides other people sharing that person's messages. Want the same thing, but for them to not know they've been blocked? That's the **mute** function.

Are you tired of receiving responses to one of your posts? You can **mute the conversation** and forget about it. And if you notice that you're muting a lot of people from the same Mastodon server, and there's no end to it, you can **hide everything from a specific domain**. That will hide all of their posts and remove any followers you might have had from that server so they no longer receive your posts, either.

When you want to tune out of a specific topic for a time or forever, **you can add text filters**. They will match keywords or phrases in the posts and hide those posts from you, either everywhere or in specific contexts only.

On the other end, **you can hide your messages behind content warnings**, for example if you want to discuss the events of the last episode of some show or a book. And rather than dooming your entire account to be "sensitive" like on Twitter, where it's hidden from everyone who hasn't opted to look at sensitive content, on Mastodon **you can hide media uploads only in specific posts** (or, of course, set it as the default).

You can also hide the list of people you are following and who follow you from your profile.

### Moderation tools

When someone's breaking a servers rules, it's no longer a matter of just hiding them from your personal sight--that's where moderation steps in. Mastodon has a report function, in which you can report an account to the server's administration, optionally specifying a message and choosing which of their posts to include in the report as examples. If the reported person resides on a different Mastodon server, you also have the option of anonymously forwarding a copy of the report to the admins of that server, since they might also be interested in knowing about an offender.

Mastodon's moderation system is very similar to that of a forum. It supports two administratives roles: moderators and admins. When a report comes in, both groups get a notification e-mail and can proceed to either:

- Ignore the report if it's unsubstantiated
- Leave notes for the account that other staff members can see
- Delete the offending posts
- Sandbox the account so nobody who isn't already following them can see their posts
- Disable access to the account temporarily
- Remove the account and all of its data permanently

It doesn't matter if the offending account is on your server or a different one, these measures are contained within your server, which is how servers with different policies can co-exist on the network: You moderate according to yours, I moderate according to mine.

If there is a server fundamentally opposed to yours, like one dedicated to white supremacy, or one that refuses to keep its offenders in check so moderating them on your end individually ends up being too much work, there is an option to either sandbox or block an entire domain.

### Conclusion

Wherever people meet, there will be disagreements and trouble. Maintaining communities that feel safe for all of its members is not easy. Mastodon provides a lot of foundational framework and tools for doing it, and shifts the power to effect change from one commercial entity to the communities themselves.