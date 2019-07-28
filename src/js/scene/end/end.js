import Scene from '../scene.js';
import OverTitle from '../../elements/overTitle.js';
import Background from '../../elements/background.js';
import Start from '../../scene/start/start.js';
import Base from '../../elements/base.js';
import ScoreInfor from '../../elements/scoreInfo.js';
import utility from '../../utility.js';
import asserts from '../../elements/assets.js';

export default class End extends Scene {
  constructor(game) {
    super(game);
    this.overTitle = new OverTitle(this);
    const background = new Background(this);
    const base = new Base(this);
    this.ctx = game.ctx;
    this.screenWidth = game.canvas.width;
    this.addElements(background);
    this.addElements(base);
    this.addElements(this.overTitle);
    
    this.bindTouch = this.handleTouchStart.bind(this)
    this.initEvents();
  }
  initEvents() {
    // canvas.addEventListener('touchstart', this.bindTouch);
    this.canvas.onclick = this.bindTouch;
  }
  render() {
    super.render();
    this.renderScore();
    this.renderMedal();
  }
  renderScore() {
    const score = this.game.getScore();
    const scoreImgs = utility.convertNumToImg(score);
    const scaleRatio = 25 / 36;
    this.ctx.scale(scaleRatio, scaleRatio);
    scoreImgs.forEach( (img, index) => {
      const x = ((this.screenWidth - this.overTitle.width) / 2 + 166 + index * img.width) / scaleRatio;
      const y = (this.overTitle.y + 100) / scaleRatio;
      this.ctx.drawImage(img, x, y);
    })
    this.ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  renderMedal() {
    const score = this.game.getScore();
    let medal = null;
    if (score < 100) {
      medal = asserts.medal_bronze;
    } else if(score < 200) {
      medal = asserts.medal_silver;
    } else if (score < 300) {
      medal = asserts.medal_gold;
    } else {
      medal = asserts.medal_platinum;
    }
    this.ctx.drawImage(medal, (this.screenWidth - this.overTitle.width) / 2 + 33, this.overTitle.y + 115);
  }
  handleTouchStart(e) {
    const start = new Start(this.game);
    this.game.replaceScene(start);
  }
  update(){}
}