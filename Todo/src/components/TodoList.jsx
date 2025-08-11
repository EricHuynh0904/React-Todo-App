import Todo from "./Todo";
import React from "react";

function TodoList(){
    return(
    <section className="main">
        
       <ul className="todo-list">
            <Todo />
        </ul>
    </section>
    );
}

export default TodoList;