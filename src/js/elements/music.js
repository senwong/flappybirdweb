import assets from './assets.js'

let instance = null;
export default class Music {
  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
  }
  playDie() {
    assets.audioDie.play();
  }
  playHit() {
    assets.audioHit.play();
  }
  playPoint() {
    assets.audioPoint.play();
  }
  playSwoosh() {
    assets.audioSwoosh.play();
  }
  playWing() {
    assets.audioWing.play();
  }
}