// 腾讯云储存
// const remotePath = 'https://lg-ifkf8f9o-1257111143.cos.ap-shanghai.myqcloud.com/';
const remotePath = 'src/';
const assets  = {};
const imgDict = {
  background_day : remotePath + 'assets/sprites/background-day.png',
  base : remotePath + 'assets/sprites/base.png',
  redbird_downflap : remotePath + 'assets/sprites/redbird-downflap.png',
  redbird_midflap : remotePath + 'assets/sprites/redbird-midflap.png',
  redbird_upflap : remotePath + 'assets/sprites/redbird-upflap.png',
  scoreboard : remotePath + 'assets/sprites/scoreboard.png',
  pipe_green : remotePath + 'assets/sprites/pipe-green.png',
  splash : remotePath + 'assets/sprites/splash.png',
  background_day_fill : remotePath + 'assets/sprites/background-day-fill.png',
  medal_bronze: remotePath + 'assets/sprites/medal_bronze.png',
  medal_silver: remotePath + 'assets/sprites/medal_silver.png',
  medal_gold: remotePath + 'assets/sprites/medal_gold.png',
  medal_platinum: remotePath + 'assets/sprites/medal_platinum.png',
}
const audioDict = {
  audioDie : remotePath + 'assets/audio/die.wav',
  audioHit : remotePath + 'assets/audio/hit.wav',
  audioPoint : remotePath + 'assets/audio/point.wav',
  audioSwoosh : remotePath + 'assets/audio/swoosh.wav',
  audioWing : remotePath + 'assets/audio/wing.wav',
}

Object.keys(imgDict).forEach(key => {
  const img = new Image();
  img.src = imgDict[key];
  assets[key] = img;
})
Object.keys(audioDict).forEach(key => {
  const audio = new Audio();
  audio.src = audioDict[key];
  assets[key] = audio;
});

export default assets;
  