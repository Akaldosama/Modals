import React from 'react'
import { useState } from 'react';

export default function AddTask({todo, setToDo}) {
    const [inputValue, setInputValue] = useState('');

    const addBtn = (e) => {
        setToDo([...todo, inputValue]);
        setInputValue('');
    }

  return (
    <div>
        <div className="card">
            <div className="card-body">
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button className='btn btn-primary' onClick={addBtn}>Add</button>
            </div>
        </div>
    </div>
  )
}
