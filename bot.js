const tweet = require('./src/tweet');
const hashtags = require('./src/hashtags');

const interval = 5000;//120000; // 2 minutes

const params = {
  q: hashtags,
  result_type: 'recent',
  lang: 'en'
};

// initial tweets
tweet(params, 'statuses/retweet/:id');
tweet(params, 'favorites/create');

// scheduled tweets
setInterval(() => {
  try {
    tweet(params, 'statuses/retweet/:id');
    tweet(params, 'favorites/create');
  }
  catch(err) {
    // eslint-disable-next-line
    console.log(err);
  }
}, interval);
