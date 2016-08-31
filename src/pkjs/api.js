function request (url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(null, JSON.parse(this.responseText));
  };
  xhr.onerror = function () {
    callback(new Error("request failed1", null));
  };
  xhr.open(type, url);
  xhr.send();
}

module.exports.request = request;