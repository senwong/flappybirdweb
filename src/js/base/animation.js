/**
 * 简易的帧动画类实现
 */
export default class Animation {
  constructor(img, width, height) {
    this.img = img;
    this.width = width;
    this.height = height;
    // 当前动画是否播放中
    this.isPlaying = false

    // 动画是否需要循环播放
    this.loop = false

    // 每一帧的时间间隔
    this.interval = 1000 / 60

    // 帧定时器
    // this[__.timer] = null

    // 当前播放的帧
    this.index = 0

    // 总帧数
    this.count = 3

    // 帧图片集合
    this.imgList = []

    // 每帧之间的间隔
    this.frameInterval = 6;
    this.curInterval = 0;
  }

  // 将播放中的帧绘制到canvas上
  aniRender(ctx) {
    ctx.drawImage(
      this.imgList[this.index],
      this.x,
      this.y,
      this.width  * 1,
      this.height * 1
    )
    if (this.curInterval == 0) {
      
      this.index++;
      if (this.index >= this.imgList.length) {
        this.index = 0;
      }

      this.curInterval = this.frameInterval;
    } else {
      this.curInterval -= 1;
    }
  }
}
