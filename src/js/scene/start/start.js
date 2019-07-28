import Scene from '../scene.js'
import Background from '../../elements/background.js'
import Base from '../../elements/base.js'
import StartBtn from '../../elements/startBtn.js'
import Running from '../running/running.js'

export default class Start extends Scene{
  constructor(game) {
    super(game);
    this.initElements();
    this.initEvents();
  }
  initElements() {
    const background = new Background(this);
    const base = new Base(this);
    this.startBtn = new StartBtn(this);

    this.addElements(background);
    this.addElements(base);
    this.addElements(this.startBtn);
  }
  initEvents() {
    this.bindTouch = this.touchHandler.bind(this);
    // this.canvas.addEventListener('touchstart', this.bindTouch);
    this.canvas.onclick = this.bindTouch;
  }
  touchHandler(e) {
    /* touch
    e.preventDefault();
    let x = e.touches[0].clientX
    let y = e.touches[0].clientY
    */

    // click
    let x = e.layerX;
    let y = e.layerY;
    let area = this.startBtn.btnArea;
    if (x >= area.startX
      && x <= area.endX
      && y >= area.startY
      && y <= area.endY) {
        const running = new Running(this.game);
        this.game.replaceScene(running);
        this.game.score = 0;
      }
  }
}
