import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo, editNewTodo} from '../actions';
import generateId from "../util/utils";

class AddTodoForm extends Component {

    handleChange = e => {
        this.props.editNewTodo(e.target.value);
    };

  handleSubmit = e => {
    e.preventDefault();
    const {text} = this.props;
    const result = {
      text: text,
      id: generateId(),
      complete: false
    };

    this.props.addTodo(result);
  }

  render() {
    const {text} = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <input name="todo" value={text} onChange={this.handleChange} type="text"/>
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
    return {
        text: state.newTodoText,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoItem) => dispatch(addTodo(todoItem)),
        editNewTodo: (text) => dispatch(editNewTodo(text)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodoForm);
