import React from "react";
import { useSelector } from "react-redux";
import { todoSelector } from "../redux/selector";
import Todo from "./Todo";

function TodoList() {
  const todoList = useSelector(todoSelector);

  return (
    <ul className="list-group">
      {todoList.map(todo => (
        <Todo key={todo.id} id={todo.id} name={todo.name} />
      ))}
    </ul>
  );
}

export default TodoList;