const initialValues = {
  todos: [],
  flag: true,
  names: ['123123']
};

const todos = (state = initialValues, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    default:
      return state;
  }
}

export default todos;