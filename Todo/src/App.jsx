import React from 'react'
import './App.css'
import Header from './components/Header'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css'
import Footer from './components/Footer'



function App() {
  return (
    <>
      <Header />
      <TodoList />
      <Footer />
    </>
  )
}

export default App
