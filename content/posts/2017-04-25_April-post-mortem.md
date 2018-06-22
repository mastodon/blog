---
title: "April post-mortem"
subtitle: "The rise and rise of Mastodon"
date: 2017-04-25
draft: false
author: gargron
categories:
- Op-Ed
tags:
- mastodon
- post-mortem
---

*This is an update for [my Patreon supporters](https://patreon.com/user?u=619786). It is posted on Medium because of its superiour formatting capabilities.*

So, April, huh. A lot happened. I was putting off writing an update on here because I knew I had to go into detail on all the things that happened, and that’s quite a daunting task. Before I dive into things, a couple short notices:

* The way I work with the GitHub repository has changed. I no longer work directly on the master branch. I (and other volunteers) work on feature branches. Something can only be merged into the master branch through a pull request that receives a review and approval from at least one trusted contributor. This means that the master branch is a lot more stable, and there is a lot more accountability for who does what and when. However, **the master branch is still not a stable enough medium for the (literally) thousands of Mastodon instances running in production**. Therefore, we now do **actual releases** — v1.1, v1.2, v1.2.2 etc. The releases now contain detailed changelogs, linking back to the pull requests in which the changes were made, with a list of all contributors for the release at the bottom. This replaces the changelogs I was publishing on this blog.

* With 666 patrons (hah!) individually managing the sponsors list is no longer viable. I will be automating it from the CSV export in Patreon. This means the sponsors list will be using the username you have on Patreon and link to your Patreon profile.

**So, April, huh**. Twitter changed the reply system, which everybody told them they shouldn’t do, and then removed the iconic egg avatar for new users, and suddenly all of my work of telling people that one day Twitter would do something they didn’t like and they’d need a viable alternative paid off. Mastodon caught on on Infosec Twitter, which is both huge and influential, and (somehow, I do not quite understand how) also French Twitter. France really likes free software and decentralization, as it turns out! Think explosion of users from 20,000 to 42,000 in the span of two days. Most importantly, this offset a wave of press attention, from French journals to tech journals to non-tech journals. I had phone and text interviews with The Verge, Mashable, Wired, Engadget and more. I actually don’t remember exactly, because I chose not to read the resulting (or any) articles for the sake of my mental health. (On the other hand, my mother collected them all). [The Mastodon band has playfully acknowledged the project](https://twitter.com/mastodonmusic/status/849424628401541121). We also witnessed the birth of a meme of a man not being able to be found by William Shattner.

Did I mention that Pixiv, the Japanese artist gallery company (sort of like deviantArt, but better) has opened its own Mastodon instance, Pawoo.net? They even made their own version of the Mastodon mascot. They have already contributed back some cool performance improvements, as well.

{{< figure src="https://cdn-images-1.medium.com/max/2000/1*ovH0iFCU303mZgRCd6S5gg.jpeg" caption="Pawoo’s elephant friend" >}}

At the time of writing, the Mastodon network includes more than 486,767 users spread out among more than a 1,212 instances. That’s how far we’ve come. But it’s not just that. A lot more people have learned and become interested in Free and Open Software and decentralization. The GitHub repository has seen an absolute explosion of activity, from bug reports and feature requests (550 at the time of writing) to code and translation contributions from the community. Many people started learning Ruby/Rails and JavaScript/React.js to be able to participate. I feel like there is a lot more documentation on how to deploy a Rails application on the Internet than there was before Mastodon.

Success brings challenges. Insane new loads on mastodon.social were reason for multiple optimizations and bug fixes, speeding up performance hotspots by more than two times, as well as exploration of more complicated deployment techniques (e.g. pgBouncer). The hardest challenges are organizational rather than technical. Tending to the bug tracker, support questions, reviewing and merging pull requests is all a huge responsibility and time sink.
Furthermore, there are other tasks like communicating the roadmap for the near future, community outreach, and coordinating efforts from contributors that I feel myself ridiculously overwhelmed by. My personal philosophy of “announce when it’s done, promise nothing” may be good for positively surprising people after the fact, but pretty bad for managing a project and people’s morale.

Seeing the Patreon pledge at over $3,000 means a lot to me. First of all, and this has come up a lot, so I feel like mentioning it — Patreon distributes the pledges on 1st of each month. That means I have seen nothing from all the new pledges yet — from last month I received about $700, which was less than my living and hosting costs. So any articles talking about me making a comfortable $3k/mo are a bit premature on that front, and ignore all the past months I was working full-time on less than a living wage.
With that out of the way, the new budget allows me more wiggling room in hosting options of mastodon.social, makes my dad worry less about me not working for another company like all the other people, and **will hopefully allow me to hire additional staff for the aforemention tasks like project management and community outreach**.

On a somewhat related topic, people love fluffy elephant friend, and there were a lot of calls for merchandise. That’s another way the project can be supported financially, with the added benefit of spreading awareness of it. I am still waiting on my artist friend to free up to work on new high-res artwork for t-shirts, but I have published an official sticker with the iconic cutie:

![](https://cdn-images-1.medium.com/max/9216/1*6iV1inXI_ADZjAwrPfLs-A.jpeg)

To conclude, here is the list of releases published since my last Patreon update mid-March:

* [v1.1](https://github.com/tootsuite/mastodon/releases/tag/v1.1)
* [v1.1.1](https://github.com/tootsuite/mastodon/releases/tag/v1.1.1)
* [v1.1.2](https://github.com/tootsuite/mastodon/releases/tag/v1.1.2)
* [v1.2](https://github.com/tootsuite/mastodon/releases/tag/v1.2)
* [v1.2.1](https://github.com/tootsuite/mastodon/releases/tag/v1.2.1)
* [v1.2.2](https://github.com/tootsuite/mastodon/releases/tag/v1.2.2)

The above links will take you to the detailed changelogs, but here are the most prominent changes summarized:

* Direct messages
* Avatars now finally hover-to-play
* Option to disable all GIF autoplay
* Option for confirmation dialogs for boosts
* Confirmation dialogs for deleting/blocking/muting
* Videos can be expanded
* Improved search UI, ability to open remote statuses by pasting their permalink URL into the search
* Two-factor authentication now requires one confirmation before activation, recovery codes added
* Admin UI for domain blocks has been introduced (and improved in general)
* An onboarding modal to greet new users and explain the basics
* Localization and translations have been improved and expanded respectively
* Various bug fixes, performance improvements and UX polishing

A public road map for the future is being worked on, but it’s safe to say now that the next release will be v1.3 (minor release) and not a patch release due to the amount of new features in the pipeline.
