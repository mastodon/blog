---
title: "Mastodon 2.6 released"
subtitle: "Highlights from the changelog"
date: 2018-10-31
draft: false
author: gargron
categories:
  - New Features
tags:
  - mastodon
---

The new version of Mastodon has improved visuals, a new way to assert your identity, and a lot of bug fixes. Here are the most important changes from the [full changelog](https://github.com/tootsuite/mastodon/releases/tag/v2.6.0):<!-- more -->

### Verification

Verifying identity in a network with no central authority is not straightforward. But there is a way. It requires a change in mindset, though. Twitter teaches us that people who have a checkmark next to their name are real and important, and those that don't are not. That delegates a lot of the decision making to Twitter, the authority. Without a central authority, that decision making cannot be delegated. So, how does identity verification work on Mastodon?

The answer is links. If you have a personal website called johndoe.com, and you link from your site to your Mastodon profile, then people know you are the real John Doe -- the link appears verified on your profile. This option is accessible to everyone, not just celebrities. Having a verified link does not confer any special features like it does on Twitter. All safety and convenience features are always available to everyone. Some people don't need or want to have a recognizable and verified identity, and that is valid, too.

Of course the caveat is that people have to trust the linked website to be able to infer the identity. It's certainly a more useful feature when you have a recognizable website. However, it does also work with Twitter profiles, so you can at least confirm that you are the same person as your Twitter account, if that's what you need in your community.

### Direct messages remaster

The direct messages functionality of Mastodon has been remastered. You can now browse your direct messages grouped by conversations with specific people and conversations you haven't opened will be highlighted, just like you would expect from other services. This should make keeping up with important messages easier.

### In-stream link previews

Link previews and interactive players from sites like YouTube and Vimeo will now appear in-stream, and not only in detailed view. Interactive players have a play button which loads the actual content. No third-party scripts are loaded until you press it, so there is no privacy cost to the convenience.

### Reports grouping and blocking

For server administrators and moderators, the reporting system has been improved. Reports are now grouped by the target account visually, so even many reports about one person do not obfuscate others. Reports originating from a specific domain can be blocked if they are impractical. All staff members have a way to opt out of notification e-mails about reports.

### Command-line tools

The command-line interface for Mastodon, `tootctl` (as in "toot control"), has been expanded. Many commands were added for managing accounts, generating account backups, and performing various maintenance tasks. For example, to give someone moderator privileges from the command line, you could do:

    bin/tootctl accounts modify alice93 --role moderator

To give a username that was previously used by someone who deleted their account to a new person, with a randomly generated password:

    bin/tootctl accounts create alice93 --email new@email.com --reattach

To queue up a backup for someone's account and have them receive a link to the download via e-mail:

    bin/tootctl accounts backup alice93

You get the idea! Everything except `mastodon:setup` has been moved from the `rake` interface to the `tootctl` interface. Use `bin/tootctl --help` to browse the available commands and their documentation!

### Conclusion

**To get started with Mastodon, you can [sign up for free here](https://mastodon.social/about) or [here](https://mastodon.cloud/about), or dive into the deep end of choice [by browsing the list of servers here](https://joinmastodon.org/#getting-started). Or, [use the bridge tool to find where your Twitter friends are](https://bridge.joinmastodon.org) and sign up there.**

As always, huge thanks to [everyone who contributed to this release](https://github.com/tootsuite/mastodon/releases/tag/v2.6.0), to [everyone who sponsors](https://joinmastodon.org/sponsors) the project on [Patreon](https://patreon.com/mastodon), and to everyone who uses the network! 🐘
