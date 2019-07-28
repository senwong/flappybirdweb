import utility from '../../js/utility.js';
import assets from './assets.js';
import CONFIG from '../../js/config.js';

const PIPE_IMG_SRC = assets.pipe_green;

// 水管的宽度和高度
const PIPE_WIDTH = 52;
const PIPE_HEIGHT = 512;

// 水管竖直方向间距
const SPACE_HEIGHT = CONFIG.PIPE_SPACE_HEIGHT;

// 水管水平反向间距
const SPACE_WIDTH = CONFIG.PIPE_SPACE_WIDTH;

// 朝上水管在canvas坐标里最小高度
const MIN_HEIGHT = CONFIG.PIPE_MIN_HEIGHT;

// 朝上水管在canvas坐标里最大高度
const MAX_HEIGHT = CONFIG.PIPE_MAX_HEIGHT;
/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
export default class Pipe {
  constructor(scene) {
    this.img = assets.pipe_green;
    this.scene = scene;
    this.screenWidth = scene.canvas.width;
    this.screenHeight = scene.canvas.height;
    this.left = this.screenWidth;
    this.speed = CONFIG.PIEP_SPEED_X;
    this.lastPassedPipe = null;
    this.positions = [];
    this.initPositions();
  }

  update() {
    this.left -= this.speed;
    if (this.left <= -PIPE_WIDTH) {
      const i = this.positions.length - 1;
      this.positions = this.positions.slice(2);
      const randomHeight = MIN_HEIGHT + Math.random() * (MAX_HEIGHT - MIN_HEIGHT);
      this.positions.push({
        x: this.left + i * (PIPE_WIDTH + SPACE_WIDTH),
        y: randomHeight,
        width: this.img.width,
        height: this.screenHeight - randomHeight,
        isRotate: false,
      });
      this.positions.push({
        x: this.left + i * (PIPE_WIDTH + SPACE_WIDTH),
        y: 0,
        width: this.img.width,
        height: randomHeight - SPACE_HEIGHT,
        isRotate: true,
      });
      this.left = this.left + SPACE_WIDTH + this.img.width;
    }
    this.updatePositions();
  }
  initPositions() {
    const isComplete = this.img.complete,
      that = this,
      screenHeight = this.screenHeight,
      screenWidth = this.screenWidth;
    this.positions = [];
    if (isComplete) {
      calcPositions();
    } else {
      this.img.onload = () => {
        calcPositions();
      }
    }
    function calcPositions() {
      const PIPE_WIDTH = that.img.width;
      const pipeCount = Math.ceil((screenWidth + SPACE_WIDTH) / (PIPE_WIDTH + SPACE_WIDTH));
      for(let i = 0; i < pipeCount; i++) {
        const randomHeight = MIN_HEIGHT + Math.random() * (MAX_HEIGHT - MIN_HEIGHT);
        that.positions.push({
          x: that.left + i * (PIPE_WIDTH + SPACE_WIDTH),
          y: randomHeight,
          width: that.img.width,
          height: that.screenHeight - randomHeight,
          isRotate: false,
        });
        that.positions.push({
          x: that.left + i * (PIPE_WIDTH + SPACE_WIDTH),
          y: 0,
          width: that.img.width,
          height: randomHeight - SPACE_HEIGHT,
          isRotate: true,
        });
      }
    }
  }
  updatePositions() {
    this.positions.forEach((p, index) => {
      if (index % 2 === 0) {
        p.x = this.left + (index / 2) * (PIPE_WIDTH + SPACE_WIDTH);
      } else {
        p.x = this.left + (Math.floor(index / 2)) * (PIPE_WIDTH + SPACE_WIDTH)
      }
    });
  }
  render() {
    const ctx = this.scene.ctx;
    this.positions.forEach(p => {
      if (p.isRotate) {
        ctx.translate(this.screenWidth / 2, this.screenHeight / 2);
        ctx.rotate(Math.PI);
        ctx.drawImage(this.img, this.screenWidth / 2 - p.x - p.width, this.screenHeight / 2 - p.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
      } else {
        ctx.drawImage(this.img, p.x, p.y);
      }
    })
  }
  // 碰撞检测
  isCollideWidthBird(bird) {
    return this.positions.some(p => {
      return utility.isCollide(p, bird);
    })
  }
  // 检测是否新的pipe通过bird
  isPassBird(bird) {
    const passedPipe = this.positions.filter(p => p.x + p.width <= bird.x);
    const lastPipe = passedPipe.pop(); 
    if(!lastPipe || lastPipe === this.lastPassedPipe) {
      return false;
    }
    this.lastPassedPipe = lastPipe;
    return true;
  }
}
