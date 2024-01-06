import React from 'react'

export default function Header({todo}) {
  return (
    <div>
        <div className="card">
            <div className="card-header">Todo app <p>{todo.length}</p></div>
        </div>
    </div>
  )
}
