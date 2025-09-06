
import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import { selectAllTodos } from '../redux/actions';
import {v4 as uuidv4} from 'uuid';
import ModalAddTodo from './ModalAddTodo';
import { createTodo } from '../../services/todo';

function Header({ selectedListId}) {
  const [todoName, setTodoName] = React.useState('');
  const [todoDescription, setTodoDescription] = React.useState('');
  const [todoDueDate, setTodoDueDate] = React.useState('');
  const [todoPriority, setTodoPriority] = React.useState('medium');
  const dispatch = useDispatch();
  const [todos, setTodos] = useState([]);

  
  
  const handleInput = (e) => {
    console.log(handleInput,e.target.value);
    setTodoName(e.target.value);
  }

  const handleSelectAll = () => {
    dispatch(selectAllTodos());
  }

 const [show, setShow] = useState(false);


  const handleClose = () => {
    setShow(false);
    setTodoName("");
  };
  const handleShow = () => setShow(true);

  const handleSave = async (todo) => {
    console.log("selectedListId:", selectedListId);
  try {
    console.log("Trước khi gọi API");
const res = await createTodo(selectedListId, todo);
console.log("Sau khi gọi API", res);
    setTodoName('');
    handleClose();
  } catch (err) {
    alert("Có lỗi khi thêm công việc!");
  }
};

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#" className="nav-link px-2 link-secondary">Overview</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Inventory</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Customers</a></li>
            <li><a href="#" className="nav-link px-2 link-dark">Products</a></li>
          </ul>

          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search"/>
          </form>

          <button className="btn btn-dark shadow-sm addTodo me-2" onClick={handleShow}>
            + Công việc mới
          </button>
        </div>
      </div>
      <div className="nav col-md-4 justify-content-end list-unstyled d-flex"></div>
      <ModalAddTodo
        show={show}
        onClose={handleClose}
        onSave={handleSave}
        todoName={todoName}
        setTodoName={setTodoName}
      />
     
    </header>
  );
}

export default Header