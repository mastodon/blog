---
title: "How to migrate from one server to another"
date: 2019-06-10
draft: true
author: eleanor
tags:
- mastodon
categories:
- Guides
---

With the sad news that KNZK was shutting down we thought it might be useful for people to have a refresher on the features that Mastodon has built in that make moving instances easy and painless.<!-- more -->

### Backing up Your Data

If you are moving to a new instance the first thing you will want to do is to get a backup of all of your data. Thankfully this process is painless with the Data Export tab under the “Import and Export” page. Here you can download your followers list, your muted users list and your blocked users list. 

Keeping users safe is one of our top priorities and we highly recommend that anyone moving instances backs up their muted and block lists. We’ve made this as straightforward as possible to ensure that moving instances is a seamless experience and free from having to block those accounts that you do not want to see or interact with.

On this page you can also download a copy of your archive that can be read by any ActivityPub software. This archive includes all of your posts and media. So even if the instance that you are moving from shuts down, as is the case with KNZK, you will still have a copy of all of your posts!

### Importing Your Data

Once you have backed up the data that you wish to bring over to your new account (we recommend all of it!) it’s easy to import these into your new account under the “Import” tab of the “Import and Export” page! 

Here you will simply select the type of data that you are importing and then choose the CVS file that you exported earlier before hitting upload! The CVS files are by default clearly labeled with what kind of data they contain to make it easier to know which file to upload. Depending on your new instances size and the size of the lists that you have imported it will take a few minutes for all of the new data to be properly imported. When the data has finished upload your home TL should look like it did before!

### Announcing the Move

As a final step in moving your account, something you may want to do is to let people know that you have moved your account to a new instance! Scrolling to the bottom of the “Appearances” tab of the Profile edit page you will find the option to announce that you have moved accounts under the helpfully titled “Move to a different account” header! What this will do is make it so that when people visit your old profile it is grayed out and people are redirected to your new account. 

Moving instances is painless and straightforward with Mastodon and we’re happy to have developed tools that give users the greatest possible control over their own data while also keeping them safe! 
