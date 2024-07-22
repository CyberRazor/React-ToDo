import React, { useState } from 'react'
import List from './List'
import TaskForm from './TaskForm'
import TodoProvider from './TodoContext'



export default function Todo() {



   

    return (
        <TodoProvider>
            <div className="bg-sky-700 min-h-screen m-auto flex flex-col justify-start items-center ">
                <div className='header  p-8 mt-4 w-5/6 bg-gray-600 text-center border-solid border-8 border-white font-bold rounded-b-none rounded-t-2xl text-white underline'>
                    <h1 className="text-3xl p-2 border-solid border-2 border-sky-400 rounded-2xl bg-sky-700">To-Doodle</h1>
                </div>
                <TaskForm  />
                <List />

            </div>
        </TodoProvider>
    )
}
