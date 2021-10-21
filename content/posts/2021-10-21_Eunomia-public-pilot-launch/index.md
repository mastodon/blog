---
title: "EUNOMIA public pilot launch"
subtitle: "Digital companion for detecting misinformation now available for testing"
date: 2021-10-21
author: gargron
draft: false
tags:
- eunomia
---

On behalf of the EUNOMIA project, in which I represent Mastodon, I am happy to announce that after nearly 3 years of development there is now a public pilot for the Mastodon community.

But first, what is EUNOMIA and who is EUNOMIA? EUNOMIA is a "digital companion" for social media, a set of additional functions that aim to combat the spread of misinformation by helping you critically analyze social media posts before re-sharing them. Currently available functions include:

- Find who a piece of text originally comes from and how it changed as it travelled to your home feed through the information cascade
- See when a post is using highly emotive language through sentiment analysis
- At a glance, see potentially important information about the post author, such as account age
- See whether other users have flagged the post as untrustworthy, and vote yourself

But those functions are only useful when you're already looking at a post in-depth. You can also configure which criteria and thresholds should make the EUNOMIA indicator flash on a post, prompting you that a deeper look is warranted.

EUNOMIA is decentralized and stores its information, such as the aforementioned votes, on [IPFS](https://ipfs.io/), a decentralized storage network. It is also not a commercial product, but an academic research project spearheaded by the University of Greenwich and financed through the European Horizon 2020 program. The team consists of 10 entities: 3 universities, 3 private software development companies, representatives from two social media companies (one of which is yours truly), and the Austrian public broadcasting company ORF.

EUNOMIA should in theory work with any social media platform, but thanks to its already decentralized nature and a fantastic API, [Mastodon lended itself as the perfect prototyping environment](https://blog.joinmastodon.org/2020/08/why-eunomia-builds-on-mastodon/), since it allows the project to develop with its own Mastodon setup that never touches any live user data.

It is important to highlight that as a research project no user data can be processed without explicit user consent and as such EUNOMIA is confined entirely to its own Mastodon servers. One of which is now being opened up for the first public pilot!

The public EUNOMIA pilot is now live at [mastodon.eunomia.social](https://mastodon.eunomia.social/)! The pilot will last one week, unless the developers receive feedback from users that they would want it to stay on for longer. Keep in mind:

- You must be 18 or above to sign-up for the pilot
- There is highly complex tech involved so there probably will be bugs
- The pilot will federate exclusively with another pilot server, decentralized.eunomia.social
- EUNOMIA is available as an app on [iOS](https://apps.apple.com/us/app/eunomia-digital-companion/id1535257247) and [Android](https://play.google.com/store/apps/details?id=gr.uniwa.eee.consert.eunomia.twa)

There is also a quick-start video:

{{< peertube url="https://diode.zone/videos/embed/155c491a-b830-40b2-a405-04221d40fbca" title="EUNOMIA Quick-Start Guide" >}}

You can learn more about EUNOMIA here:

- [EUNOMIA's official website](https://eunomia.social/)
- [EUNOMIA's blog](https://blog.eunomia.social/)
- [Follow EUNOMIA on Mastodon](https://mastodon.social/@Eunomia)