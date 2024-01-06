import React, { useState } from 'react'

export default function Table() {
    const [users, setUsers] = useState([])
    const [name, setName] = useState('')
    const [last, setLast] = useState('')
    const [phone, setPhone] = useState('')
    
    const [count, setCount] = useState(0)
    
    const addUser = () =>{
        let payload = {
            name, last, phone
        }
        users.push({...payload})
        setUsers([...users])
    }
    const FuncName = (e) =>{
        setName(e.target.value)
    }
    const FuncLast = (e) =>{
        setLast(e.target.value)
    }
    const FuncPhone = (e) =>{
        setPhone(e.target.value)
    }
  return (
    <div>
        <div className="container">
            <input type="text" placeholder='Name' onChange={FuncName} />
            <input type="text" placeholder='Last Name' onChange={FuncLast} />
            <input type="text" placeholder='Phone' onChange={FuncPhone} />
            <button onClick={addUser} className='btn btn-primary mb-2'>Add User</button>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Active</th>
                        <th>Count</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item, index) => {
                            return <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>{item.last}</td>
                                <td>{item.phone}</td>
                                <td><input type="checkbox" /></td>
                                <td>
                                    <button onClick={() => setCount(prev => prev - 1)}>-</button>
                                    {count}
                                    <button onClick={() => setCount(prev => prev + 1)}>+</button>
                                </td>
                                <td><button>Action</button></td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
