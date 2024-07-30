import React, { useState } from 'react'

export default function TaskForm({ onSubmit }) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

        if (newItem === "") return

        onSubmit(newItem)

        setNewItem("")
    }

    return (
        <form onSubmit={handleSubmit} className='new-item-form flex flex-col w-5/6 text-gray-100 border-solid border-8 border-white rounded-b-none bg-gray-700 bg-opacity-65 '>
            <div className="flex flex-col items-center border-blue-400 border-solid border-8 p-4 rounded-md border-opacity-60">
                <div className="form-row p-2 m-0 bg-gray-700 bg-opacity-65 rounded-sm ">
                    <label htmlFor='item' className="font-semibold text-lg p-2 bg-gray-700 bg-opacity-85 rounded-lg mt-0">New Item:</label>
                    <input type="text"
                        id="item"
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        className="text-black items-end border-blue-400 border-solid border-2  rounded-md hover:border-yellow-400"
                        placeholder="Enter a task..." />
                </div>
                <button className='btn bg-white mx-3 mt-2 px-6 py-2 rounded-md text-black border-transparent border-4 border-blue-500  hover:bg-blue-300 transform active:scale-y-75 transition-transform flex ' >Add</button>
            </div>
        </form>
    )
}

