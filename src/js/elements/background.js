import assets from './assets.js';
import CONFIG from '../../js/config.js';

const BG_WIDTH     = 288;
const BG_HEIGHT    = 512;
const BASE_HEIGHT = 112;
const FILL_HEIGHT = 100;
const FILL_WIDTH = 288;

/**
 * 游戏背景类
 * 提供update和render函数实现无限滚动的背景功能
 */
let instance = null;

export default class Background {
  constructor(scene) {
    if (instance) {
      return instance;
    }
    instance = this;
    this.screenWidth = scene.canvas.width;
    this.screenHeight = scene.canvas.height;
    this.img = assets.background_day;
    this.scene = scene;
    this.left = 0;
    this.speed = CONFIG.BG_SPEED_X;
    this.render();
  }

  update() {
    this.left -= this.speed;
    if (this.left <= -BG_WIDTH) {
      this.left = this.left + BG_WIDTH;
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
    const renderImg = () => {
      // 横向背景需要的图像数量
      let rowImgsCount = Math.ceil(1 + (this.screenWidth / BG_WIDTH));
      for (let i = 0; i < rowImgsCount; i++) {
        ctx.drawImage(
          this.img,
          this.left + i * BG_WIDTH,
          0
        );
      }
      // 屏幕超过 624(512+112) 需要竖向补充背景
      let extraHeight = this.screenHeight - BG_HEIGHT - BASE_HEIGHT;
      const img = assets.background_day_fill;
      let extraHeightCount = 0;
      while (extraHeight > 0) {
        // 横向需要的图片数量
        const rowFillCount = Math.ceil(this.screenWidth / FILL_WIDTH);
        for(let i = 0; i< rowFillCount; i++) {
          ctx.drawImage(
            img,
            i * FILL_WIDTH,
            BG_HEIGHT + extraHeightCount * FILL_HEIGHT
          );
        }
        extraHeightCount++;
        extraHeight -= FILL_HEIGHT;
      }
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
