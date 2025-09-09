import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function ModalAddTodo({
  show,
  onClose,
  onSave,
  todoName, setTodoName,
  todoDescription, setTodoDescription,
  todoPriority, setTodoPriority,
  todoDueDate, setTodoDueDate,
}) {
  const [completed, setCompleted] = useState(false);


  if (!show) return null;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Tạo Mới/Chỉnh Sửa Công Việc</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="mb-3 text-muted" style={{ fontSize: 15 }}>
          Hoàn thành các thông tin dưới đây để quản lý công việc của bạn.
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Tiêu đề công việc</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nhập tiêu đề công việc..."
            value={todoName}
            onChange={e => setTodoName(e.target.value)}
            autoFocus
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mô tả</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Nhập mô tả"
            value={todoDescription}
            onChange={e => setTodoDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Mức độ ưu tiên</Form.Label>
          <div>
            <Button
              variant={todoPriority === 'low' ? 'secondary' : 'outline-secondary'}
              className="me-2"
              onClick={() => setTodoPriority('low')}
            >
              Thấp
            </Button>
            <Button
              variant={todoPriority === 'med' ? 'secondary' : 'outline-secondary'}
              className="me-2"
              onClick={() => setTodoPriority('med')}
            >
              Trung bình
            </Button>
            <Button
              variant={todoPriority === 'high' ? 'dark' : 'outline-dark'}
              onClick={() => setTodoPriority('high')}
            >
              Cao
            </Button>
          </div>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Ngày đáo hạn</Form.Label>
          <Form.Control
            type="date"
            value={todoDueDate}
            onChange={e => setTodoDueDate(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="completedSwitch">
            <Form.Label>Đã hoàn thành </Form.Label>
            <Form.Check
              type="switch"
              id="completedSwitch"
              checked={completed}
              onChange={e => setCompleted(e.target.checked)}
            />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-secondary" onClick={onClose}>
          Hủy
        </Button>
    <Button
  variant="dark"
  disabled={!todoName?.trim()}
  onClick={() => {
    const payload = {
      title: (todoName || '').trim(),
      description: (todoDescription || '').trim(),
      priority: todoPriority,           // giữ chuỗi: low|med|high
      dueDate: todoDueDate || null,     // camelCase như Postman
      
    };
    console.log('[Modal] payload:', payload);
    onSave(payload);
  }}
>
  Lưu
</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalAddTodo;