---
title: "Trunk & Tidbits, March 2025"
description: "News from the Mastodon engineering team for March 2025 - including some big changes to the main code, updates to the mobile apps, Fediscovery progress, and the end of support for Mastodon 4.1."
date: 2025-04-07
section: Trunk and Tidbits
categories:
- Trunk and Tidbits
- Engineering
tags:
- engineering
- mastodon
authors:
- renchap
- andy
resources:
- name: hero
  src: hero.png
draft: false
---

Greetings! We're back, with our monthly update from the Mastodon engineering team.

Remember how last month was a bit lighter for news? Well, this time, we are making up for it and have a lot to share! Take a look below for team updates, some significant new features, and updates to the mobile apps. We also have very important information about  changes with new (and old) software versions. Finally, there's a bumper round-up of community news, and some fun projects you may have missed.

## Events and team news

We are very excited to welcome [Echo](https://tech.lgbt/@chaosexanima) to the core team as a front-end developer. We extended our recruitment to include a second front-end developer, and found another great individual who will be joining us soon as well. Also on the team side, we opened [a role for a designer to join the team](https://mastodon.social/@MastodonEngineering/114235500948298378), after we said goodbye to Sam recently.

In March, [Andy](https://macaw.social/@andypiper) was on stage at [Fediverse House](https://about.flipboard.com/fediverse-house/), a side event at SXSW run by our friends from Flipboard. This was a fun space which created opportunities to finally meet some of the members of our community in person (hi, [@box464](https://mastodon.social/@box464)!) and to talk about Mastodon and the Fediverse. Andy was also a guest [on the Fireside Fedi podcast](https://write.firesidefedi.live/firesidefedi/fireside-fedi-episode-7-andy-piper-mastodon), which you can watch as a video, or listen to in audio. Members of the team took part in  more panels and events in March - for example, [Felix](https://mastodon.social/@mellifluousbox) was part of an [EFF "Effecting Change" livestream](https://www.youtube.com/watch?v=GrqHEL8QbgI) that you can also check out. We aim to continue our outreach and communication over the coming months as the new organisation comes into focus.

If you have an account on one of our hosted instances (mastodon.social and mastodon.online), you may like to know that we now have an account that is run by the team that operates them - [@staff@mastodon.social](https://mastodon.social/@staff) is where you can find updates and announcements related to these services. As noted in the account bio, you should continue to use the existing process for any account support and appeals requests.

Don't forget that we also post technical and team updates on [@MastodonEngineering@mastodon.social](https://mastodon.social/@MastodonEngineering).

You're also free to check out our [LinkedIn page](https://www.linkedin.com/company/joinmastodon/) for non-engineering updates. It doesn't federate, but, we're there too.

## Releases and updates

In March, we released a number of bugfixes, and a security fix. You should take a look at the most recent version for the Mastodon level you are running, but also check the release notes for any versions you may also have missed. In total, we shipped:

- [4.3.5](https://github.com/mastodon/mastodon/releases/tag/v4.3.5), [4.3.6](https://github.com/mastodon/mastodon/releases/tag/v4.3.6), and [**4.3.7**](https://github.com/mastodon/mastodon/releases/tag/v4.3.7)
- [4.2.18](https://github.com/mastodon/mastodon/releases/tag/v4.2.18), [4.2.19](https://github.com/mastodon/mastodon/releases/tag/v4.2.19), and [**4.2.20**](https://github.com/mastodon/mastodon/releases/tag/v4.2.20)
  - **IMPORTANT**: Mastodon 4.2.17 dropped support for Ruby 3.0 (this is no longer supported upstream). If you are running Mastodon 4.2 and Ruby 3.0, you can update as far as Mastodon 4.2.16 which contains the latest security fixes, but please note that this version has a known vulnerability if you are using SAML authentication with Mastodon. If you are running Mastodon 4.2.x with Ruby 3.0, we strongly encourage you to update to Ruby 3.2, and then use Mastodon 4.2.17 or above.

- [4.1.24](https://github.com/mastodon/mastodon/releases/tag/v4.1.24), and [**4.1.25**](https://github.com/mastodon/mastodon/releases/tag/v4.1.25).
  - If you are running Mastodon 4.1.x, note that it only supports Ruby 3.0 (which is no longer supported upstream) and is subject to the above SAML security issue.

> Mastodon 4.1.25 is the **final** version of the Mastodon 4.1.x lifecycle.
> As of **April 8, 2025** this version of the software is end of life and will no longer receive updates (including for security issues). You should upgrade to a supported version as soon as possible.
{.warning}

Looking ahead, we posted a notice about future versions of Mastodon (from 4.4 onwards), that will retire the use of Redis namespaces and the `REDIS_NAMESPACE` environment variable. If you have questions related to this future change, there's a [discussion post](https://github.com/mastodon/mastodon/discussions/34198) on GitHub.

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@MastodonEngineering/114182605867500983/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@MastodonEngineering/114182605867500983" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @MastodonEngineering@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

## Backend and web

In March, we reviewed and merged 167 Pull Requests (106 with translation and dependency updates removed) from 14 authors. Thank you for all of the contributions!

<div class="features-list">

- {{< feature-label name="api" >}} Added new fields in the instance endpoint to get the instance's about, terms of service and privacy policy pages, so apps can display them (including during signup). {{< github-pr id=33849 authors="ClearlyClaire" >}}
- {{< feature-label name="api" >}} Added an attribute to the instance endpoint to understand whether a reason is required for sign ups. {{< github-pr id=34280 authors="ClearlyClaire" >}}
- {{< feature-label name="new feature" >}} Updated the Terms of Service feature to add a publication date, allowing users to review the ToS before they take action. {{< github-pr id=33993 authors="Gargron" >}}
- {{< feature-label name="new feature" >}} Added a way for admins to do basic age verification to help with local law compliance. It achieves this by asking for the user birth date when signing up and checking it against the configured age. The birth date is not stored anywhere. Right now, it will reject sign ups where the birth date is not provided (for example, from API clients that do not support entering it), but we plan to properly handle this case before the feature is released. {{< github-pr id=34150 authors="Gargron" >}}
- {{< feature-label name="interface" >}} The Emoji picker now supports Emojis from Unicode 15.0 (and a PR is in the works for 15.1). {{< github-pr id=33395 authors="eramdam" >}}
- {{< feature-label name="admin" >}} Add a way for admins to send an announcement by email to all users. {{< github-pr id=33928 authors="ClearlyClaire" >}}
- {{< feature-label name="new feature" >}} [Jonny](https://neuromatch.social/@jonny) has been working for several months to add a way to fetch replies from other servers, to solve the common issue of only seeing a part of conversations. The first part of this work has been merged. It is not enabled by default for now, as we need to ensure that it behaves correctly and does not significantly increase the requests made to other servers - but, this is a huge first step. Further PRs will be required to update the interface, and ensure that apps can support this as well. {{< github-pr id=32615 authors="sneakers-the-rat" >}} {{< github-pr id=34147 authors="ClearlyClaire" >}} {{< github-pr id=34151 authors="ClearlyClaire" >}}
- {{< feature-label name="api" >}} The API now supports the `Deprecation` header from RFC9745. We recommend that application developers look for this header in responses, and display a warning when it is present in development mode, to detect usage of deprecated APIs. See [the documentation for more information](https://docs.joinmastodon.org/api/guidelines/#deprecations). {{< github-pr id=34262 authors="ClearlyClaire" >}}
- {{< feature-label name="new feature" >}} A new v2 filter action has been added: `blur`. It is similar to `warn`, but only applies to attached media. If you've implemented v2 filters according to our documentation, your client should be handling unknown types as `warn`, which is a reasonable fallback for `blur`. Documentation: [Create a filter](https://docs.joinmastodon.org/methods/filters/#form-data-parameters) and [filter action entity](https://docs.joinmastodon.org/entities/Filter/#filter_action) {{< github-pr id=34256 authors="ClearlyClaire" >}}
- {{< feature-label name="new feature" >}} Support for Fediverse Auxiliary Service Providers has been merged. No capabilities are implemented yet, but this is the first step towards supporting [Fediscovery](<https://fediscovery.org>) in Mastodon, and opens the door for many other exciting features. {{< github-pr id=34031 authors="oneiros" >}}
- {{< feature-label name="interface" >}}The media modal behaviour on mobile has been improved, with better gesture support. {{< github-pr id=34210 authors="Gargron" >}}
- {{< feature-label name="admin" >}} `admin.sign_up` notifications can now be grouped. {{< github-pr id=34298 authors="ClearlyClaire" >}}

</div>

## Android

Version 2.9.5 was released, with some minor bug fixes and tweaks. We're also working on support for the age verification on sign-up changes mentioned above.

## iOS

With the release of 2025.01, grouped notifications are now available on iOS! Favorites, boosts, and follows that occur close together are grouped with similar notifications, as they are on the web. Also, follow requests can be approved or rejected right from the notifications list.

You’ll also see a bunch of improvements around post visibility ("Public", "Unlisted", etc.) throughout the app. When composing a new post, the visibility setting is now just below the publish button, making it much more obvious. When viewing your timeline, private mentions and replies are now marked with headers similar to those on the web, and posts that are not public now show an icon to indicate their visibility. Several other long-standing issues around post visibility have also been resolved.

Quite a few other fixes are included in this update as well, and we're hard at work on a follow-up to address additional issues.

## Fediscovery

We merged the first Fediscovery-related PR into Mastodon (see above). This includes basic support for managing FASP (Fediverse Auxiliary Service Providers), of which Discovery providers will be the first kind. This is still behind a feature flag and does not provide any user-visible functionality, but it enables a couple of things. Expect to see more in the coming months.

We also started work on the next discovery capability: "Account Recommendations". A first specification draft will be published in April.

Testing of an initial Fediscovery implementation is ongoing. Demonstrating that this is not a Mastodon-only service, the [Smithereen](https://github.com/grishka/Smithereen) project has been working with the current code.

<blockquote class="mastodon-embed" data-embed-url="https://mastodon.social/@grishka/114193410704161904/embed" style="background: #FCF8FF; border-radius: 8px; border: 1px solid #C9C4DA; margin: 0; max-width: 540px; min-width: 270px; overflow: hidden; padding: 0;"> <a href="https://mastodon.social/@grishka/114193410704161904" target="_blank" style="align-items: center; color: #1C1A25; display: flex; flex-direction: column; font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', Roboto, sans-serif; font-size: 14px; justify-content: center; letter-spacing: 0.25px; line-height: 20px; padding: 24px; text-decoration: none;"> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="32" height="32" viewBox="0 0 79 75"><path d="M74.7135 16.6043C73.6199 8.54587 66.5351 2.19527 58.1366 0.964691C56.7196 0.756754 51.351 0 38.9148 0H38.822C26.3824 0 23.7135 0.756754 22.2966 0.964691C14.1319 2.16118 6.67571 7.86752 4.86669 16.0214C3.99657 20.0369 3.90371 24.4888 4.06535 28.5726C4.29578 34.4289 4.34049 40.275 4.877 46.1075C5.24791 49.9817 5.89495 53.8251 6.81328 57.6088C8.53288 64.5968 15.4938 70.4122 22.3138 72.7848C29.6155 75.259 37.468 75.6697 44.9919 73.971C45.8196 73.7801 46.6381 73.5586 47.4475 73.3063C49.2737 72.7302 51.4164 72.086 52.9915 70.9542C53.0131 70.9384 53.0308 70.9178 53.0433 70.8942C53.0558 70.8706 53.0628 70.8445 53.0637 70.8179V65.1661C53.0634 65.1412 53.0574 65.1167 53.0462 65.0944C53.035 65.0721 53.0189 65.0525 52.9992 65.0371C52.9794 65.0218 52.9564 65.011 52.9318 65.0056C52.9073 65.0002 52.8819 65.0003 52.8574 65.0059C48.0369 66.1472 43.0971 66.7193 38.141 66.7103C29.6118 66.7103 27.3178 62.6981 26.6609 61.0278C26.1329 59.5842 25.7976 58.0784 25.6636 56.5486C25.6622 56.5229 25.667 56.4973 25.6775 56.4738C25.688 56.4502 25.7039 56.4295 25.724 56.4132C25.7441 56.397 25.7678 56.3856 25.7931 56.3801C25.8185 56.3746 25.8448 56.3751 25.8699 56.3816C30.6101 57.5151 35.4693 58.0873 40.3455 58.086C41.5183 58.086 42.6876 58.086 43.8604 58.0553C48.7647 57.919 53.9339 57.6701 58.7591 56.7361C58.8794 56.7123 58.9998 56.6918 59.103 56.6611C66.7139 55.2124 73.9569 50.665 74.6929 39.1501C74.7204 38.6967 74.7892 34.4016 74.7892 33.9312C74.7926 32.3325 75.3085 22.5901 74.7135 16.6043ZM62.9996 45.3371H54.9966V25.9069C54.9966 21.8163 53.277 19.7302 49.7793 19.7302C45.9343 19.7302 44.0083 22.1981 44.0083 27.0727V37.7082H36.0534V27.0727C36.0534 22.1981 34.124 19.7302 30.279 19.7302C26.8019 19.7302 25.0651 21.8163 25.0617 25.9069V45.3371H17.0656V25.3172C17.0656 21.2266 18.1191 17.9769 20.2262 15.568C22.3998 13.1648 25.2509 11.9308 28.7898 11.9308C32.8859 11.9308 35.9812 13.492 38.0447 16.6111L40.036 19.9245L42.0308 16.6111C44.0943 13.492 47.1896 11.9308 51.2788 11.9308C54.8143 11.9308 57.6654 13.1648 59.8459 15.568C61.9529 17.9746 63.0065 21.2243 63.0065 25.3172L62.9996 45.3371Z" fill="currentColor"/></svg> <div style="color: #787588; margin-top: 16px;">Post by @grishka@mastodon.social</div> <div style="font-weight: 500;">View on Mastodon</div> </a> </blockquote> <script data-allowed-prefixes="https://mastodon.social/" async src="https://mastodon.social/embed.js"></script>

## Community news

This was a big month across the community.

- The [Nivenly Foundation](https://nivenly.org/) - stewards of the [Hachyderm.io](https://hachyderm.io) instance - announced their [Fediverse Security Fund](https://nivenly.org/blog/2025/04/01/nivenly-fediverse-security-fund/), which will sponsor contributors who responsibly disclose security vulnerabilities in popular open source Fediverse software. This is a great initiative, and we are happy to see it.
- There was a [big update](https://mastodon.social/@cheeaun/114149642985452634) to [Phanpy](https://phanpy.social), a progressive web app client for Mastodon.
- [Fedi Archive](https://apps.apple.com/us/app/fedi-archive/id6740432925) is an iOS app that allows you to open and browse Mastodon account archives directly on device.
- The great [@halcy](https://icosahedron.website/@halcy), maintainer of the [Mastodon.py](https://github.com/halcy/Mastodon.py) client library for Python, shared some fun posts, including [a FUSE filesystem built on Mastodon](https://icosahedron.website/@halcy/114162499329644711) (!), [demos of Mastodon.py with client-side PyScript](https://halcy.de/blog/2025/02/18/mastodonpy-in-the-browser/), and [a series of fun and silly examples built on the Mastodon API](https://halcy.de/blog/2025/03/18/silly-mastodon-apps/). Take a look, you may get inspired!
   - ... [Andy](https://macaw.social/@andypiper) _did_ get inspired, and [ran with the FUSE idea](https://github.com/andypiper/mastofs), but it is still not something we recommend as a way to use Mastodon 😊
- [Tom Casavant](https://tomkahe.com/@tom) continues to contribute to getting Mastodon into all the right places, and submitted a [pull request to add Mastodon trends as a widget for Glance](https://github.com/glanceapp/community-widgets/pull/8).
- A new iOS app called [Sabertooth](https://sabertooth.xyz/) appeared.
- If you use Discord, then you should find that [embeds of Mastodon posts just got much nicer](https://social.treehouse.systems/@rcombs/114145509598513980).
   - by the way, if you [support us on Patreon](https://www.patreon.com/mastodon), you can get access to our Discord server.
- [Fred Rocha](https://mastodon.social/@john_fisherman) wrote a [blog post about how he uses Mastodon in 2025](https://fredrocha.net/2025/03/18/how-i-use-mastodon-in-2025/).

That was a lot of news! We are excited to see the community continuing to share interesting apps and examples. Let us know if you're building something cool, and we may feature it in a future post.

## Thank you

Mastodon is a platform that empowers communities and fosters connections. It thrives when people contribute! We appreciate all of the support. Please consider donating to help us to keep improving the software.

{{< donate >}}
