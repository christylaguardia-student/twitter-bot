# Simple Twitter Bot

### [@christy_bot](https://twitter.com/christy_bot)

## About

A twitter bot to retweet and favorite recent tweets every *5 minutes* with the tags: `#nodejs #javascript #es6 #reactjs`.

## Prerequisites

1. A Twitter account and a new app. (See [Twitter's App Management](https://apps.twitter.com/))

2. These keys and access tokens from your Twitter app. Put in your `.env` file.

```
CONSUMER_KEY=???
CONSUMER_SECRET=???
ACCESS_TOKEN=???
ACCESS_TOKEN_SECRET=???
```

## Twiter API

This app uses [twit](https://www.npmjs.com/package/twit), the Twitter API Client for Node.

### *Endpoints*

Description | Request
--|--
Search twitter | `GET search/tweets`
Retweet the results | `POST statuses/retweet/:id`
Favorite a tweet | `POST favorites/create`

### *Notes*

* The free version of the Twitter API is limited to 100 calls per hour.
* Query string must be UTF-8, 500 characters max and limited complexity.
* See the docs on search specs [here](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets).

## Author

* [Christy La Guardia](https://www.laguardia.io/)

## Acknowledgments

* [Scott Spence](https://medium.freecodecamp.org/easily-set-up-your-own-twitter-bot-4aeed5e61f7f)
* [Aman Mittal](https://hackernoon.com/create-a-simple-twitter-bot-with-node-js-5b14eb006c08)
* [Sarah Kuehnle](https://ursooperduper.github.io/2014/11/03/twitter-bot-with-node-js-part-3.html)
