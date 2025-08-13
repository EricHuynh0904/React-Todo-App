
import React from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';
import {v4 as uuidv4} from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  const [todoName, setTodoName] = React.useState();
  const dispatch = useDispatch();
  
  const handleAddTodo = () => {
    if (todoName === ''){
      return;
    }
      dispatch(addTodo({
        id: uuidv4(),
        name: todoName,
        completed: false
      }));
      setTodoName('');
  }

  const handleInput = (e) => {
    console.log(handleInput,e.target.value);
    setTodoName(e.target.value);
  }

  return (
    <header className="Header mb-4">
      <h1 className="mb-3">Todo List</h1>
    <div className="input-group mb-2">
        <input value={todoName} onChange={handleInput} className="form-control search" placeholder="Nhập Tasks..."/>
        <button className="btn btn-primary shadow-sm addTodo me-2" onClick={handleAddTodo}>
  Add
</button>
    </div>
    

    
    </header>
  );
}

export default Header