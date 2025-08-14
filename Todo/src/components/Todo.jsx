import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';










function Todo({ id, name, completed}) {
  
  
  const dispatch = useDispatch();

  const handleDelete = () => {
  dispatch(deleteTodo(id));
  };

    const handleToggle = () => {
    dispatch(toggleTodo(id));
  };
  


  return (

    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={completed}
        onChange={handleToggle}
      />

      
        <span style={{ textDecoration: completed ? "line-through" : "none", opacity: completed ? 0.5 : 1 }}>
          {name}
        </span>
      
      

      <button className="btn btn-close btn-outline-danger ms-auto" onClick={handleDelete}></button>
    </li>
  );
}

export default Todo;