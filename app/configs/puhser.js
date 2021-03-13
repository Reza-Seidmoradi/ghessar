import Pusher from 'pusher-js/react-native';

// Enable pusher logging - don't include this in production
Pusher.logToConsole = true;

var pusher = new Pusher('6e70a74f09d82f653b8e', {
  cluster: 'ap3'
});

export default pusher;

var channel = pusher.subscribe('twit-liked');
channel.bind('App\\Events\\TwitLiked', function(data) {
  alert(JSON.stringify(data));
});