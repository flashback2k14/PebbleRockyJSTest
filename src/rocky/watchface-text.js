function create (e) {
  // get CanvasRenderingContext2D object
  var ctx = e.context;
  // clear screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);
  // get display dimensions
  var wDisplay = ctx.canvas.unobstructedWidth;
  var hDisplay = ctx.canvas.unobstructedHeight;
  /**
   * draw rectangle
   */
  // define rectangle style
  ctx.strokeStyle = "white";
  // define rectangle position
  var rectHeight = 60;
  var y = (hDisplay / 2) - (rectHeight / 2);
  // draw rectangle  
  ctx.strokeRect(0, y, wDisplay, rectHeight);
  /**
   * draw text
   */
  // define text style
  ctx.fillStyle = "white";
  ctx.textAlign = "center";
  ctx.font = "21px Roboto";
  // define text position
  var txt = "HELLO\nPebble";
  var txtDimens = ctx.measureText(txt);
  var offsetY = 4;
  var posX = (wDisplay / 2);
  var posY = (hDisplay / 2) - (txtDimens.height / 2) - offsetY;
  // draw text
  ctx.fillText(txt, posX, posY, wDisplay);
}

module.exports.createText = create;