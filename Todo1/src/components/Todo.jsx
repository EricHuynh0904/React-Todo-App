import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions';
import ModalConfirmDelete from './ModalConfirmDelete';

function Todo({ id, name, completed, priority = "med", dueDate = "2024-07-25" }) {
  const dispatch = useDispatch();
  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    setShowDelete(false);
  };

  const handleToggle = () => {
    dispatch(toggleTodo(id));
  };

  const getPriorityLabel = (priority) => {
    if (priority === "high")
      return <span className="badge rounded-pill" style={{ background: "#FFD6DA", color: "#E65060" }}>Cao</span>;
    if (priority === "med")
      return <span className="badge rounded-pill" style={{ background: "#FFF3CD", color: "#B68900" }}>Trung bình</span>;
    return <span className="badge rounded-pill" style={{ background: "#D1FADF", color: "#12B76A" }}>Thấp</span>;
  };

  return (
    <>
      <li
        className="list-group-item bg-white d-flex align-items-center mb-3 rounded-3"
      >
        <input
          type="checkbox"
          className="form-check-input ms-3"
          checked={completed}
          onChange={handleToggle}
          style={{ width: 20, height: 20, accentColor: "#344054" }}
        />

        <span
          className="flex-grow-1"
          style={{
            textDecoration: completed ? "line-through" : "none",
            opacity: completed ? 0.5 : 1,
            fontSize: 18,
          }}
        >
          {name}
        </span>

        <div className="d-flex align-items-center gap-2">
          {getPriorityLabel(priority)}
          <span className="text-secondary ms-2" style={{ fontSize: 15 }}>
            <i className="bi bi-calendar-event" /> {dueDate}
          </span>
          <button className="btn btn-link text-secondary px-2">
            <i className="bi bi-pencil" />
          </button>
          <button
            className="btn btn-outline-danger px-2 btn-sm"
            onClick={() => setShowDelete(true)}
          >
            <i className="bi bi-trash" style={{ fontSize: 18 }} />
          </button>
        </div>
      </li>
      <ModalConfirmDelete
        show={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

export default Todo;