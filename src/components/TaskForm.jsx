import React, { useState } from 'react'

export default function TaskForm({ onSubmit}) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form flex flex-col w-5/6 text-gray-100 border-solid border-8 border-white rounded-b-none bg-gray-700 p-2 rounded-sm'>
            <div className="form-row p-6 bg-gray-950 bg-opacity-65 rounded-md flex flex-col items-center border-blue-400 border-solid border-2">
                <label htmlFor='item' className="font-semibold text-lg p-2 bg-gray-950 bg-opacity-85 rounded-md ">New Item:</label>
                <input type="text"
                    id="item"
                    value={newItem}
                    onChange={e => setNewItem(e.target.value)} 
                    className="text-black items-end border-blue-400 border-solid border-2  rounded-md"
                    placeholder="Enter a task..."/>
            </div>
            <button className='btn bg-white mx-1 mt-2 px-2 py-2 rounded-md text-black border-transparent border-4 border-blue-500' >Add</button>
        </form>
    )
}

