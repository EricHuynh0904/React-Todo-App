import React, { useState } from 'react';
import ModalAddTodo from './ModalAddTodo';
import { createTodoInList } from '../../services/todo';

function Header({ selectedListId }) {
  const [show, setShow] = useState(false);
  const [todoName, setTodoName] = useState('');
  const [todoDescription, setTodoDescription] = useState('');
  const [todoDueDate, setTodoDueDate] = useState('');
  const [todoPriority, setTodoPriority] = useState('med');
  const [error, setError] = useState('');

  const handleClose = () => {
    setShow(false);
    setTodoName('');
    setTodoDescription('');
    setTodoDueDate('');
    setTodoPriority('med');
    setError('');
  };

    const handleSave = async (body) => {
    console.log('[Header] body from modal:', body);
    if (!body?.title?.trim()) { setError('Vui lòng nhập tiêu đề!'); return; }
    if (!selectedListId) { setError('Vui lòng chọn danh sách!'); return; }
    try {
      const res = await createTodoInList(Number(selectedListId), body);
      const created = res?.data ?? res;

    
      window.dispatchEvent(new CustomEvent('todo:created', {
        detail: { listId: Number(selectedListId), todo: created }
      }));

      handleClose();
    } catch (err) {
      console.error('[Header] API ERR:', err?.response?.status, err?.response?.data || err.message);
      setError(err?.response?.data?.message || 'Có lỗi khi lưu Todo!');
    }
  };

  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container d-flex justify-content-between me-10">
        <strong>Todo App</strong>
        <button className="btn btn-dark" onClick={() => setShow(true)}>+ Công việc mới</button>
      </div>

      <ModalAddTodo
        show={show}
        onClose={handleClose}
        onSave={handleSave}
        todoName={todoName} setTodoName={setTodoName}
        todoDescription={todoDescription} setTodoDescription={setTodoDescription}
        todoDueDate={todoDueDate} setTodoDueDate={setTodoDueDate}
        todoPriority={todoPriority} setTodoPriority={setTodoPriority}
      />
      {error && <div className="text-danger mt-2 ms-3">{error}</div>}
    </header>
  );
}
export default Header;