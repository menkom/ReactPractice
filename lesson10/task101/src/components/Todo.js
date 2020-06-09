import React, { Component } from 'react';

class Todo extends Component {
  render() {
    const { text } = this.props;
    return (
      <p>{text}</p>
    )
  }
}

export default Todo
