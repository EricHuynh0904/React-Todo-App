import instance from "./http";

export const getTodos = (listId) => instance.get(`/lists/${listId}/todos`);
export const createTodo = (listId, data) => instance.post(`/lists/${listId}/todos`, data);
export const updateTodo = (id, data) => instance.patch(`/todos/${id}`, data);
export const deleteTodo = (id) => instance.delete(`/todos/${id}`);