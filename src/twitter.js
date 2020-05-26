const Twit = require('twit')
// const notifier = require('node-notifier');
// const open = require('open');
// const franc = require('franc')

const apikey = 'p9dYauvFpVsXhC4KeWKk7Vrc8'
const apiSecretKey = '039L9wKEeTNxlsoFoXKruwVEgmtaGz1xQPVyDlMGQyNnVAWl1T'
const accessToken = '239511634-gxvQuYFw8XBqi0ppygYr9fjQZSt9eepe961CErEm'
const accessTokenSecret = 'A3OGpYBIt13jRPy8pgEHrKNFX8NnBz8PwhZIbn4MmH4oO'

var T = new Twit({
  consumer_key:         apikey,
  consumer_secret:      apiSecretKey,
  access_token:         accessToken,
  access_token_secret:  accessTokenSecret,
});

(async () => {

    //1. GET RECENT TWEETS
    T.get('search/tweets', { q: '#tesla since:2020-04-15', count: 100 }, function(err, data, response) {
      const tweets = data.statuses
      // .map(tweet => `LANG: ${franc(tweet.text)} : ${tweet.text}`) //CHECK LANGUAGE
      .map(tweet => tweet.text)
      .filter(tweet => tweet.toLowerCase().includes('elon'));
      console.log(tweets);
    })

})();