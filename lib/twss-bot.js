var twss = require('twss'),
    irc = require('irc'),
    nick = 'cpollack';
    channel = '#libuv';

var client = new irc.Client('irc.freenode.net', nick, {
  channels : [ channel ]
});

client.addListener('message' + channel, function(from, message) {
  if (twss.is(message)) {
    client.say(channel, 'That\'s what she said!!');
  }
});
