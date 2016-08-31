var apiKey = "###########################";

function builder (pos) {
  return "http://api.openweathermap.org/data/2.5/weather"  +
                            "?lat=" + pos.coords.latitude  +
                            "&lon=" + pos.coords.longitude +
                            "&appid=" + apiKey;
}

module.exports.build = builder;