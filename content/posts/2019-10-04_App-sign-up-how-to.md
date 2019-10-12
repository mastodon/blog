---
title: "Adding sign-up to your Mastodon app"
subtitle: "How to use the app sign-up API"
draft: false
author: gargron
date: 2019-10-12
tags:
- mastodon
- api
categories:
- Guides
---

Since Mastodon 2.7, it is actually possible to let users sign up through your app, instead of asking them to go to a Mastodon website directly and then return. Let's go over how this can be done.<!--more-->

First, not all Mastodon servers accept new users. If you perform a request to `GET /api/v1/instance`, you will see this in the boolean `registrations` attribute.

To proceed, your app must already be registered / self-register with the given server, and obtain a "client credentials" grant, which is an API access token that is not connected to any particular user, just to your app. The app must have the `write:accounts` (or above) scope.

As a refresher, given that you have already registered the app to get a `client_id` and `client_secret`, to obtain a "client credentials" grant, you just have to perform a `POST /oauth/token` request with the params `grant_type=client_credentials`, your `client_id` and `client_secret`, and `scope=write:accounts` (or whatever scopes you need).

You then need to collect the following information from the new user:

- `username`
- `email`
- `password`

You must ask the user to agree to the server's terms of use and privacy policy, and record that agreement in the boolean `agreement` param. The URLs for the terms and privacy policy are `/about/more` and `/terms` so you can just let the user open them in a browser, or render them in a web view. If you know what the user's language is, you can pass that information in the `locale` param (but make sure the locale is something Mastodon supports, otherwise the API request will fail with a HTTP 422 error).

If the `GET /api/v1/instance` API has returned a true `approval_required` attribute, there is an additional piece of information you should ask from the user: `reason`. Because the user's sign-up will be reviewed by the server's staff before being allowed, you must give the user an opportunity to describe themselves and why they should be allowed onto the server.

You must then submit those params to `POST /api/v1/accounts` (authenticated with the app's access token). You will need to handle a potential HTTP 422 response from the API in case the user has entered invalid information (like an already taken username).

On success, what you will receive in return will be an access token, identical to what you would get from a standard OAuth authorization procedure. The access token allows your application to use the API of the server on behalf of the registered user.

However, the token will be **inactive** until the user confirms their e-mail. The link in the confirmation e-mail will actually redirect them back to your application when possible. Of course, if staff approval is required, the token will remain unusable until the account has been approved.

Trying to use an inactive access token will result in a HTTP 403 error.