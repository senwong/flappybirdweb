/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/base/animation.js":
/*!**********************************!*\
  !*** ./src/js/base/animation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Animation; });\n/**\n * 简易的帧动画类实现\n */\nclass Animation {\n  constructor(img, width, height) {\n    this.img = img;\n    this.width = width;\n    this.height = height;\n    // 当前动画是否播放中\n    this.isPlaying = false\n\n    // 动画是否需要循环播放\n    this.loop = false\n\n    // 每一帧的时间间隔\n    this.interval = 1000 / 60\n\n    // 帧定时器\n    // this[__.timer] = null\n\n    // 当前播放的帧\n    this.index = 0\n\n    // 总帧数\n    this.count = 3\n\n    // 帧图片集合\n    this.imgList = []\n\n    // 每帧之间的间隔\n    this.frameInterval = 6;\n    this.curInterval = 0;\n  }\n\n  // 将播放中的帧绘制到canvas上\n  aniRender(ctx) {\n    ctx.drawImage(\n      this.imgList[this.index],\n      this.x,\n      this.y,\n      this.width  * 1,\n      this.height * 1\n    )\n    if (this.curInterval == 0) {\n      \n      this.index++;\n      if (this.index >= this.imgList.length) {\n        this.index = 0;\n      }\n\n      this.curInterval = this.frameInterval;\n    } else {\n      this.curInterval -= 1;\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/base/animation.js?");

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst config = {\n  SCORE_Y: 80,            // 分数显示在Y轴上位置\n  OVER_TITLE_Y: 80,       // 结束计分板在Y轴上位置\n  BG_SPEED_X: 2,          // 背景横向移动速度\n  PIEP_SPEED_X: 1,        // 水管横向移动速度\n  PIPE_MIN_HEIGHT: 300,   // 朝上的水管在Y轴上的最小值\n  PIPE_MAX_HEIGHT: 400,   // 朝上的水管在Y轴上的最大值\n  PIPE_SPACE_HEIGHT: 100, // 上下水管在竖直方向上间距\n  PIPE_SPACE_WIDTH: 150,  // 左右水管在水平反向上间距\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (config);\n\n//# sourceURL=webpack:///./src/js/config.js?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/audio\\/die\\.wav$":
/*!**********************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/audio\/die\.wav$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/die\\\\.wav$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/audio\\/die\\.wav$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/audio\\/hit\\.wav$":
/*!**********************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/audio\/hit\.wav$ ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/hit\\\\.wav$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/audio\\/hit\\.wav$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/audio\\/point\\.wav$":
/*!************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/audio\/point\.wav$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/point\\\\.wav$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/audio\\/point\\.wav$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/audio\\/swoosh\\.wav$":
/*!*************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/audio\/swoosh\.wav$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/swoosh\\\\.wav$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/audio\\/swoosh\\.wav$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/audio\\/wing\\.wav$":
/*!***********************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/audio\/wing\.wav$ ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/wing\\\\.wav$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/audio\\/wing\\.wav$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/background\\-day\\-fill\\.png$":
/*!******************************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/background\-day\-fill\.png$ ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/background\\\\-day\\\\-fill\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/background\\-day\\-fill\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/background\\-day\\.png$":
/*!************************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/background\-day\.png$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/background\\\\-day\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/background\\-day\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/base\\.png$":
/*!*************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/base\.png$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/base\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/base\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/medal_bronze\\.png$":
/*!*********************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/medal_bronze\.png$ ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_bronze\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/medal_bronze\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/medal_gold\\.png$":
/*!*******************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/medal_gold\.png$ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_gold\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/medal_gold\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/medal_platinum\\.png$":
/*!***********************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/medal_platinum\.png$ ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_platinum\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/medal_platinum\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/medal_silver\\.png$":
/*!*********************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/medal_silver\.png$ ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_silver\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/medal_silver\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/pipe\\-green\\.png$":
/*!********************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/pipe\-green\.png$ ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/pipe\\\\-green\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/pipe\\-green\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/redbird\\-downflap\\.png$":
/*!**************************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/redbird\-downflap\.png$ ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/redbird\\\\-downflap\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/redbird\\-downflap\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/redbird\\-midflap\\.png$":
/*!*************************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/redbird\-midflap\.png$ ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/redbird\\\\-midflap\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/redbird\\-midflap\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/redbird\\-upflap\\.png$":
/*!************************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/redbird\-upflap\.png$ ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/redbird\\\\-upflap\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/redbird\\-upflap\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/scoreboard\\.png$":
/*!*******************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/scoreboard\.png$ ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/scoreboard\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/scoreboard\\.png$?");

/***/ }),

/***/ "./src/js/elements sync recursive ^.*assets\\/sprites\\/splash\\.png$":
/*!***************************************************************!*\
  !*** ./src/js/elements sync ^.*assets\/sprites\/splash\.png$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function webpackEmptyContext(req) {\n\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\te.code = 'MODULE_NOT_FOUND';\n\tthrow e;\n}\nwebpackEmptyContext.keys = function() { return []; };\nwebpackEmptyContext.resolve = webpackEmptyContext;\nmodule.exports = webpackEmptyContext;\nwebpackEmptyContext.id = \"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/splash\\\\.png$\";\n\n//# sourceURL=webpack:///./src/js/elements_sync_^.*assets\\/sprites\\/splash\\.png$?");

/***/ }),

/***/ "./src/js/elements/assets.js":
/*!***********************************!*\
  !*** ./src/js/elements/assets.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// 腾讯云储存\n// const remotePath = 'https://lg-ifkf8f9o-1257111143.cos.ap-shanghai.myqcloud.com/';\nconst remotePath = \"src/\";\nconst assets = {};\nconst imgDict = {\n  background_day: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/background\\\\-day\\\\.png$\")(remotePath + \"assets/sprites/background-day.png\"),\n  base: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/base\\\\.png$\")(remotePath + \"assets/sprites/base.png\"),\n  redbird_downflap: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/redbird\\\\-downflap\\\\.png$\")(remotePath + \"assets/sprites/redbird-downflap.png\"),\n  redbird_midflap: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/redbird\\\\-midflap\\\\.png$\")(remotePath + \"assets/sprites/redbird-midflap.png\"),\n  redbird_upflap: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/redbird\\\\-upflap\\\\.png$\")(remotePath + \"assets/sprites/redbird-upflap.png\"),\n  scoreboard: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/scoreboard\\\\.png$\")(remotePath + \"assets/sprites/scoreboard.png\"),\n  pipe_green: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/pipe\\\\-green\\\\.png$\")(remotePath + \"assets/sprites/pipe-green.png\"),\n  splash: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/splash\\\\.png$\")(remotePath + \"assets/sprites/splash.png\"),\n  background_day_fill: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/background\\\\-day\\\\-fill\\\\.png$\")(remotePath +\n    \"assets/sprites/background-day-fill.png\"),\n  medal_bronze: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_bronze\\\\.png$\")(remotePath + \"assets/sprites/medal_bronze.png\"),\n  medal_silver: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_silver\\\\.png$\")(remotePath + \"assets/sprites/medal_silver.png\"),\n  medal_gold: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_gold\\\\.png$\")(remotePath + \"assets/sprites/medal_gold.png\"),\n  medal_platinum: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/sprites\\\\/medal_platinum\\\\.png$\")(remotePath + \"assets/sprites/medal_platinum.png\")\n};\nconst audioDict = {\n  audioDie: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/die\\\\.wav$\")(remotePath + \"assets/audio/die.wav\"),\n  audioHit: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/hit\\\\.wav$\")(remotePath + \"assets/audio/hit.wav\"),\n  audioPoint: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/point\\\\.wav$\")(remotePath + \"assets/audio/point.wav\"),\n  audioSwoosh: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/swoosh\\\\.wav$\")(remotePath + \"assets/audio/swoosh.wav\"),\n  audioWing: __webpack_require__(\"./src/js/elements sync recursive ^.*assets\\\\/audio\\\\/wing\\\\.wav$\")(remotePath + \"assets/audio/wing.wav\")\n};\n\nObject.keys(imgDict).forEach(key => {\n  const img = new Image();\n  img.src = imgDict[key];\n  assets[key] = img;\n});\nObject.keys(audioDict).forEach(key => {\n  const audio = new Audio();\n  audio.src = audioDict[key];\n  assets[key] = audio;\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (assets);\n\n\n//# sourceURL=webpack:///./src/js/elements/assets.js?");

/***/ }),

/***/ "./src/js/elements/background.js":
/*!***************************************!*\
  !*** ./src/js/elements/background.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Background; });\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.js */ \"./src/js/elements/assets.js\");\n/* harmony import */ var _js_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/config.js */ \"./src/js/config.js\");\n\n\n\nconst BG_WIDTH     = 288;\nconst BG_HEIGHT    = 512;\nconst BASE_HEIGHT = 112;\nconst FILL_HEIGHT = 100;\nconst FILL_WIDTH = 288;\n\n/**\n * 游戏背景类\n * 提供update和render函数实现无限滚动的背景功能\n */\nlet instance = null;\n\nclass Background {\n  constructor(scene) {\n    if (instance) {\n      return instance;\n    }\n    instance = this;\n    this.screenWidth = scene.canvas.width;\n    this.screenHeight = scene.canvas.height;\n    this.img = _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].background_day;\n    this.scene = scene;\n    this.left = 0;\n    this.speed = _js_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BG_SPEED_X;\n    this.render();\n  }\n\n  update() {\n    this.left -= this.speed;\n    if (this.left <= -BG_WIDTH) {\n      this.left = this.left + BG_WIDTH;\n    }\n  }\n\n  /**\n   * 背景图重绘函数\n   * 绘制两张图片，两张图片大小和屏幕一致\n   * 第一张漏出高度为top部分，其余的隐藏在屏幕上面\n   * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面\n   */\n  render() {\n    const isComplete = this.img.complete;\n    const ctx = this.scene.ctx;\n    const renderImg = () => {\n      // 横向背景需要的图像数量\n      let rowImgsCount = Math.ceil(1 + (this.screenWidth / BG_WIDTH));\n      for (let i = 0; i < rowImgsCount; i++) {\n        ctx.drawImage(\n          this.img,\n          this.left + i * BG_WIDTH,\n          0\n        );\n      }\n      // 屏幕超过 624(512+112) 需要竖向补充背景\n      let extraHeight = this.screenHeight - BG_HEIGHT - BASE_HEIGHT;\n      const img = _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].background_day_fill;\n      let extraHeightCount = 0;\n      while (extraHeight > 0) {\n        // 横向需要的图片数量\n        const rowFillCount = Math.ceil(this.screenWidth / FILL_WIDTH);\n        for(let i = 0; i< rowFillCount; i++) {\n          ctx.drawImage(\n            img,\n            i * FILL_WIDTH,\n            BG_HEIGHT + extraHeightCount * FILL_HEIGHT\n          );\n        }\n        extraHeightCount++;\n        extraHeight -= FILL_HEIGHT;\n      }\n    };\n    if (isComplete) {\n      renderImg();\n    } else {\n      this.img.onload = () => {\n        renderImg();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/elements/background.js?");

/***/ }),

/***/ "./src/js/elements/base.js":
/*!*********************************!*\
  !*** ./src/js/elements/base.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Base; });\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.js */ \"./src/js/elements/assets.js\");\n/* harmony import */ var _js_config_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../js/config.js */ \"./src/js/config.js\");\n\n\n\nconst BASE_HEIGHT = 112;\nconst BASE_WIDTH = 336;\nconst BG_WIDTH = 288;\nconst BG_HEIGHT = 512;\n/**\n * 游戏背景类\n * 提供update和render函数实现无限滚动的背景功能\n */\nlet instance = null;\n\nclass Base{\n  constructor(scene) {\n    if(this.instance) {\n      return instance;\n    }\n    instance = this;\n    this.img = _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].base;\n    this.scene = scene;\n    this.screenWidth = scene.canvas.width;\n    this.screenHeight = scene.canvas.height;\n    this.left = 0;\n    this.speed = _js_config_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].BG_SPEED_X;\n    this.render();\n  }\n\n  update() {\n    this.left -= this.speed;\n    if (this.left <= -BASE_WIDTH) {\n      const offset = this.left + BASE_WIDTH;\n      this.left = offset;\n    }\n  }\n\n  /**\n   * 背景图重绘函数\n   * 绘制两张图片，两张图片大小和屏幕一致\n   * 第一张漏出高度为top部分，其余的隐藏在屏幕上面\n   * 第二张补全除了top高度之外的部分，其余的隐藏在屏幕下面\n   */\n  render() {\n    const isComplete = this.img.complete;\n    const ctx = this.scene.ctx;\n    const y = this.screenHeight - BASE_HEIGHT;\n    const renderImg = () => {\n      ctx.drawImage(\n        this.img,\n        this.left,\n        y\n      )\n      ctx.drawImage(\n        this.img,\n        this.left + BASE_WIDTH,\n        y\n      )\n      ctx.drawImage(\n        this.img,\n        this.left + BASE_WIDTH*2,\n        y\n      )\n    };\n    if (isComplete) {\n      renderImg();\n    } else {\n      this.img.onload = () => {\n        renderImg();\n      }\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/elements/base.js?");

/***/ }),

/***/ "./src/js/elements/bird.js":
/*!*********************************!*\
  !*** ./src/js/elements/bird.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Bird; });\n/* harmony import */ var _base_animation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/animation.js */ \"./src/js/base/animation.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.js */ \"./src/js/elements/assets.js\");\n/* harmony import */ var _music_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music.js */ \"./src/js/elements/music.js\");\n\n\n\n\nconst FRAMES = [_assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redbird_downflap, _assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redbird_midflap, _assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].redbird_upflap];\nconst BIRD_SRC = FRAMES[0];\nconst BIRD_WIDTH = 34\nconst BIRD_HEIGHT = 24\nconst BIRD_ANGLE = 20\nconst music = new _music_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\n\nfunction rnd(start, end) {\n  return Math.floor(Math.random() * (end - start) + start)\n}\n\nclass Bird extends _base_animation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(scene) {\n    super(BIRD_SRC, BIRD_WIDTH, BIRD_HEIGHT)\n    this.scene = scene;\n    this.height = BIRD_HEIGHT;\n    this.imgList = FRAMES;\n    this.screenWidth = scene.canvas.width;\n    this.screenHeight = scene.canvas.height;\n    this.x = this.screenWidth / 2;\n    this.y = this.screenHeight / 2;\n    this.ySpeed = 1;\n    this.jumpSpeed = 10;\n    this.g = 1;\n\n    // 向上走或者向下走鸟的仰角, 单位为度\n    this.birdAngle = 0;\n\n    // 每帧之间的间隔\n    this.frameInterval = 2;\n    this.curInterval = 0;\n  }\n\n  render() {\n    const ctx = this.scene.ctx;\n    if (this.ySpeed < 0) { // 向上走\n      this.birdAngle = -BIRD_ANGLE;\n    } else if(this.ySpeed > 0) { // 向下走\n      this.birdAngle = BIRD_ANGLE;\n    } else { // 静止不动\n      this.birdAngle = 0;\n    }\n\n    this.birdAngle = this.birdAngle * Math.PI / 180;\n    ctx.translate( this.x + BIRD_WIDTH / 2, this.y + BIRD_HEIGHT / 2);\n    ctx.rotate(this.birdAngle);\n    const tempX = this.x, tempY = this.y;\n    this.x = -BIRD_WIDTH / 2;\n    this.y = -BIRD_HEIGHT / 2;\n    this.aniRender(ctx);\n    this.x = tempX;\n    this.y = tempY;\n    ctx.setTransform(1, 0, 0, 1, 0, 0);\n  }\n  \n  // 每一帧更新子弹位置\n  update() {\n    if (this.curInterval == 0) {\n      updateBird.bind(this)();\n      this.curInterval = this.frameInterval;\n    } else {\n      this.curInterval -= 1;\n    }\n    function updateBird() {\n      this.y += this.ySpeed;\n      this.ySpeed += this.g;\n    }\n  }\n  jump() {\n    this.ySpeed = -this.jumpSpeed;\n    music.playWing();\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/elements/bird.js?");

/***/ }),

/***/ "./src/js/elements/music.js":
/*!**********************************!*\
  !*** ./src/js/elements/music.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Music; });\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.js */ \"./src/js/elements/assets.js\");\n\n\nlet instance = null;\nclass Music {\n  constructor() {\n    if (instance) {\n      return instance;\n    }\n    instance = this;\n  }\n  playDie() {\n    _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioDie.play();\n  }\n  playHit() {\n    _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioHit.play();\n  }\n  playPoint() {\n    _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioPoint.play();\n  }\n  playSwoosh() {\n    _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioSwoosh.play();\n  }\n  playWing() {\n    _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioWing.play();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/elements/music.js?");

/***/ }),

/***/ "./src/js/elements/overTitle.js":
/*!**************************************!*\
  !*** ./src/js/elements/overTitle.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OverTitle; });\n/* harmony import */ var _js_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/config.js */ \"./src/js/config.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.js */ \"./src/js/elements/assets.js\");\n\n\n\nconst TITLE_WIDTH = 236;\nconst TITLE_HEIGHT = 42;\n\nclass OverTitle {\n  constructor(scene) {\n    this.img = _assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].scoreboard;\n    this.ctx = scene.ctx;\n    this.screenWidth = scene.canvas.width;\n    this.width = TITLE_WIDTH;\n    this.x = (this.screenWidth - TITLE_WIDTH) / 2;\n    this.y = _js_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].OVER_TITLE_Y;\n  }\n  update() {\n\n  }\n  render() {\n    this.ctx.drawImage(this.img, this.x, this.y);\n  }\n}\n\n//# sourceURL=webpack:///./src/js/elements/overTitle.js?");

/***/ }),

/***/ "./src/js/elements/pipe.js":
/*!*********************************!*\
  !*** ./src/js/elements/pipe.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pipe; });\n/* harmony import */ var _js_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/utility.js */ \"./src/js/utility.js\");\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets.js */ \"./src/js/elements/assets.js\");\n/* harmony import */ var _js_config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../js/config.js */ \"./src/js/config.js\");\n\n\n\n\nconst PIPE_IMG_SRC = _assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pipe_green;\n\n// 水管的宽度和高度\nconst PIPE_WIDTH = 52;\nconst PIPE_HEIGHT = 512;\n\n// 水管竖直方向间距\nconst SPACE_HEIGHT = _js_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PIPE_SPACE_HEIGHT;\n\n// 水管水平反向间距\nconst SPACE_WIDTH = _js_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PIPE_SPACE_WIDTH;\n\n// 朝上水管在canvas坐标里最小高度\nconst MIN_HEIGHT = _js_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PIPE_MIN_HEIGHT;\n\n// 朝上水管在canvas坐标里最大高度\nconst MAX_HEIGHT = _js_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PIPE_MAX_HEIGHT;\n/**\n * 游戏背景类\n * 提供update和render函数实现无限滚动的背景功能\n */\nclass Pipe {\n  constructor(scene) {\n    this.img = _assets_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pipe_green;\n    this.scene = scene;\n    this.screenWidth = scene.canvas.width;\n    this.screenHeight = scene.canvas.height;\n    this.left = this.screenWidth;\n    this.speed = _js_config_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].PIEP_SPEED_X;\n    this.lastPassedPipe = null;\n    this.positions = [];\n    this.initPositions();\n  }\n\n  update() {\n    this.left -= this.speed;\n    if (this.left <= -PIPE_WIDTH) {\n      const i = this.positions.length - 1;\n      this.positions = this.positions.slice(2);\n      const randomHeight = MIN_HEIGHT + Math.random() * (MAX_HEIGHT - MIN_HEIGHT);\n      this.positions.push({\n        x: this.left + i * (PIPE_WIDTH + SPACE_WIDTH),\n        y: randomHeight,\n        width: this.img.width,\n        height: this.screenHeight - randomHeight,\n        isRotate: false,\n      });\n      this.positions.push({\n        x: this.left + i * (PIPE_WIDTH + SPACE_WIDTH),\n        y: 0,\n        width: this.img.width,\n        height: randomHeight - SPACE_HEIGHT,\n        isRotate: true,\n      });\n      this.left = this.left + SPACE_WIDTH + this.img.width;\n    }\n    this.updatePositions();\n  }\n  initPositions() {\n    const isComplete = this.img.complete,\n      that = this,\n      screenHeight = this.screenHeight,\n      screenWidth = this.screenWidth;\n    this.positions = [];\n    if (isComplete) {\n      calcPositions();\n    } else {\n      this.img.onload = () => {\n        calcPositions();\n      }\n    }\n    function calcPositions() {\n      const PIPE_WIDTH = that.img.width;\n      const pipeCount = Math.ceil((screenWidth + SPACE_WIDTH) / (PIPE_WIDTH + SPACE_WIDTH));\n      for(let i = 0; i < pipeCount; i++) {\n        const randomHeight = MIN_HEIGHT + Math.random() * (MAX_HEIGHT - MIN_HEIGHT);\n        that.positions.push({\n          x: that.left + i * (PIPE_WIDTH + SPACE_WIDTH),\n          y: randomHeight,\n          width: that.img.width,\n          height: that.screenHeight - randomHeight,\n          isRotate: false,\n        });\n        that.positions.push({\n          x: that.left + i * (PIPE_WIDTH + SPACE_WIDTH),\n          y: 0,\n          width: that.img.width,\n          height: randomHeight - SPACE_HEIGHT,\n          isRotate: true,\n        });\n      }\n    }\n  }\n  updatePositions() {\n    this.positions.forEach((p, index) => {\n      if (index % 2 === 0) {\n        p.x = this.left + (index / 2) * (PIPE_WIDTH + SPACE_WIDTH);\n      } else {\n        p.x = this.left + (Math.floor(index / 2)) * (PIPE_WIDTH + SPACE_WIDTH)\n      }\n    });\n  }\n  render() {\n    const ctx = this.scene.ctx;\n    this.positions.forEach(p => {\n      if (p.isRotate) {\n        ctx.translate(this.screenWidth / 2, this.screenHeight / 2);\n        ctx.rotate(Math.PI);\n        ctx.drawImage(this.img, this.screenWidth / 2 - p.x - p.width, this.screenHeight / 2 - p.height);\n        ctx.setTransform(1, 0, 0, 1, 0, 0);\n      } else {\n        ctx.drawImage(this.img, p.x, p.y);\n      }\n    })\n  }\n  // 碰撞检测\n  isCollideWidthBird(bird) {\n    return this.positions.some(p => {\n      return _js_utility_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].isCollide(p, bird);\n    })\n  }\n  // 检测是否新的pipe通过bird\n  isPassBird(bird) {\n    const passedPipe = this.positions.filter(p => p.x + p.width <= bird.x);\n    const lastPipe = passedPipe.pop(); \n    if(!lastPipe || lastPipe === this.lastPassedPipe) {\n      return false;\n    }\n    this.lastPassedPipe = lastPipe;\n    return true;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/elements/pipe.js?");

/***/ }),

/***/ "./src/js/elements/scoreInfo.js":
/*!**************************************!*\
  !*** ./src/js/elements/scoreInfo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ScoreInfo; });\n/* harmony import */ var _js_config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../js/config.js */ \"./src/js/config.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utility.js */ \"./src/js/utility.js\");\n\n\n\nconst SCORE_WIDTH = 24;\nclass ScoreInfo {\n  constructor(game) {\n    this.game = game;\n    this.score = 0;\n    this.ctx = game.ctx;\n    this.screenWidth = game.canvas.width;\n    this.y = _js_config_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].SCORE_Y;\n  }\n  render() {\n    this.imgList = _utility_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].convertNumToImg(this.game.getScore());\n    const scoreWidth = this.imgList.length * SCORE_WIDTH;\n    this.x = (this.screenWidth - scoreWidth) / 2;\n    for (let i = 0; i< this.imgList.length; i++) {\n      this.ctx.drawImage(this.imgList[i], this.x + i * SCORE_WIDTH, this.y);\n    }\n  }\n  update() {\n    // this.score = this.game.getScore();\n  }\n  setPosition(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\n\n//# sourceURL=webpack:///./src/js/elements/scoreInfo.js?");

/***/ }),

/***/ "./src/js/elements/startBtn.js":
/*!*************************************!*\
  !*** ./src/js/elements/startBtn.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return StartBtn; });\n/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.js */ \"./src/js/elements/assets.js\");\n\n\nlet instance = null;\n\nclass StartBtn {\n  constructor(scene) {\n    if(instance) {\n      return instance;\n    }\n    this.ctx = scene.ctx;\n    this.screenWidth = scene.canvas.width;\n    this.screenHeight = scene.canvas.height;\n    instance = this;\n    this.init();\n  }\n  init() {\n    this.img = _assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].splash;\n    this.img.onload = () => {\n      const BTN_WIDTH = this.img.width;\n      const BTN_HEIGHT = this.img.height;\n      this.btnArea = {\n        startX: (this.screenWidth - BTN_WIDTH) / 2,\n        startY: (this.screenHeight - BTN_HEIGHT) / 2,\n        endX: (this.screenWidth + BTN_WIDTH) / 2,\n        endY: (this.screenHeight + BTN_HEIGHT) / 2\n      }\n    }\n  }\n  render() {\n    if(this.img.complete) {\n      this.ctx.drawImage(\n        this.img,\n        (this.screenWidth - this.img.width) / 2,\n        (this.screenHeight - this.img.height) / 2\n      )\n    }\n  }\n  update() {\n\n  }\n}\n\n//# sourceURL=webpack:///./src/js/elements/startBtn.js?");

/***/ }),

/***/ "./src/js/game.js":
/*!************************!*\
  !*** ./src/js/game.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _scene_start_start_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scene/start/start.js */ \"./src/js/scene/start/start.js\");\n/* harmony import */ var _js_music_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/music.js */ \"./src/js/music.js\");\n\n\nconst music = new _js_music_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\n/**\n * 游戏主函数\n */\nclass Game {\n  constructor(canvas) {\n    this.score = 0;\n    this.canvas = canvas;\n    this.ctx = canvas.getContext('2d');\n    this.scene = new _scene_start_start_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this)\n    this.run();\n  }\n  render() {\n    this.scene.render()\n  }\n  update() {\n    this.scene.update()\n  }\n  increaseScore() {\n    this.score+=2;\n    music.playPoint();\n    console.log('score: ', this.score);\n  }\n  getScore() {\n    return this.score;\n  }\n  run() {\n    const that = this;\n    function loop() {\n      that.render();\n      that.update();\n      window.requestAnimationFrame(loop);\n    }\n    window.requestAnimationFrame(loop);\n  }\n  replaceScene(newScene) {\n    this.scene = newScene;\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/game.js?");

/***/ }),

/***/ "./src/js/music.js":
/*!*************************!*\
  !*** ./src/js/music.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Music; });\n/* harmony import */ var _js_elements_assets_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/elements/assets.js */ \"./src/js/elements/assets.js\");\n\n\nlet instance = null;\nclass Music {\n  constructor() {\n    if (instance) {\n      return instance;\n    }\n    instance = this;\n  }\n  playDie() {\n    _js_elements_assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioDie.play();\n  }\n  playHit() {\n    _js_elements_assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioHit.play();\n  }\n  playPoint() {\n    _js_elements_assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioPoint.play();\n  }\n  playSwoosh() {\n    _js_elements_assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioSwoosh.play();\n  }\n  playWing() {\n    _js_elements_assets_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].audioWing.play();\n  }\n}\n\n//# sourceURL=webpack:///./src/js/music.js?");

/***/ }),

/***/ "./src/js/scene/end/end.js":
/*!*********************************!*\
  !*** ./src/js/scene/end/end.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return End; });\n/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.js */ \"./src/js/scene/scene.js\");\n/* harmony import */ var _elements_overTitle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/overTitle.js */ \"./src/js/elements/overTitle.js\");\n/* harmony import */ var _elements_background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/background.js */ \"./src/js/elements/background.js\");\n/* harmony import */ var _scene_start_start_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../scene/start/start.js */ \"./src/js/scene/start/start.js\");\n/* harmony import */ var _elements_base_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/base.js */ \"./src/js/elements/base.js\");\n/* harmony import */ var _elements_scoreInfo_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../elements/scoreInfo.js */ \"./src/js/elements/scoreInfo.js\");\n/* harmony import */ var _utility_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utility.js */ \"./src/js/utility.js\");\n/* harmony import */ var _elements_assets_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../elements/assets.js */ \"./src/js/elements/assets.js\");\n\n\n\n\n\n\n\n\n\nclass End extends _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(game) {\n    super(game);\n    this.overTitle = new _elements_overTitle_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    const background = new _elements_background_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    const base = new _elements_base_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n    this.ctx = game.ctx;\n    this.screenWidth = game.canvas.width;\n    this.addElements(background);\n    this.addElements(base);\n    this.addElements(this.overTitle);\n    \n    this.bindTouch = this.handleTouchStart.bind(this)\n    this.initEvents();\n  }\n  initEvents() {\n    // canvas.addEventListener('touchstart', this.bindTouch);\n    this.canvas.onclick = this.bindTouch;\n  }\n  render() {\n    super.render();\n    this.renderScore();\n    this.renderMedal();\n  }\n  renderScore() {\n    const score = this.game.getScore();\n    const scoreImgs = _utility_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"].convertNumToImg(score);\n    const scaleRatio = 25 / 36;\n    this.ctx.scale(scaleRatio, scaleRatio);\n    scoreImgs.forEach( (img, index) => {\n      const x = ((this.screenWidth - this.overTitle.width) / 2 + 166 + index * img.width) / scaleRatio;\n      const y = (this.overTitle.y + 100) / scaleRatio;\n      this.ctx.drawImage(img, x, y);\n    })\n    this.ctx.setTransform(1, 0, 0, 1, 0, 0);\n  }\n  renderMedal() {\n    const score = this.game.getScore();\n    let medal = null;\n    if (score < 100) {\n      medal = _elements_assets_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].medal_bronze;\n    } else if(score < 200) {\n      medal = _elements_assets_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].medal_silver;\n    } else if (score < 300) {\n      medal = _elements_assets_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].medal_gold;\n    } else {\n      medal = _elements_assets_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"].medal_platinum;\n    }\n    this.ctx.drawImage(medal, (this.screenWidth - this.overTitle.width) / 2 + 33, this.overTitle.y + 115);\n  }\n  handleTouchStart(e) {\n    const start = new _scene_start_start_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.game);\n    this.game.replaceScene(start);\n  }\n  update(){}\n}\n\n//# sourceURL=webpack:///./src/js/scene/end/end.js?");

/***/ }),

/***/ "./src/js/scene/running/running.js":
/*!*****************************************!*\
  !*** ./src/js/scene/running/running.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Running; });\n/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.js */ \"./src/js/scene/scene.js\");\n/* harmony import */ var _elements_background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/background.js */ \"./src/js/elements/background.js\");\n/* harmony import */ var _elements_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/base.js */ \"./src/js/elements/base.js\");\n/* harmony import */ var _elements_bird_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/bird.js */ \"./src/js/elements/bird.js\");\n/* harmony import */ var _elements_pipe_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements/pipe.js */ \"./src/js/elements/pipe.js\");\n/* harmony import */ var _end_end_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../end/end.js */ \"./src/js/scene/end/end.js\");\n/* harmony import */ var _elements_scoreInfo_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../elements/scoreInfo.js */ \"./src/js/elements/scoreInfo.js\");\n/* harmony import */ var _js_music_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../js/music.js */ \"./src/js/music.js\");\n\n\n\n\n\n\n\n\n\nconst music = new _js_music_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"];\nconst BASE_HEIGHT = 112;\n\n\nclass Running extends _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(game) {\n    super(game);\n    this.bindTouch = this.touchHandler.bind(this);\n    this.screenHeight = game.canvas.height;\n    this.initElements();\n    this.initEvents();\n  }\n  initElements() {\n    const background = new _elements_background_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    const base = new _elements_base_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.bird = new _elements_bird_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n    this.pipe = new _elements_pipe_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this);\n    const scoreInfo = new _elements_scoreInfo_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.game);\n\n    this.addElements(background);\n    this.addElements(this.pipe);\n    this.addElements(base);\n    this.addElements(scoreInfo);\n    this.addElements(this.bird);\n  }\n  initEvents() {\n    this.canvas.onclick = this.bindTouch;\n  }\n  touchHandler(e) {\n    // e.preventDefault();\n    this.bird.jump();\n  }\n  update(ctx) {\n    super.update(ctx);\n    \n    if (this.bird.y + this.bird.height > this.screenHeight - BASE_HEIGHT\n      || this.pipe.isCollideWidthBird(this.bird)) {\n      music.playHit();\n      const endScene = new _end_end_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.game);\n      this.game.replaceScene(endScene);\n    }\n    if (this.pipe.isPassBird(this.bird)) {\n      this.game.increaseScore();\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/scene/running/running.js?");

/***/ }),

/***/ "./src/js/scene/scene.js":
/*!*******************************!*\
  !*** ./src/js/scene/scene.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Scene; });\nclass Scene {\n  constructor(game) {\n    this.game = game;\n    this.canvas = game.canvas;\n    this.ctx = game.ctx;\n    this.elements = [];\n  }\n  addElements(e) {\n    this.elements.push(e);\n  }\n  render() {\n    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);\n    this.elements.forEach(e => e.render());\n  }\n  update() {\n    this.elements.forEach(e => e.update());\n  }\n}\n\n//# sourceURL=webpack:///./src/js/scene/scene.js?");

/***/ }),

/***/ "./src/js/scene/start/start.js":
/*!*************************************!*\
  !*** ./src/js/scene/start/start.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Start; });\n/* harmony import */ var _scene_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scene.js */ \"./src/js/scene/scene.js\");\n/* harmony import */ var _elements_background_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../elements/background.js */ \"./src/js/elements/background.js\");\n/* harmony import */ var _elements_base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../elements/base.js */ \"./src/js/elements/base.js\");\n/* harmony import */ var _elements_startBtn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements/startBtn.js */ \"./src/js/elements/startBtn.js\");\n/* harmony import */ var _running_running_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../running/running.js */ \"./src/js/scene/running/running.js\");\n\n\n\n\n\n\nclass Start extends _scene_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\n  constructor(game) {\n    super(game);\n    this.initElements();\n    this.initEvents();\n  }\n  initElements() {\n    const background = new _elements_background_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this);\n    const base = new _elements_base_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this);\n    this.startBtn = new _elements_startBtn_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this);\n\n    this.addElements(background);\n    this.addElements(base);\n    this.addElements(this.startBtn);\n  }\n  initEvents() {\n    this.bindTouch = this.touchHandler.bind(this);\n    // this.canvas.addEventListener('touchstart', this.bindTouch);\n    this.canvas.onclick = this.bindTouch;\n  }\n  touchHandler(e) {\n    /* touch\n    e.preventDefault();\n    let x = e.touches[0].clientX\n    let y = e.touches[0].clientY\n    */\n\n    // click\n    let x = e.layerX;\n    let y = e.layerY;\n    let area = this.startBtn.btnArea;\n    if (x >= area.startX\n      && x <= area.endX\n      && y >= area.startY\n      && y <= area.endY) {\n        const running = new _running_running_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.game);\n        this.game.replaceScene(running);\n        this.game.score = 0;\n      }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/js/scene/start/start.js?");

/***/ }),

/***/ "./src/js/utility.js":
/*!***************************!*\
  !*** ./src/js/utility.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/**\n   * 简单的碰撞检测定义：\n   * 另一个精灵的中心点处于本精灵所在的矩形内即可\n   * @param{rect1, rect2}\n   */\nfunction isCollide(rect1, rect2) {\n  let rect2X = rect2.x + rect2.width / 2\n  let rect2Y = rect2.y + rect2.height / 2\n\n  return !!(rect2X >= rect1.x\n    && rect2X <= rect1.x + rect1.width\n    && rect2Y >= rect1.y\n    && rect2Y <= rect1.y + rect1.height)\n}\nfunction convertNumToImg(num) {\n  const remotePath = 'https://lg-ifkf8f9o-1257111143.cos.ap-shanghai.myqcloud.com/';\n  const imgList = [];\n  while (num > 9) {\n    const img = new Image();\n    img.src = remotePath + 'assets/sprites/' + num % 10 + '.png';\n    imgList.unshift(img);\n    num = Math.floor(num / 10);\n  }\n  const img = new Image();\n  img.src = remotePath + 'assets/sprites/' + num % 10 + '.png';\n  imgList.unshift(img);\n  return imgList;\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = ({isCollide, convertNumToImg});\n\n//# sourceURL=webpack:///./src/js/utility.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/game */ \"./src/js/game.js\");\n\n\nconst canvas = document.querySelector(\"#game\");\nnew _js_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });