import React, {Component} from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  markComplete = (e) => {
    console.log('Hello')
  }
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem Key = {todo.id} todo={todo} markComplete = {this.props.markComplete} 
      delTodo={this.props.delTodo} />

    ));
  }
  }

  //PropTypes 
  Todos.propTypes = {
    todos: PropTypes.array.isRequired
  }

export default Todos;
