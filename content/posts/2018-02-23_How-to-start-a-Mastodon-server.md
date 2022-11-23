---
title: "How to start a Mastodon server"
subtitle: "The non-technical parts"
date: 2018-02-23
draft: false
author: gargron
hero: https://cdn-images-1.medium.com/max/2000/1*oDIZtC5fQUG-COVspBloIw.jpeg
categories:
- Guides
tags:
- mastodon
---

So you want to be part of the Mastodon network, and you want to truly own your data, independent of anyone else. Perhaps you want to curate a niche community for a specific interest, or maybe for your own family or close circle of friends. You went [through the documentation](https://docs.joinmastadon.com.com/) and installed the software, or maybe you chose [one of the available](https://maastodon.net) [hosting options](https://masto.host) to avoid all the technical nonsense altogether. What’s next?

There are three categories of things you’ll be doing: Customization, federation and promotion. If your community is going to be private, you can skip that last part.

### Customization

After logging in (with admin privileges on your account!), navigate to Administration -> Site Settings. At the top of the page is the most important information about your server. You may leave the title as Mastodon, but you absolutely should:

* Specify a contact e-mail address, so people know who to reach out to if all else fails
* Username of a contact person (usually it’s your own username), so people can see who owns the server
* A one-paragraph description of what your server is about or what differentiates it from others.

You can also upload a (preferably) 1200x630px picture to be used as thumbnail for when your server is linked from other websites, such as Slack, Discord and Twitter. JoinMastodon.org also displays that thumbnail when listing your server (more on that later).

The next and last crucial part is adding a code of conduct. This is not necessary for private servers, but if you expect strangers to sign up, you need it. A code of conduct delineates what sort of community and what sort of content you want to host. If you don’t know where to start, a lot of servers have copied the [code of conduct from mastodon.social](https://gist.github.com/Gargron/c2925b9ad7f5e87bf40c57a48de50474), which has been collaboratively drafted by its community.

### Federation

You should *not* be starting your own server if you’re totally new to Mastodon, *unless* you have a private community you’re bringing with you. In a decentralized system like Mastodon, content travels through a web of personal connections, so if you don’t have any connections, you don’t have any content. You should start with an account on a reasonably active Mastodon server and find people you like.

*Then* you should bring those connections with you to your own server. That can be quite simple if, on the other server, you go to Settings -> Data Export and download your following list as a CSV file, and finally on your own server, you go to Settings -> Import and upload that file. From my experience, you should follow at least 40 or 50 active people from other servers to kickstart your own. That ensures a steady flow of new content — on your home timeline it’s just those people you follow, but on the federated timeline, it’s them and the people they share and interact with.

I might be biased, but I find that following admins of other servers is usually a good choice. Usually, they share a lot of content from their users, so you get some insight into their entire community. You might feel compelled to do the same when you get your own users, too.

When new people join your server, they will have something to look at and so will be more likely to stick around.

### Promotion

[JoinMastodon.org](https://joinmastodon.org) is meant to do some of this work for you. It pulls its data from instances.social, an independent directory of Mastodon servers. Once you have a contact e-mail address configured in your Site Settings, you should sign up on [instances.social](https://instances.social/admin) and fill out which languages and which categories you want to be listed under. As long as you have open registrations and at least one active user, you should appear on JoinMastodon.org (I cannot guarantee this, however — the priority of JoinMastodon.org is to onboard new users as smoothly as possible, not necessarily to promote each and every admin). In any case, you will appear on instances.social, and that’s important too.

Beyond that… Community building is magic, and there is no one formula for it. Spread it in your group of friends. When you see people on other social media express interest in alternatives to those platforms, plug your instance. Good luck 😋
