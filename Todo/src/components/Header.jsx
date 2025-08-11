function Header() {
  return (
    <header className="Header mb-4">
      <h1 className="mb-3">Todo List</h1>
    <div className="input-group mb-2">
        <input className="form-control search" placeholder="Nhập Tasks..."/>
        <button className="btn btn-primary addTodo me-2">Add Todo</button>
    </div>
    

    
    </header>
  );
}

export default Header