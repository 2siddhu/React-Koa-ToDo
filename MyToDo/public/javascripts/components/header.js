/**
 * @jsx React.DOM
 */

var React = require('react');
var TextInput = require('./textinput.js');
var taskStore = require('../task_store.js');

var Header = React.createClass({

  render: function() {
    return (
      <div id="header">
        <TextInput
          id="new-todo"
          placeholder="What needs to be done?"
          onSave={this._onSave}
        />
      </div>
    );
  },

  _onSave: function (title) {
    if (!title.trim()) return;
    taskStore.create(title);
  }
});

module.exports = Header;
