/* eslint no-console: "off" */

const twit = require('twit');
const config = require('../config');
const Twitter = new twit(config);

const retweet = () => {
  const params = {
    q: '#nodejs, #Nodejs, #NodeJS, #javascript, #JavaScript',
    result_type: 'recent',
    lang: 'en'
  };

  Twitter.get('search/tweets', params, (err, data) => {
    if (!err) {
      const retweetId = data.statuses[0].id_str;
      Twitter.post('statuses/retweet/:id', {
        id: retweetId
      }, (err, res) => {
        if (err) console.log('retweet POST error', err);
        if (res) console.log('retweet POST successful');
      });
    } else {
      console.log('search error', err);
    }
  });
};

module.exports = retweet;
