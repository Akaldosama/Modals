import React from 'react'

export default function Result({todo}) {
  return (
    <div>
        <div className="card">
            <div className="card-body">
                {
                    todo.map((item,index) =>{
                       return <ul key={index}>
                          <li>{item}</li>
                       </ul>
                    })
                }
            </div>
        </div>
    </div>
  )
}
