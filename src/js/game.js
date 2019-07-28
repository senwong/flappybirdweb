import Start from './scene/start/start.js';
import Music from '../js/music.js';
const music = new Music();
/**
 * 游戏主函数
 */
export default class Game {
  constructor(canvas) {
    this.score = 0;
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.scene = new Start(this)
    this.run();
  }
  render() {
    this.scene.render()
  }
  update() {
    this.scene.update()
  }
  increaseScore() {
    this.score+=2;
    music.playPoint();
    console.log('score: ', this.score);
  }
  getScore() {
    return this.score;
  }
  run() {
    const that = this;
    function loop() {
      that.render();
      that.update();
      window.requestAnimationFrame(loop);
    }
    window.requestAnimationFrame(loop);
  }
  replaceScene(newScene) {
    this.scene = newScene;
  }
}
