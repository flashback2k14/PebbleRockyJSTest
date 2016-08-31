var _ctx;

function init (e) {  
  // get CanvasRenderingContext2D object
  _ctx = e.context;
}

function create () {
  // clear screen
  _ctx.clearRect(0, 0, _ctx.canvas.clientWidth, _ctx.canvas.clientHeight);
  // get display dimensions
  var wDisplay = _ctx.canvas.unobstructedWidth;
  var hDisplay = _ctx.canvas.unobstructedHeight;
  // get current datetime
  var currentDateTime = new Date();
  // define clock style
  _ctx.fillStyle = "white";
  _ctx.textAlign = "center";
  _ctx.font = "32px bold numbers Leco-numbers";
  // define clock position
  var txt = currentDateTime.toLocaleTimeString();
  var txtDimens = _ctx.measureText(txt);
  var posX = wDisplay / 2;
  var posY = (hDisplay / 2) - (txtDimens.height / 2);
  // draw clock
  _ctx.fillText(txt, posX, posY, wDisplay);
}

function drawWeather (data) {
  // create text
  var wString = data.celsius + " °C, " + data.desc;
  // define weather style
  _ctx.fillStyle = "lightgray";
  _ctx.textAlign = "center";
  _ctx.font = "14px bold Gothic";
  // draw weather
  _ctx.fillText(wString, 
                _ctx.canvas.unobstructedWidth / 2, 20, 
                _ctx.canvas.unobstructedWidth);
}

module.exports = {
  initClock     : init,
  createClock   : create,
  createWeather : drawWeather
};