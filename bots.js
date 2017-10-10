const retweet = require('./bots/retweet');
const favorites = require('./bots/favorites');

// initial retweet
retweet();

// initial favorite
favorites();

// generate random tweet every minute
setInterval(retweet, 10000);

// generate random favorite every minute
setInterval(favorites, 10000);
