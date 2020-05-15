<template>
    <div>
        Jeh
    </div>
</template>
<script>
var Twit = require('twit')

var T = new Twit({
  consumer_key:         'p9dYauvFpVsXhC4KeWKk7Vrc8',
  consumer_secret:      '039L9wKEeTNxlsoFoXKruwVEgmtaGz1xQPVyDlMGQyNnVAWl1T',
  access_token:         'p9dYauvFpVsXhC4KeWKk7Vrc8',
  access_token_secret:  '039L9wKEeTNxlsoFoXKruwVEgmtaGz1xQPVyDlMGQyNnVAWl1T',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
});

</script>