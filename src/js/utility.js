/**
   * 简单的碰撞检测定义：
   * 另一个精灵的中心点处于本精灵所在的矩形内即可
   * @param{rect1, rect2}
   */
function isCollide(rect1, rect2) {
  let rect2X = rect2.x + rect2.width / 2
  let rect2Y = rect2.y + rect2.height / 2

  return !!(rect2X >= rect1.x
    && rect2X <= rect1.x + rect1.width
    && rect2Y >= rect1.y
    && rect2Y <= rect1.y + rect1.height)
}
function convertNumToImg(num) {
  const remotePath = 'https://lg-ifkf8f9o-1257111143.cos.ap-shanghai.myqcloud.com/';
  const imgList = [];
  while (num > 9) {
    const img = new Image();
    img.src = remotePath + 'assets/sprites/' + num % 10 + '.png';
    imgList.unshift(img);
    num = Math.floor(num / 10);
  }
  const img = new Image();
  img.src = remotePath + 'assets/sprites/' + num % 10 + '.png';
  imgList.unshift(img);
  return imgList;
}
export default {isCollide, convertNumToImg};