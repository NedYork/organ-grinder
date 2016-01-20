var AppDispatcher = require('../dispatcher/dispatcher');
var KeyStore = require('../stores/KeyStore');
var KeyActions =

var Mapping = {
  48: "C",
  49: "Cs",
  50: "D",
  51: "Ds",
  52: "E",
  53: "F",
  54: "Fs",
  55: "G",
  56: "Gs"
};

var KeyListener = {
  keydown: function () {
    $(document).on("keydown", function (e) {
      var key = e.keyCode;
      var noteName = Mapping[key];
      KeyActions.keyPressed(noteName);
      KeyStore._keys.push(key);
    });
  },

  keyup: function () {
    $(document).on("keyup", function (e) {
      var key = e.keyCode;
      var keyIdx = KeyStore._keys.indexOf(key);
      KeyStore._keys.splice(keyIdx, 1);
    });
  }
};


module.exports = KeyListener;
