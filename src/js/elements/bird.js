import Animation from '../base/animation.js';
import assets from './assets.js';
import Music from './music.js';

const FRAMES = [assets.redbird_downflap, assets.redbird_midflap, assets.redbird_upflap];
const BIRD_SRC = FRAMES[0];
const BIRD_WIDTH = 34
const BIRD_HEIGHT = 24
const BIRD_ANGLE = 20
const music = new Music();

function rnd(start, end) {
  return Math.floor(Math.random() * (end - start) + start)
}

export default class Bird extends Animation {
  constructor(scene) {
    super(BIRD_SRC, BIRD_WIDTH, BIRD_HEIGHT)
    this.scene = scene;
    this.height = BIRD_HEIGHT;
    this.imgList = FRAMES;
    this.screenWidth = scene.canvas.width;
    this.screenHeight = scene.canvas.height;
    this.x = this.screenWidth / 2;
    this.y = this.screenHeight / 2;
    this.ySpeed = 1;
    this.jumpSpeed = 10;
    this.g = 1;

    // 向上走或者向下走鸟的仰角, 单位为度
    this.birdAngle = 0;

    // 每帧之间的间隔
    this.frameInterval = 2;
    this.curInterval = 0;
  }

  render() {
    const ctx = this.scene.ctx;
    if (this.ySpeed < 0) { // 向上走
      this.birdAngle = -BIRD_ANGLE;
    } else if(this.ySpeed > 0) { // 向下走
      this.birdAngle = BIRD_ANGLE;
    } else { // 静止不动
      this.birdAngle = 0;
    }

    this.birdAngle = this.birdAngle * Math.PI / 180;
    ctx.translate( this.x + BIRD_WIDTH / 2, this.y + BIRD_HEIGHT / 2);
    ctx.rotate(this.birdAngle);
    const tempX = this.x, tempY = this.y;
    this.x = -BIRD_WIDTH / 2;
    this.y = -BIRD_HEIGHT / 2;
    this.aniRender(ctx);
    this.x = tempX;
    this.y = tempY;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  
  // 每一帧更新子弹位置
  update() {
    if (this.curInterval == 0) {
      updateBird.bind(this)();
      this.curInterval = this.frameInterval;
    } else {
      this.curInterval -= 1;
    }
    function updateBird() {
      this.y += this.ySpeed;
      this.ySpeed += this.g;
    }
  }
  jump() {
    this.ySpeed = -this.jumpSpeed;
    music.playWing();
  }
}
