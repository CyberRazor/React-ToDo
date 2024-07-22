import React from 'react'

export default function ListItem({completed, id, title, toggleToDo, deleteTodo}) {

    return (
        <li className="inline-flex flex-row gap-1 justify-between items-center text-gray-5 bg-gray-700 w-5/6 m-1.5 border-dotted border-2 border-white px-2 rounded-xl  ">
            <label className="p-3 ml-0">
                <input 
                    className=""
                    type="checkbox"
                    checked={completed}
                    onChange={e => toggleToDo(id, e.target.checked)}
                />                           
            </label>
            <h2 className="px-4 py-2 text-xl italic break-words md:break-all"> {title} </h2> 

            <button className='btn btn-danger bg-red-500 mx-1 my-2 mt-4 px-1 py-1 rounded-md  border-transparent border-4 font-semibold text-white border-red-600 text-lg'
                onClick={() => deleteTodo(id)}
                >Delete
            </button>
        </li>
    )
}
