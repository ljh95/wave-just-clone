import { WaveGroup } from './wavegroup.js';

class App {
  constructor() {
    this.canvas = document.createElement('canvas');// canvas create
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    this.waveGroup = new WaveGroup();

    window.addEventListener('resize', this.resize.bind(this), false); //resize evenet
    this.resize();

    requestAnimationFrame(this.animate.bind(this)); // anmation start
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
    this.ctx.scale(2, 2); // canvas double size for letina display

    this.waveGroup.resize(this.stageWidth, this.stageHeight);
  }

  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight); // canvas clear

    this.waveGroup.draw(this.ctx);

    requestAnimationFrame(this.animate.bind(this));
  }
}

window.onload = () => { // window load create App
  new App();
}