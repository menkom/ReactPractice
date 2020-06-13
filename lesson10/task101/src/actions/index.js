// const ADD_TODO = 'ADD_TODO';
export const actionTypes = {
    addTodo: 'ADD_TODO',
    deleteTodo: 'DELETE_TODO',
    editNewTodo: 'EDIT_NEW_TODO',
};

// action creator
const addTodo = value => ({
  type: actionTypes.addTodo,
  payload: value
});

const deleteTodo = value => ({
  type: actionTypes.deleteTodo,
  payload: value,
});

const editNewTodo = text => ({
  type: actionTypes.editNewTodo,
  payload: text,
});

export {
  addTodo, deleteTodo, editNewTodo
};
