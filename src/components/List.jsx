import React, { useContext } from 'react'
import ListItem from './ListItem'
import { TodoContext } from './TodoContext'

export default function List() {
    const { todos } = useContext(TodoContext)

    return (
        <ul className='list flex flex-col justify-center w-5/6 items-center space-around text-gray-100 border-solid border-8 border-white bg-gray-700 p-6 bg-opacity-75 rounded-2xl rounded-t-none '>
            {todos.length === 0 && <h1 className='text-yellow-400 text-2xl'>No tasks here!</h1>}
            {todos.map((todo, index) => {
                return (
                    <ListItem
                        todo={todo}
                        key={index}
                    />
                )
            })}
        </ul>
    )
}
