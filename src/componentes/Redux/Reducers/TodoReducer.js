const INITIAL_TODO = {
  todos: []
}

export default function TodoReducer(state = INITIAL_TODO, action) {
  switch (action.type) {
    case 'CREATE':
      return { todos: [...state.todos, action.payload] };
    case 'READ':
      return { todos: [...state.todos] };
    case 'UPDATE':
      return { todos: [...state.todos, action.payload] };
    case 'DELETE':
      return state;
      break;
    default:
      return state;
  }
}
