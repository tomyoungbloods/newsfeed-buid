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
  access_token:         '239511634-5W8L1ho1rgFr1iJapIsaYURJ5hjPD0txVm4doRfJ',
  access_token_secret:  'v0lj76LnGZOK9CZZPDe8B3oCYSoo1CPi7peXfWJBHuSD7',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true,     // optional - requires SSL certificates to be valid.
});


T.get('search/tweets', { q: 'banana since:2018-07-11', count: 2 }, function(err, data, response) {
  console.log(data)
});

</script>