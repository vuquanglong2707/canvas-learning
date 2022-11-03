"use strict";

let c = {
  canvas: null,
  ctx: null,
  x: undefined,
  y: undefined,
  amt: 10,
  colors: [],
  init() {
    this.canvas = document.getElementById("canvas1");
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ctx = this.canvas.getContext("2d");
    this.paint();
    this.canvas.addEventListener(
      "mousemove",
      function (e) {
        c.ctx.fillStyle = "hsla(0,0%,0%,0.05)";
        c.ctx.fillRect(0, 0, c.canvas.width, c.canvas.width);
        //         c.ctx.strokeStyle = "red";
        //         c.ctx.lineWidth = "5";
        //         c.ctx.strokeRect(e.pageX, e.pageY, 200, 20);
        c.x = e.pageX;
        c.y = e.pageY;
        for (let i = 0; i < c.amt; i++) {
          c.ctx.fillStyle = c.colors[i];
          c.ctx.fillRect(
            c.x + c.x * Math.cos((i * 36 * Math.PI) / 180),
            c.y + c.y * Math.cos((i * 36 * Math.PI) / 180),
            20,
            20
          );
        }
      },
      false
    );
  },
  paint() {
    for (let i = 0; i < this.amt; i++) {
      this.colors.push("hsla(" + (i * 360) / this.amt + ",100%,50%,1)");
    }
  },
};

c.init();
