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



  return (
    <>
      <div className="d-flex flex-column min-vh-100">
     <Header  />
      <div className="container-fluid flex-grow-1 d-flex p-0">
        <SideBar />
        <main className="flex-grow-1 p-4 bg-light">
          <Todo/>
         
        </main>
      </div>
      <Footer />
    
    </div>
    
    </>
  )
}

export default App
