function Todo() {
  return (
    <li className="list-group-item d-flex align-items-center">
      <input type="checkbox" className="form-check-input me-2" />
      <span className="flex-grow-1">Nhiệm vụ mẫu</span>
      <button className="btn btn-danger btn-sm ms-3">X</button>
    </li>
  );
}

export default Todo;