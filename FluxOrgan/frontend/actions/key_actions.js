var AppDispatcher = require("../dispatcher/dispatcher");
var KeyStore = require('../stores/KeyStore');

var KeyActions = {
  keyPressed: function (noteName) {
    AppDispatcher.dispatch({ actionType: "DOWN", noteName: noteName });
  },

  keyReleased: function (noteName) {
    AppDispatcher.dispatch({ actionType: "UP", noteName: noteName });
  }
};


module.exports = KeyActions;
