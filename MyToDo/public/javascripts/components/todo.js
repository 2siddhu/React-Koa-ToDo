/**
 * @jsx React.DOM
 */

var React = require('react');
var cx = require('react/lib/cx');
var TextInput = require('./textinput.js');
var taskStore = require('../task_store.js');

var Todo = React.createClass({
  propTypes: {
    task: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    return {
      isEditing: false
    };
  },

  render: function() {
    var task = this.props.task;
    var input;
    if (this.state.isEditing) {
      input =
        <TextInput
          className="edit"
          onSave={this._onSave}
          value={task.title}
        />;
    }

    return (
      <li
        className={cx({
          'completed': task.complete,
          'editing': this.state.isEditing
        })}
        key={task.id}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={task.complete}
            onChange={this._onToggleComplete}
          />
          <label onDoubleClick={this._onDoubleClick}>
            {task.title}
          </label>
          <button className="destroy" onClick={this._onDestroyClick} />
        </div>
        {input}
      </li>
    );
  },

  _onToggleComplete: function () {
    taskStore.update({
      id: this.props.task.id,
      complete: !this.props.task.complete
    });
  },

  _onDoubleClick: function () {
    this.setState({
      isEditing: true
    });
  },

  _onDestroyClick: function () {
    taskStore.destroy(this.props.task);
  },

  _onSave: function (title) {
    if (!title.trim()) return;
    this.setState({isEditing: false});
    taskStore.update({
      id: this.props.task.id,
      title: title
    });
  }
});

module.exports = Todo;
