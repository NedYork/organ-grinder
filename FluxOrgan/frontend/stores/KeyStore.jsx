var _keys = [];



var KeyStore = new Store(AppDispatcher);

KeyStore.all = function () {
  return _keys.slice();
};



module.exports = KeyStore;
