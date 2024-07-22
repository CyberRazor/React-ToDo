import React from 'react'
import ListItem from './ListItem'

export default function List({ todos, toggleToDo, deleteTodo }) {
    return (
        <ul className='list flex flex-col justify-center w-5/6 items-center space-around text-gray-100 border-solid border-8 border-white bg-gray-700 p-6 bg-opacity-75 rounded-sm rounded-t-none '>
            {todos.length === 0 && <h1 className='text-yellow-400 text-2xl'>No tasks here!</h1>}
            {todos.map(todo => {
                return (
                <ListItem  
                    {...todo}
                    key={todo.id}
                    toggleToDo={toggleToDo}
                    deleteTodo={deleteTodo}
                />
                )
            })}
        </ul>
    )
}
