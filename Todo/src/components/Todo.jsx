import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Todo({ name }) {
  const [checked, setChecked] = useState(false);

  return (
    <li className="list-group-item d-flex align-items-center">
      <input
        type="checkbox"
        className="form-check-input me-2"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <span style={{ textDecoration: checked ? "line-through" : "none" }}>
        {name}
      </span>

      <button className="btn btn-close btn-outline-danger ms-auto "></button>
    </li>
  );
}

export default Todo;