var Key = require('./key');
var React = require('react');
var TONES = require('../constants/tones');

var Organ = React.createClass({
  render: function () {
      // for (var noteName in TONES) {
      //   debugger
      //   return (<Key noteName={TONES[noteName]}/>);
      // }
    return (
      <div>
        {(Object.keys(TONES).map(function(noteName, idx) {
          return (<Key key={idx} noteName={noteName}/>);
        }))}
      </div>
    );
      // return <Key key={3} noteName={"C"}/>;
    }
  }
);

module.exports = Organ;
