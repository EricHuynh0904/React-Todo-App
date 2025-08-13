import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../redux/actions';









function Todo({ id, name}) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const handleDelete = () => {
  dispatch(deleteTodo(id));
  };



  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span style={{ textDecoration: checked ? "line-through" : "none", opacity: checked ? 0.5 : 1 }}>
        
        {name}
        
      </span>

      <button className="btn btn-close btn-outline-danger ms-auto" onClick={handleDelete}></button>
    </li>
  );
}

export default Todo;