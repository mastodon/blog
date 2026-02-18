---
title: "Mastodon is for the people"
description: "How we're thinking about supporting the communities that rely on Mastodon every day."
date: 2026-02-19
categories:
- News
tags:
- mastodon
authors:
- hannah
resources:
- name: hero
  src: hero.png
draft: false
---

Hi, I'm Hannah. I'm a community builder and long-time professional social media poster, though most of my “greatest hits” weren’t under my own name. I’ve managed and contributed to social accounts for a blowtorch manufacturer, a fancy hand soap maker, a Chicago-based foodservice company, and ultimately, tech companies. (That last one is how I found my way to open source — but that’s a [rerun episode](https://hannahaubry.online/no-more-montages) for another day)

Now, I’m Mastodon’s Community Director. I joined because this work is personal to me. My early professional experience gave me a front-row seat to the ways traditional social media companies do harm to [people](https://www.bbc.com/news/technology-28051930) and [society](https://www.amnesty.org/en/latest/news/2019/07/the-great-hack-facebook-cambridge-analytica/). I believe that the social web, and Mastodon as part of it, has a vital role to play in charting a new path forward for our digital social spaces. I’m thrilled to be here building with you.

Alright — enough about me. :) Let’s get to the part where we talk about what Mastodon is doing for you this year!

## Introducing the Mastodon.social Help Centre

Our team runs mastodon.social to provide a safe landing place for anyone, especially for newcomers to the social web. It’s also an important example to others of what a Mastodon server looks like when it’s up and running. For those reasons, and because we feel it’s the right thing to do, we want mastodon.social to be accessible and safe for anyone who chooses to host their account there.

Today, we’re announcing a new resource for mastodon.social users: the [Help Centre](https://help.joinmastodon.org/). We intend for the Help Centre to be a place where people can learn how to use Mastodon’s software. It will also include more information about participating on mastodon.social in a healthy, safe, and accessible way. In the future, we’re planning to migrate this site to a [free and open source software (FOSS)](https://en.wikipedia.org/wiki/Free_and_open-source_software) backend, and integrate links to user-facing tutorials directly into Mastodon’s software.

We have a lot of ideas about the kinds of resources we want to add to the Help Centre. We’re announcing it now because we think it’s important to show our work as we go, and we want your help. Throughout 2026 community team members Zora and Amelia will continue to add guides and tutorials about Mastodon, and we’ll ask for your input along the way: What kinds of resources should we add? Are we on the right track? How can we improve? Let us know by getting in touch with [@staff@mastodon.social](https://mastodon.social/@staff).

We also haven’t forgotten about [mastodon.online](http://mastodon.online). We want to do something wildly different there and push the limits of what the software can do. We have some thoughts, but we don’t really know what this looks like yet! If you have ideas about neat or useful things we could do with mastodon.online, send a message to [@staff@mastodon.online](https://mastodon.online/@staff).

## Default server recommendations and server discovery

As people fled from traditional social media in late 2022, we made a strategic decision to send new sign-ups directly to mastodon.social. This choice was driven by our desire to reduce cognitive load for new users and ensure a stable onboarding experience. While we want people to feel safe and welcome on mastodon.social, we also know we can do more to help deliver on Mastodon’s decentralised promise. Our ultimate goal is to reimagine Mastodon's onboarding process ([you heard about that yesterday from Renaud and Imani](https://blog.joinmastodon.org/2026/02/our-technical-direction/)).

For now, we want to run some onboarding experiments to test our ideas and learn what can work for us and for everyone on the network. Our first experiment is Default Server Recommendations. (If you were at FOSDEM or following along at home, you may have seen [Andy Piper and I announce this](https://fosdem.org/2026/schedule/event/HJYRFF-tending-the-herd/) or [post about it](https://mastodon.social/@Mastodon/115989801184595302)!). Practically, we will replace the “join mastodon.social” button with a button that recommends a server from an opt-in pool that we will be hand selecting to start.

At first, we’re planning to recommend the closest geographic server in the correct language based on data surfaced by the app store, so it will only be available initially on the Android and iOS apps. We may also experiment with other logic for recommending a server, including random distribution. We’re listening to your feedback as we move forward with our planning. (We hear you on open sign-ups and spam. We’re already talking about what we can do.) No matter how we’re routing sign-ups, the experiment will be designed to ensure that server admins remain in control: meaning, they will have the power to opt in and out as needed, or reduce the percentage of sign-ups flowing their way. If you want to be a part of these experiments, [complete this form.](https://forms.gle/7FqK8Y1TJADoZvbE6)

We also intend to improve server discovery by improving our Server Directory. This starts with moving the directory to a new pull-request-based system so admins can submit, update, or remove entries themselves. Another change we want to make is to add more and new ways to “classify” different types of servers including demographics, interests, and geographic regions. Once we have that kind of information, we can start to explore new ways to incorporate it into the onboarding process.

## We’re getting off Discord: Join us on Zulip

We're taking concrete steps to demonstrate our commitment to our values by moving as much of our digital infrastructure to FOSS as possible. This is a long-term project. We’re going to move slowly, and we’re not committing to moving everything to FOSS. We’re taking our time because we need to balance achieving our mission with evolving our operations. That being said — today, we’re taking an important step that we feel will make a big difference for us and for our community: We’re starting the process of moving our community chat space from Discord to Zulip.

Our first step will be to migrate the people on our existing Discord servers to Zulip, which we plan to do soon. Currently, only Patreon donors are granted access to the Discord. On Zulip, we’ll grant access to donors no matter where their gift comes from. We also want to extend access to more and different kinds of people who are deeply engaged and actively contributing to Mastodon and the social web. However, we want to be thoughtful about how we do that. Running these spaces is important, but they do add coordination and moderation overhead to our small team. We’ll keep you updated as we make progress.

---

## Stay tuned

That’s all for now, folks! Thanks for reading and stay tuned: We plan to start sharing more stories and exciting things happening from across Mastodon and the social web right here on our blog.

If you liked the projects and direction you read about here and over the last two days, please consider [sending a donation](https://joinmastodon.org/sponsors#donate) our way to support this work and Mastodon’s future. If you’re already a donor: Thank you!

Next up: a feature interview of Yehuda, the server admin of [turtleisland.social](http://turtleisland.social/).

See you there 👋

{{< donate >}}
