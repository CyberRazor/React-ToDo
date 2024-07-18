import React from 'react'

export default function Header() {
  return (
    <div id="header" className="bg-blue-400 w-auto m-auto text-center  p-5   border-black border-solid border-4 rounded-sm">
        <header>
        <h1 className="text-3xl underline font-bold">My to-do list</h1>
        <p>These are todays tasks</p>
        </header>
    </div>
  )
}
