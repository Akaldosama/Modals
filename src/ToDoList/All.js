import React, { useState } from 'react'
import Header from './Header'
import AddTask from './AddTask'
import Result from './Result'

export default function All() {
    const [todo, setToDo] = useState([])

  return (
    <div>
      <Header todo={todo} />
      <AddTask todo={todo} setToDo={setToDo} />
      <Result todo={todo} setToDo={setToDo} />
    </div>

  )
}
