import  { useState } from "react";
import ModalAddList from "./ModalAddList";
import http from "../../services/http";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";



function SideBar() {

const [show, setShow] = useState(false);
  const [listName, setListName] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [selectedListId, setSelectedListId] = useState(null);
  const handleSelectList = (id) => {
  setSelectedListId(id);
};

  const handleClose = () => {
    setShow(false);
    setListName("");
  };
  const handleShow = () => setShow(true);

  const handleSave = async () => {
  if (listName.trim() === "") return;
  try {
    const res = await http.post("/todolist", { name: listName });
    setTodoLists(prev => [...prev, res.data || res]);
    handleClose();
  } catch (err) {
    alert("Có lỗi khi thêm danh sách!");
  }
};

  const handleDelete = async (id) => {
  try {
    await http.delete(`/todolist/${id}`);
    setTodoLists(prev => prev.filter(list => list.id !== id)); 
  } catch (err) {
    alert("Có lỗi khi xóa danh sách!");
  }
};

const handleRename = async (id, oldName) => {
  const newName = prompt("Nhập tên mới:", oldName);
  if (!newName || newName.trim() === "" || newName === oldName) return;
  try {
    await http.patch(`/todolist/${id}`, { name: newName });
    setTodoLists(prev =>
      prev.map(list =>
        list.id === id ? { ...list, name: newName } : list
      )
    );
  } catch (err) {
    alert("Có lỗi khi đổi tên!");
  }
};

 return (
    <div className="flex-shrink-0 p-3 bg-white" style={{ width: 280 }}>
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <svg className="bi me-2" width="30" height="24">
          <use xlinkHref="#bootstrap" />
        </svg>
        <span className="fs-5 fw-semibold">Danh sách của bạn</span>
      </a>

      <ul className="list-unstyled ps-0">
        {todoLists.map(list => (
  <li
    className={`mb-1 ${selectedListId === list.id ? "bg-light" : ""}`}
    key={list.id}
    style={{ cursor: "pointer" }}
    onClick={() => setSelectedListId(list.id)}
  >
    {list.name}
    <div className="d-flex justify-content-between align-items-center">
      <span>{list.name}</span>
      <div>
        <button
          className="bg-white"
          onClick={e => {
            e.stopPropagation();
            handleRename(list.id, list.name);
          }}
        >
          Đổi tên
        </button>
        <button
          className="bg-white"
          onClick={e => {
            e.stopPropagation();
            handleDelete(list.id);
          }}
        >
          Xóa
        </button>
      </div>
    </div>
  </li>
))}
        <li className="border-top my-3" />
        <li className="mb-1">
          <button className="btn btn shadow-sm addTodo me-2" onClick={handleShow}>
            + Danh sách mới
          </button>
        </li>
      </ul>
      <ModalAddList
        show={show}
        onClose={handleClose}
        onSave={handleSave}
        listName={listName}
        setListName={setListName}
      />
    </div>
  );
}

export default SideBar;