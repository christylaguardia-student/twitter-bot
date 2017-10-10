/* eslint no-console: "off" */

const twit = require('twit');
const config = require('./config');
const Twitter = new twit(config);

function randomTweet(tweets) {
  const randomNum = Math.floor(Math.random() * tweets.length);
  return tweets[randomNum];
}

const tweets = (params, postUrl) => {
  Twitter.get('search/tweets', params, (err, data) => {
    if (err) return console.log('🤖 search error', err);
    if (data.statuses.length === 0) return console.log('👻 no tweets found');

    const tweet = randomTweet(data.statuses);

    if (typeof tweet != 'undefined') {
      Twitter.post(postUrl, {
        id: tweet.id_str
      }, (err, res) => {
        if (err) console.log(`👎 POST ${postUrl} error`);
        if (res) console.log(`👍 POST ${postUrl} successful`);
      });
    }
  });
};

module.exports = tweets;
