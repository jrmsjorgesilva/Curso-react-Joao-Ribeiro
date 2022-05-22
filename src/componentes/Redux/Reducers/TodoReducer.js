import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../Actions/TodoActions";

// INICIALIZADOR
const INITIAL_TODO = {
  todos: [
    {
      id: 1,
      title: "Learn CRUD Operations in one go",
      date: "2022-05-07",
      status: "Pendente",
    },
    {
      id: 2,
      title: "Learn Redux from Scratch",
      date: "2022-05-15",
      status: "Pendente",
    },
    {
      id: 3,
      title: "Build todo Application",
      date: "2022-05-17",
      status: "Pendente",
    },
    {
      id: 4,
      title: "Start Learning",
      date: "2022-05-20",
      status: "Completa",
    },
    {
      id: 5,
      title: "Subscribe Codenemy for React Tutorial",
      date: "2022-05-08",
      status: "Pendente",
    },
  ],
};

// REDUCER
const TodoReducer = (state = INITIAL_TODO, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { todos: [...state.todos, action.payload] };
    case DELETE_TODO:
      return { todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case UPDATE_TODO:
      return {
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return action.payload;
          }
          return todo;
        }),
      };
    default:
      return state;
  }
};

export default TodoReducer;
