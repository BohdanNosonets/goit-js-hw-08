import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(JSON.parse(localStorage.getItem(STORAGE_KEY)) || 0);

const onPlay = function (data) {
  console.log(`start`, data.seconds);
  localStorage.setItem(STORAGE_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
