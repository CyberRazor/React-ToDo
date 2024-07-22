import React, { createContext, useState } from 'react'

export const TodoContext = createContext({
    todos: [],
    setTodos: (allTodos) => { }
})


export default function TodoProvider({ children }) {

    const [todos, setTodos] = useState([])

    return (
        <TodoContext.Provider value={{todos, setTodos}}>
            {children}
        </TodoContext.Provider>
    )
}
