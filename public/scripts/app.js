var left = [];
var right = [];

function clickable(tweets) {
  tweets.forEach(function(tweet) {
    var urlReg = /(https?:\/\/[^\s]+)/g;
    tweet.text = tweet.text.replace(urlReg, function(match) {
      return '<a href="' + match + '">' + match + '</a>';
    });
  }); 
  return tweets;
}

clickable(tweets).forEach(function(tweet, i) {
  if(i<5) {
    return left.push(tweet);
  }
  right.push(tweet);
});

dust.render('tweets', {left: left, right: right}, function(err, html) {
  var tweetsEl = document.getElementById('tweets');
  tweetsEl.innerHTML = html;
});

