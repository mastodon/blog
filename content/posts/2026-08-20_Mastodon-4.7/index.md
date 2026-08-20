---
title: "Mastodon 4.7"
subtitle: "Various bug fixes and improvements"
description: "This release is full of technical improvements focusing on bug fixes, performance and interoperability with other fediverse platforms."
date: 2026-08-20
draft: false
authors:
 - mastodon
categories:
- New Features
tags:
- mastodon
- changelog
resources:
- name: hero
  src: hero.png
---

This release of Mastodon focuses entirely on technical improvements that are not necessarily visible on the user side, ahead of the ambitiously user-focused Mastodon 5.0 release later this year. Our goal is to improve compatibility with other fediverse platforms, improve performance, and fix various bugs that we’ve found. So this post will be *very* technical. If you’re into that, read on.

This release features multiple long-running database migrations, as we tackled several long-standing issues in our database structure that made some features difficult or even impossible to implement, and made some migrations unnecessarily complicated. Zero-downtime migration from Mastodon 4.6 to 4.7 is supported, as will be zero-downtime migration from 4.7 to the next version. However, Mastodon 4.7 will be a required stop for zero-downtime migrations.

Private keys of local users used for ActivityPub authentication are now encrypted in the database to reduce the risk of leaks, for example from backup files or external database providers. They are also stored in a way that will allow us to seamlessly use different signature algorithms and properly rotate keys in the future.

We now have better support for account handle changes for accounts hosted elsewhere on the fediverse. You can’t change your Mastodon handle for now, but this is a necessary step towards being able to do so in the future.

Mastodon 4.7 now also supports FEP-8967 to represent and process link previews, which in the future will allow us to let users chose *which* link they want to have a preview whenever they’re composing a post with multiple links in it. For now, Mastodon does not require other servers to use FEP-8967 and will fall back to scanning the post’s links when a remote server does not include a FEP-8967 link preview, but that may change in future versions.

We have made several improvements to how we handle cryptographic signatures in ActivityPub, allowing the ecosystem to move past old specification drafts and make it easier to change signature algorithms in the future:

- We now support RSA, Ed25519 and as a post-quantum algorithm, ML-DSA-44 public keys represented using FEP-521a.
- We now emit RFC 9421 signatures when requests fail using the previous draft specification, allowing compatibility between Mastodon 4.7 and servers that only implement the final RFC 9421 specification, while retaining compatibility with servers that only implement the previous draft specification (most current implementations), and have added support for verification of RFC 9421 signatures made with Ed25519 keys.
- We now support verifying FEP-8b32 Object Integrity Proofs using either `eddsa-jcs-2022` or `mldsa44-jcs-2024`.

If none of this makes sense to you, don’t worry. There is absolutely no need to understand any of this to enjoy using Mastodon. This is only relevant to you if you are developing or running your own fediverse platform. Our next big release, Mastodon 5.0, will be a lot more interesting for everyone!

### In conclusion

Mastodon is the result of the work of our engineering team and community contributors who submit patches, file bug reports, and translate Mastodon into their native languages. From our heart: **Thank you to everyone who contributed to this release, either through code, feedback, or by funding our mission.**

Delivering handcrafted code that runs on tens of thousands of servers and serves hundreds of thousands of users is not an easy task. We don’t take venture capital, we don’t use AI, we don’t sell ads, and we don’t sell your data—unlike many other platforms out there. **Please support our mission, so that we can continue to make Mastodon better, and work towards an internet that is diverse, fun, and free from corporate control.**

{{< donate >}}
