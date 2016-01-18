var express = require('express');
var app = express();

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'FATLWisrnAy6AzgjL0NDpAmit',
  consumer_secret: 'ejQZcM8aJRSj0S0T6M8wDVLc59OnxsGBjUhk6GJ1OLdFZ3vZjm',
  access_token_key: '',
  access_token_secret: ''
});

var usage = 'Usage: http://localhost:30000/cnnbrk-tweets';

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.get('/:handle([^\-]+)-tweets', function (req, res) {
  var params = {
    screen_name: req.params.handle,
    count: 10
  }

  client.get('statuses/user_timeline', params, function(error, tweets, response){
    if (!error) {
      return res.render('pages/index.ejs', {tweets: tweets});
    }
    res.sendStatus(500);
  });
});

app.get('*', function (req, res) {
  res.send(usage);
});

app.listen(30000, function () {
  console.log('Example app listening on port 30000!');
});
