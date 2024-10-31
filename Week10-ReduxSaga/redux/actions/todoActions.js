export const FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const ADD_TODO_REQUEST = 'ADD_TODO_REQUEST';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_FAILURE = 'ADD_TODO_FAILURE';

export const fetchTodosRequest = () => ({ type: FETCH_TODOS_REQUEST });
export const fetchTodosSuccess = (todos) => ({ type: FETCH_TODOS_SUCCESS, payload: todos });
export const fetchTodosFailure = (error) => ({ type: FETCH_TODOS_FAILURE, payload: error });

export const addTodoRequest = (todo) => ({ type: ADD_TODO_REQUEST, payload: todo });
export const addTodoSuccess = (todo) => ({ type: ADD_TODO_SUCCESS, payload: todo });
export const addTodoFailure = (error) => ({ type: ADD_TODO_FAILURE, payload: error });

export const DELETE_TODO_REQUEST = 'DELETE_TODO_REQUEST';
export const DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS';
export const DELETE_TODO_FAILURE = 'DELETE_TODO_FAILURE';

export const deleteTodoRequest = (id) => ({ type: DELETE_TODO_REQUEST, payload: id });
export const deleteTodoSuccess = (id) => ({ type: DELETE_TODO_SUCCESS, payload: id });
export const deleteTodoFailure = (error) => ({ type: DELETE_TODO_FAILURE, payload: error });
