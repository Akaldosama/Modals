import React from 'react'
import AddUser from './User/AddUser'
import Users from './User/Users'
import Actives from './Actives/Actives'
import Table from './Table/Table'
import All from './ToDoList/All'

export default function App() {
  return (
    <div>
      <AddUser />
      <Users />
      <br />
      <br />
      <Actives />
      <br />
      <br />
      <Table />
      <br />
      <br />
      <All />
    </div>
  )
}
