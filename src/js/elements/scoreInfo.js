import CONFIG from '../../js/config.js';
import utility from '../utility.js';

const SCORE_WIDTH = 24;
export default class ScoreInfo {
  constructor(game) {
    this.game = game;
    this.score = 0;
    this.ctx = game.ctx;
    this.screenWidth = game.canvas.width;
    this.y = CONFIG.SCORE_Y;
  }
  render() {
    this.imgList = utility.convertNumToImg(this.game.getScore());
    const scoreWidth = this.imgList.length * SCORE_WIDTH;
    this.x = (this.screenWidth - scoreWidth) / 2;
    for (let i = 0; i< this.imgList.length; i++) {
      this.ctx.drawImage(this.imgList[i], this.x + i * SCORE_WIDTH, this.y);
    }
  }
  update() {
    // this.score = this.game.getScore();
  }
  setPosition(x, y) {
    this.x = x;
    this.y = y;
  }
}