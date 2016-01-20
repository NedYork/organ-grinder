var React = require('react');
var Track = require('../util/track');
var KeyStore = require('../stores/KeyStore');

var Recorder = React.createClass({
  getInitialState: function () {
    return ({ isRecording: false, track: new Track() });
  },

  componentDidMount: function () {
    KeyStore.addListener(KeyStore._keysChanged);
    Track.addNotes(KeyStore._keys);
  },

  componentWillUnmount: function () {

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
    var recordText = this.state.isRecording ? "STOP" : "RECORD";
    var playText; //come back here
    return (
    <div id="track-button">
      <button>{recordText}</button>
      <button>{playText}</button>
    </div>
    );
  }
});
