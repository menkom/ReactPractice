import {actionTypes} from "../actions";

const initialValues = {
  todos: [],
  flag: true,
  names: ['123123'],
  newTodoText: '',
};

const todos = (state = initialValues, action) => {
    switch (action.type) {
    case actionTypes.addTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        newTodoText: '',
      }
      case actionTypes.deleteTodo:
          return {
              ...state,
              todos: state.todos.filter(item => item.id !== action.payload),
          }
      case actionTypes.editNewTodo:
          return {
              ...state,
              newTodoText: action.payload,
          }
    default:
      return state;
  }
}

export default todos;