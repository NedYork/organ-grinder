var ReactDOM = require('react-dom');
var React = require('react');
var Dispatcher = require('./dispatcher/dispatcher');
var KeyListener = require('./util/KeyListener');
var Key = require('./components/key');

var OrganGrinder = React.createClass({

  render: function () {
    return (
      <div>
        <Key noteName="Ds"/>
      </div>
    );
  }

});

KeyListener.keydown();
KeyListener.keyup();


// $(document).on("keydown", function (e) {
//   var key = e.keyCode;
//   console.log(key);
//   KeyStore._keys.push(key);
// });
//
//
// $(document).on("keyup", function (e) {
//   var key = e.keyCode;
//   var keyIdx = KeyStore._keys.indexOf(key);
//   KeyStore._keys.splice(keyIdx, 1);
// });


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<OrganGrinder />, document.getElementById('content'));
});
