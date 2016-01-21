var React = require('react');

var TodoApp = require('./components/todo_app.js');
React.render(
        React.createElement(TodoApp,null),
        document.getElementById('todoapp')
    );