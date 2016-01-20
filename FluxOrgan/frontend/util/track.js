var AppDispatcher = require('../dispatcher/dispatcher');
var KeyStore = require('../stores/KeyStore');
var KeyActions = require('../actions/key_actions');

var Track = function (attrHash) {
  // attrHash = { name: "xyz", roll: [recipe]}

};

Track.prototype.startRecording = function () {
  this.roll = [];
  this.date = new Date();
  // this.startTime = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

};

Track.prototype.addNotes = function (notes) {
  var timeSlice = (new Date() - this.date);
  this.roll.push({ timeSlice: timeSlice , notes: notes });
};

Track.prototype.stopRecording = function () {
  this.addNotes([]);
};

Track.prototype.play = function () {
  if (this.interval) {
    return;
  }
  var playbackStartTime = new Date();
  var currentNote = 0;
  var track = this;
  var roll = this.roll;

  inRange = function ()  {
    if (currentNote < roll.lenth - 1) {
    } else {
      clearInterval(interval)
      // Clear the interval and delete it from the properties of this.
    }
  }
  var interval = setInterval(inRange, )

};

this.interval = setInterval(function () {
  if (currentNote < roll.length - 1) {
    oldClip = roll[currnetNote];
    if (Date.now() = playbackStartTime > oldClip.timeSlice) {
      newClip = roll[currentNote + 1]
    }
  }
})

module.exports = Track;
