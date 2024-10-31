// src/redux/sagas/todoSaga.js
import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_TODOS_REQUEST,
  fetchTodosSuccess,
  fetchTodosFailure,
  ADD_TODO_REQUEST,
  addTodoSuccess,
  addTodoFailure,
  DELETE_TODO_REQUEST,
  deleteTodoSuccess,
  deleteTodoFailure,
} from '../actions/todoActions';
import { fetchTodos, addTodo, deleteTodo } from '../../api/todoApi';

function* handleFetchTodos() {
  try {
    const response = yield call(fetchTodos);
    yield put(fetchTodosSuccess(response.data));
  } catch (error) {
    yield put(fetchTodosFailure(error.message));
  }
}

function* handleAddTodo(action) {
  try {
    const response = yield call(addTodo, action.payload);
    yield put(addTodoSuccess(response.data));
  } catch (error) {
    yield put(addTodoFailure(error.message));
  }
}

function* handleDeleteTodo(action) {
  try {
    yield call(deleteTodo, action.payload); // Gọi API để xóa công việc
    yield put(deleteTodoSuccess(action.payload)); // Xóa công việc khỏi store nếu thành công
  } catch (error) {
    yield put(deleteTodoFailure(error.message));
  }
}

export default function* todoSaga() {
  yield takeLatest(FETCH_TODOS_REQUEST, handleFetchTodos);
  yield takeLatest(ADD_TODO_REQUEST, handleAddTodo);
  yield takeLatest(DELETE_TODO_REQUEST, handleDeleteTodo); // Xử lý xóa công việc
}
