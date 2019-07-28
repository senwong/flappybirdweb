import Scene from '../scene.js'
import Background from '../../elements/background.js'
import Base from '../../elements/base.js'
import Bird from  '../../elements/bird.js'
import Pipe from  '../../elements/pipe.js'
import End from '../end/end.js'
import ScoreInfo from '../../elements/scoreInfo.js';
import Music from '../../../js/music.js';

const music = new Music;
const BASE_HEIGHT = 112;


export default class Running extends Scene {
  constructor(game) {
    super(game);
    this.bindTouch = this.touchHandler.bind(this);
    this.screenHeight = game.canvas.height;
    this.initElements();
    this.initEvents();
  }
  initElements() {
    const background = new Background(this);
    const base = new Base(this);
    this.bird = new Bird(this);
    this.pipe = new Pipe(this);
    const scoreInfo = new ScoreInfo(this.game);

    this.addElements(background);
    this.addElements(this.pipe);
    this.addElements(base);
    this.addElements(scoreInfo);
    this.addElements(this.bird);
  }
  initEvents() {
    this.canvas.onclick = this.bindTouch;
  }
  touchHandler(e) {
    // e.preventDefault();
    this.bird.jump();
  }
  update(ctx) {
    super.update(ctx);
    
    if (this.bird.y + this.bird.height > this.screenHeight - BASE_HEIGHT
      || this.pipe.isCollideWidthBird(this.bird)) {
      music.playHit();
      const endScene = new End(this.game);
      this.game.replaceScene(endScene);
    }
    if (this.pipe.isPassBird(this.bird)) {
      this.game.increaseScore();
    }
  }
}
