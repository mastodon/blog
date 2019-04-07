---
title: "Mastodon now available on DigitalOcean"
subtitle: "It always was, but now it takes one click to install"
author: gargron
date: 2019-04-07
draft: false
tags:
- digitalocean
- mastodon
- self-hosting
categories:
- Guides
---

We have published a [1-click install image](https://marketplace.digitalocean.com/apps/mastodon) on DigitalOcean. This reduces the initial time investment in self-hosting Mastodon substantially. You create a new droplet, choose the Mastodon image, and once it boots up, you are taken through an interactive setup prompt.

The only necessary information for the prompt is a domain name (it should already be pointing at the IP address of your droplet!) and credentials to some e-mail delivery service, like SparkPost, Mailgun, Sendgrid, or something similar. Once you enter them into the setup prompt, your brand new Mastodon server boots up, ready to go.

Optionally, the setup prompt can also take Amazon S3, Wasabi or Google Cloud credentials for storing user uploads in the cloud instead of the local filesystem on the droplet.

What you get in the droplet is a standard installation of Mastodon, exactly as if you simply followed installation instructions in our documentation. This means that [the documentation](https://docs.joinmastodon.org) already covers everything you might want to know! 