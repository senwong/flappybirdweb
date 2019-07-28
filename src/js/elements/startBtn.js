import assets from './assets.js';

let instance = null;

export default class StartBtn {
  constructor(scene) {
    if(instance) {
      return instance;
    }
    this.ctx = scene.ctx;
    this.screenWidth = scene.canvas.width;
    this.screenHeight = scene.canvas.height;
    instance = this;
    this.init();
  }
  init() {
    this.img = assets.splash;
    this.img.onload = () => {
      const BTN_WIDTH = this.img.width;
      const BTN_HEIGHT = this.img.height;
      this.btnArea = {
        startX: (this.screenWidth - BTN_WIDTH) / 2,
        startY: (this.screenHeight - BTN_HEIGHT) / 2,
        endX: (this.screenWidth + BTN_WIDTH) / 2,
        endY: (this.screenHeight + BTN_HEIGHT) / 2
      }
    }
  }
  render() {
    if(this.img.complete) {
      this.ctx.drawImage(
        this.img,
        (this.screenWidth - this.img.width) / 2,
        (this.screenHeight - this.img.height) / 2
      )
    }
  }
  update() {

  }
}