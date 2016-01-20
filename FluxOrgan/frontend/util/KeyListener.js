var AppDispatcher = require('../dispatcher/dispatcher');
var KeyStore = require('../stores/KeyStore');
var KeyActions = require('../actions/key_actions');

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
    });
  },

  keyup: function () {
    $(document).on("keyup", function (e) {
      var key = e.keyCode;
      var noteName = Mapping[key];
      KeyActions.keyReleased(noteName);
      console.log("listener working")
    });
  }
};


module.exports = KeyListener;
