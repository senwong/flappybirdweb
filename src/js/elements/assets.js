// 腾讯云储存
// const remotePath = 'https://lg-ifkf8f9o-1257111143.cos.ap-shanghai.myqcloud.com/';
const path = require("path");
const background_day = require("../../assets/sprites/background-day.png");
const base = require("../../assets/sprites/base.png");
const redbird_downflap = require("../../assets/sprites/redbird-downflap.png");
const redbird_midflap = require("../../assets/sprites/redbird-midflap.png");
const redbird_upflap = require("../../assets/sprites/redbird-upflap.png");
const scoreboard = require("../../assets/sprites/scoreboard.png");
const pipe_green = require("../../assets/sprites/pipe-green.png");
const splash = require("../../assets/sprites/splash.png");
const background_day_fill = require("../../assets/sprites/background-day-fill.png");
const medal_bronze = require("../../assets/sprites/medal_bronze.png");
const medal_silver = require("../../assets/sprites/medal_silver.png");
const medal_gold = require("../../assets/sprites/medal_gold.png");
const medal_platinum = require("../../assets/sprites/medal_platinum.png");

// audio
const audioDie = require("../../assets/audio/die.wav");
const audioHit = require("../../assets/audio/hit.wav");
const audioPoint = require("../../assets/audio/point.wav");
const audioSwoosh = require("../../assets/audio/swoosh.wav");
const audioWing = require("../../assets/audio/wing.wav");

const remotePath = "";
const assets = {};
const imgDict = {
  background_day,
  base,
  redbird_downflap,
  redbird_midflap,
  redbird_upflap,
  scoreboard,
  pipe_green,
  splash,
  background_day_fill,
  medal_bronze,
  medal_silver,
  medal_gold,
  medal_platinum
};
const audioDict = {
  audioDie,
  audioHit,
  audioPoint,
  audioSwoosh,
  audioWing
};

Object.keys(imgDict).forEach(key => {
  const img = new Image();
  img.src = imgDict[key];
  assets[key] = img;
});
Object.keys(audioDict).forEach(key => {
  const audio = new Audio();
  audio.src = audioDict[key];
  assets[key] = audio;
});

export default assets;
