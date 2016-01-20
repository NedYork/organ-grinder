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
    console.log("store working");
    console.log(_keys);
    var keyIdx = _keys.indexOf(payload.noteName);
    _keys.splice(keyIdx, 1);
    console.log(_keys);
    // console.log("key released");
    KeyStore.__emitChange();
  }
};


module.exports = KeyStore;
