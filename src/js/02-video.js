import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = 'videoplayer-current-time';
player.on('timeupdate', throttle(playOn, 1000));

function playOn(e) {
  //   console.log(e);
  localStorage.setItem(LOCAL_KEY, JSON.stringify(e.seconds));
}

const time = localStorage.getItem(LOCAL_KEY);
if (time) {
  player.setCurrentTime(time);
}
