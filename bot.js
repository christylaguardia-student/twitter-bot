/* eslint no-console: "off" */

const tweet = require('./lib/tweet');
const hashtags = require('./lib/hashtags');

const interval = 600000; // 5 minutes
const params = {
  q: hashtags,
  lang: 'en',
  result_type: 'recent',
  count: 10
};

tweet(params, 'statuses/retweet/:id');
tweet(params, 'favorites/create');

setInterval(() => {
  try {
    tweet(params, 'statuses/retweet/:id');
    tweet(params, 'favorites/create');
  }
  catch(err) {
    console.log(err);
  }
}, interval);
