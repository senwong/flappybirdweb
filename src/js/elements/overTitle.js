import CONFIG from '../../js/config.js';
import assets from './assets.js';

const TITLE_WIDTH = 236;
const TITLE_HEIGHT = 42;

export default class OverTitle {
  constructor(scene) {
    this.img = assets.scoreboard;
    this.ctx = scene.ctx;
    this.screenWidth = scene.canvas.width;
    this.width = TITLE_WIDTH;
    this.x = (this.screenWidth - TITLE_WIDTH) / 2;
    this.y = CONFIG.OVER_TITLE_Y;
  }
  update() {

  }
  render() {
    this.ctx.drawImage(this.img, this.x, this.y);
  }
}