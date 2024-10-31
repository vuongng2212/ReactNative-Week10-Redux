import axios from 'axios';

const BASE_URL = 'https://6723a4c4493fac3cf24bc230.mockapi.io/todos';

export const fetchTodos = () => axios.get(`${BASE_URL}`);
export const addTodo = (todo) => axios.post(`${BASE_URL}`, todo);
export const deleteTodo = (id) => axios.delete(`${BASE_URL}/${id}`);
export const updateTodo = (id, updatedTodo) => axios.put(`${BASE_URL}/${id}`, updatedTodo);
