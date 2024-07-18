import React from 'react'

export default function TaskInput() {
    return (
        <>
            <div id="form-div" className="bg-slate-400 w-auto m-auto border-gray-700 border-solid border-2 rounded-sm">
                <form className="flex flex-col justify-center items-center">
                    <div>
                        <label for="taskInput" className="text-center"><h3>Add a task to the list</h3></label>
                        <input type="text" placeholder="Wash the dishes..." id="taskInput" name="taskInput"></input>
                    </div>
                    <div>
                        <label for="taskPriority" className="text-center"><h3>Set task priority</h3></label>
                        <input type="number" id="taskPriority" name="taskPriority" min="1" max="5"></input>
                    </div>
                    <button type="submit" id="taskSubmitButton" className="bg-slate-700 text-white p-4 border-solid border-4 w-96 border-green-400  rounded-sm font-semibold">Add Task</button>
                </form>
            </div>

            <div className="bg-slate-200  w-auto text-center p-1 m-auto h-auto" >
                <h2 id="taskH2" className='italic'><span id="taskCount" className="font-bold underline">0</span> tasks remaining</h2>
                <ul id="taskList" className="list-none">
                    <li class="todo-item" className="table-auto">
                        <div>
                            <label for="todo-0" className='todo-label'>Walk the dog</label>
                            <input id="todo-0" type="checkbox" defaultUnchecked></input>
                        </div>
                    </li>
                    <li class="todo-item">
                        <div>
                            <label for="todo-1" className='todo-label'>Wash the car</label>
                            <input id="todo-1" type="checkbox" defaultUnchecked></input>
                        </div>
                    </li>
                    <li class="todo-item">
                        <div>
                            <label for="todo-2" className='todo-label'>Create an app in React</label>
                            <input id="todo-2" type="checkbox" defaultUnchecked></input>
                        </div>
                    </li>
                    <li class="todo-item">
                        <div>
                            <label for="todo-3" className='todo-label'>Buy milk</label>
                            <input id="todo-3" type="checkbox" defaultUnchecked></input>
                        </div>
                    </li>
                    <li class="todo-item">
                        <div>
                            <label for="todo-4" className='todo-label'>Peel the potatoes</label>
                            <input id="todo-4" type="checkbox" defaultUnchecked></input>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}
