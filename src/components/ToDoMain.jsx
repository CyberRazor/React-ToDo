import React, {useState} from 'react'
import TaskForm from './TaskForm'
import List from './List'

export default function ToDoMain() {
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
      <div className="bg-gradient-to-br from-sky-700 to-gray-500 min-h-screen m-auto flex flex-col justify-start items-center ">
        <div className='header  p-8 mt-4 w-5/6 bg-gray-700 bg-opacity-65 text-center border-solid border-8 border-white font-bold rounded-b-none rounded-t-2xl text-white underline'>
          <h1 className="text-3xl p-2 border-solid border-2 border-sky-400 rounded-2xl bg-gradient-to-b from-cyan-400  to-sky-700">To-Doodle</h1>
        </div>
        <TaskForm onSubmit={addTodo} />
        <List todos={todos} toggleToDo={toggleToDo} deleteTodo={deleteTodo} />

      </div>
    </>
  )
}
