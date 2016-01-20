var ReactDOM = require('react-dom');
var React = require('react');
var Dispatcher = require('./dispatcher/dispatcher');
Note = require('./util/note');

var OrganGrinder = React.createClass({

  render: function () {
    return (
      <div>

      </div>
    );
  }

});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<OrganGrinder />, document.getElementById('content'));
});
