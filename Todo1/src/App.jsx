import React from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import Footer from './components/Footer'
import SideBar from './components/Navigation'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalAddTodo from './components/ModalAddTodo'
import Todo from './components/Todo'
import { useEffect } from 'react'



function App() {
  const [selectedListId, setSelectedListId] = React.useState(null);
    useEffect(() => {
    console.log("selectedListId hiện tại:", selectedListId);
  }, [selectedListId]);


  useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  if (token) {
    localStorage.setItem("token", token);
    window.history.replaceState({}, document.title, "/");
  }
}, []);


  return (
    <>
      
      <div className="d-flex flex-column min-vh-100">
     <Header  selectedListId={selectedListId}/>
      <div className="container-fluid flex-grow-1 d-flex p-0">
        <SideBar selectedListId={selectedListId} setSelectedListId={setSelectedListId}/>
        <main className="flex-grow-1 p-4 bg-light">
          <TodoList selectedListId={selectedListId}/>

        </main>
      </div>
      <Footer />
    
    </div>
    
    </>
  )
}

export default App
