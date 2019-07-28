export default class Scene {
  constructor(game) {
    this.game = game;
    this.canvas = game.canvas;
    this.ctx = game.ctx;
    this.elements = [];
  }
  addElements(e) {
    this.elements.push(e);
  }
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.elements.forEach(e => e.render());
  }
  update() {
    this.elements.forEach(e => e.update());
  }
}