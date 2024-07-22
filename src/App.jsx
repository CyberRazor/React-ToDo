import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import List from './components/List'



export default function App() {
  const [todos, setTodos] = useState([])


  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: Math.random(), title, completed: false }
      ]
    })
  }

  function toggleToDo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <div className="bg-sky-700 min-h-screen m-auto flex flex-col justify-start items-center ">
          <h1 className='header text-3xl p-8 mt-4 w-5/6 bg-gray-600 text-center border-solid border-8 font-bold  border-white text-white underline'>To-Doodle</h1>
          <TaskForm onSubmit={addTodo} />
          <List todos={todos} toggleToDo={toggleToDo} deleteTodo={deleteTodo} />

      </div>
    </>
  )
}
