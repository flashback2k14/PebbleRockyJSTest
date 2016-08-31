/**
 * inspired by
 *   Introduction : https://developer.pebble.com/blog/2016/08/15/introducing-rockyjs-watchfaces/
 *   Tutorial #1  : https://developer.pebble.com/tutorials/js-watchface-tutorial/part1/
 *   Tutorial #2  : https://developer.pebble.com/tutorials/js-watchface-tutorial/part2/
 */
var rocky = require("rocky");
var watchfaceClock = require("./watchface-clock");
var weatherData = null;
var isFirstRun = true;


rocky.on("draw", function (event) {
  // init clock  
  watchfaceClock.initClock(event);
  // draw clock data
  watchfaceClock.createClock();
  // check if weather data is available
  if (weatherData) {
    // draw weather data
    watchfaceClock.createWeather(weatherData);
  }
});


rocky.on("secondchange", function (event) {
  // check if first run --> call weather api
  if (isFirstRun) {
    rocky.postMessage({'fetch': true});
    isFirstRun = false;
  }
  // call on-draw
  rocky.requestDraw();
});


rocky.on("minutechange", function (event) {
  // fetch every 2 minutes weather api
  if (new Date().getMinutes() % 10 === 0) {
    rocky.postMessage({'fetch': true});
  }
});


rocky.on("message", function (event) {
  // get message data from event
  var msg = event.data;
  // check if weather data is available
  if (msg.weather) {
    // set weather data
    weatherData = msg.weather;
    // call on-draw
    rocky.requestDraw();
  }  
});
