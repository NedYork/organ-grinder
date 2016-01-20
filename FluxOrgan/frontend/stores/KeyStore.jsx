var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

_keys = [];

var KeyStore = new Store(AppDispatcher);

KeyStore.all = function () {
  return _keys.slice();
};

KeyStore.__onDispatch = function (payload) {
  if (payload.actionType === "DOWN" && !_keys.includes(payload.noteName)) {
    _keys.push(payload.noteName);
    KeyStore.__emitChange();
  } else if (payload.actionType === "UP") {
    // var key = _keys.indexOf(payload.noteName);
    var keyIdx = _keys.indexOf(payload.noteName);
    _keys.splice(keyIdx, 1);
    KeyStore.__emitChange();
  }
};


module.exports = KeyStore;
