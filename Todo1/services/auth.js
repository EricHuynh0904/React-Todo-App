import instance from "./http";


export const getTodoLists = () => {
  return instance.get("/todolist");
};


export const createTodoList = (data) => {
  return instance.post("/todolist", data);
};


export const deleteTodoList = (id) => {
  return instance.delete(`/todolist/${id}`);
};