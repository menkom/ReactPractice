import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import {deleteTodo} from "../actions";

class TodoList extends Component {
  render() {
    const {todos} = this.props;
    return (
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} {...todo} deleteTodo={this.props.doDelete} />
        ))}
      </div>
    )
  }
}

// Passing data from Redux store to TodoList in props
const mapStateToProps = (state) => {
  return {
    todos: state.todos
  };
};

// Passing methods from Redux store to TodoList in props
const mapDispatchToProps = (dispatch) => {
  return {
    doDelete: (todoId)=>dispatch(deleteTodo(todoId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
