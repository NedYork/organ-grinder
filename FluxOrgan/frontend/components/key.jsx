var React = require('react');
// var ReactDOM = require('react-dom');
var KeyStore = require('../stores/KeyStore');
var Note = require('../util/note');
var TONES = require('../constants/Tones');

var Key = React.createClass({

  getInitialState: function () {
    return { keys: KeyStore.all() };
  },

  componentDidMount: function () {
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function () {
    KeyStore.remove(this._keysChanged); //not sure about this
  },

  _keysChanged: function () {
    var newNote = new Note(TONES[this.props.noteName]);
    if (KeyStore.all().includes(this.props.noteName)) {
      newNote.start();
    } else {
      newNote.stop();
    }
    this.setState({ keys: KeyStore.all() });
  },

  render: function () {
    return(
      <li>{Key.noteName}</li>
    ) ;
  },

});

module.exports = Key;
