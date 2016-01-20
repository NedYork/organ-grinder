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
    this.note = new Note(TONES[this.props.noteName]);
    KeyStore.addListener(this._keysChanged);
  },

  componentWillUnmount: function () {
    KeyStore.remove(this._keysChanged); //not sure about this
  },

  _keysChanged: function () {
    if (KeyStore.all().includes(this.props.noteName)) {
      this.note.start();
    } else {
      this.note.stop();
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
