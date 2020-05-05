<template>
    <div id="methode-vijf">
        Hello
    </div>
</template>
<script>
var Twit = require('twit')

// var T = new Twit({
//   consumer_key:         '...',
//   consumer_secret:      '...',
//   access_token:         '...',
//   access_token_secret:  '...',
//   timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
//   strictSSL:            true,     // optional - requires SSL certificates to be valid.
// })

T.get('search/tweets', { q: 'banana since:2011-07-11', count: 2 }, function(err, data, response) {
  console.log(data)
});


</script>


