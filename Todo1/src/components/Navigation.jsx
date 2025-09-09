import ModalAddList from "./ModalAddList";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import { createTodoList, renameTodoList, deleteTodoList } from "../../services/auth";

function SideBar({ selectedListId, setSelectedListId }) {

  const [show, setShow] = useState(false);
  const [listName, setListName] = useState("");
  const [todoLists, setTodoLists] = useState([]);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editListId, setEditListId] = useState(null);



  const handleClose = () => {
    setShow(false);
    setListName("");
    setEditMode(false);
    setEditListId(null);
    setError("");
  };

  const handleShow = () => {
    setEditMode(false);
    setListName("");
    setShow(true);
  };

  const handleShowRename = (id, oldName) => {
    setEditMode(true);
    setEditListId(id);
    setListName(oldName);
    setShow(true);
  };

  const handleSave = async () => {
    if (!listName.trim()) {
      setError("Tên không được để trống!");
      return;
    }
    try {
      if (editMode) {
        const updated = await renameTodoList(editListId, { name: listName });
        if (updated?.id) {
          setTodoLists(prev => prev.map(x => (x.id === updated.id ? { ...x, ...updated } : x)));
        } else {
          setTodoLists(prev => prev.map(x => (x.id === editListId ? { ...x, name: listName } : x)));
        }
      } else {
        const created = await createTodoList({ name: listName });
        if (created?.id) {
          setTodoLists(prev => [created, ...prev]);
        }
      }
      handleClose();
    } catch (err) {
      console.error(err);
      setError("Có lỗi khi lưu danh sách!");
    }
  };


  const handleDelete = async (id) => {
    try {
      await deleteTodoList(id);
      setTodoLists(prev => prev.filter(x => x?.id !== id));
      if (selectedListId === id) setSelectedListId?.(null);
    } catch (err) {
      console.error(err);
      setError("Có lỗi khi xóa danh sách!");
    }
  };

  console.log("todoLists (local):", todoLists);

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
        {(Array.isArray(todoLists) ? todoLists : [])
          .filter(list => list && list.id)
          .map(list => (
            <li
              className={`mb-1 ${selectedListId === list.id ? "bg-light" : ""}`}
              key={list.id}
              style={{ cursor: "pointer" }}
              onClick={() => setSelectedListId(list.id)}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span>{list.name}</span>
                <div>
                  <button
                    className="bg-white"
                    onClick={e => {
                      e.stopPropagation();
                      handleShowRename(list.id, list.name);
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