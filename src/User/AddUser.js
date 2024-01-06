import React from "react";
import Users from "./Users";
import { useState } from "react";

export default function AddUser() {
  const [modal, setModal] = useState(false);
  const [users, setUsers] = useState([]);
  return (
    <>
      <Users modal={modal} toggle={() => setModal(false)} users={users} setUsers={setUsers}></Users>

      <div className="container mb-5">
        <button className="btn btn-primary my-2" onClick={() => setModal(true)}>
          Add User
        </button>
        <div className="card">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Language</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.phone}</td>
                    <td>{item.address}</td>
                    <td>{item.lang}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
