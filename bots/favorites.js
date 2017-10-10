/* eslint no-console: "off" */

const twit = require('twit');
const config = require('../config');
const Twitter = new twit(config);

const favorites = () => {
  const params = {
    q: '#nodejs, #Nodejs, #NodeJS, #javascript, #JavaScript',
    result_type: 'recent',
    lang: 'en'
  };

  Twitter.get('search/tweets', params, (err, data) => {
    const tweets = data.statuses;
    const randomNum = Math.floor(Math.random() * tweets.length);
    const randomTweet = tweets[randomNum];

    if (typeof randomTweet != 'undefined') {
      Twitter.post('favorites/create', {
        id: randomTweet.id_str
      }, (err, res) => {
        if (err) console.log('favorites POST error', err);
        if (res) console.log('favorites POST successful');
      });
    }
  });
};

module.exports = favorites;
