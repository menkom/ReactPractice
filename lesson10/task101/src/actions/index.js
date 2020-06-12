// const ADD_TODO = 'ADD_TODO';

// action creator
const addTodo = value => ({
  type: 'ADD_TODO',
  payload: value
});

const deleteTodo = value => ({
  type: 'DELETE_TODO',
  payload: value,
});

export {
  addTodo, deleteTodo
};
