import assets from './assets.js'
import CONFIG from '../../js/config.js';

const BASE_HEIGHT = 112;
const BASE_WIDTH = 336;
const BG_WIDTH = 288;
const BG_HEIGHT = 512;
/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
let instance = null;

export default class Base{
  constructor(scene) {
    if(this.instance) {
      return instance;
    }
    instance = this;
    this.img = assets.base;
    this.scene = scene;
    this.screenWidth = scene.canvas.width;
    this.screenHeight = scene.canvas.height;
    this.left = 0;
    this.speed = CONFIG.BG_SPEED_X;
    this.render();
  }

  update() {
    this.left -= this.speed;
    if (this.left <= -BASE_WIDTH) {
      const offset = this.left + BASE_WIDTH;
      this.left = offset;
    }
  }

  /**
   * 背景图重绘函数
   * 绘制两张图片，两张图片大小和屏幕一致
   * 第一张漏出高度为top部分，其余的隐藏在屏幕上面
   * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面
   */
  render() {
    const isComplete = this.img.complete;
    const ctx = this.scene.ctx;
    const y = this.screenHeight - BASE_HEIGHT;
    const renderImg = () => {
      ctx.drawImage(
        this.img,
        this.left,
        y
      )
      ctx.drawImage(
        this.img,
        this.left + BASE_WIDTH,
        y
      )
      ctx.drawImage(
        this.img,
        this.left + BASE_WIDTH*2,
        y
      )
    };
    if (isComplete) {
      renderImg();
    } else {
      this.img.onload = () => {
        renderImg();
      }
    }
  }
}
