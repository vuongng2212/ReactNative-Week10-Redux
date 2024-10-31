// src/redux/reducers/todoReducer.js
import {
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  DELETE_TODO_SUCCESS,
  DELETE_TODO_FAILURE,
} from '../actions/todoActions';

const initialState = {
  todos: [],
  error: null,
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TODOS_SUCCESS:
      return { ...state, todos: action.payload, error: null };
    case FETCH_TODOS_FAILURE:
      return { ...state, error: action.payload };
    case ADD_TODO_SUCCESS:
      return { ...state, todos: [...state.todos, action.payload], error: null };
    case ADD_TODO_FAILURE:
      return { ...state, error: action.payload };
    case DELETE_TODO_SUCCESS:
      return { ...state, todos: state.todos.filter((todo) => todo.id !== action.payload) };
    case DELETE_TODO_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};
