import React, { useState } from 'react';

const UsersList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', active: false },
    { id: 2, name: 'User 2', active: false },
    { id: 3, name: 'User 3', active: false },
  ]);

  const [activeUsers, setActiveUsers] = useState([
    { id: 4, name: 'User 4', active: true },
  ]);

  const handleUserClick = (id) => {
    const updatedUsers = users.map(user => {
      if (user.id === id) {
        return { ...user, active: !user.active };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleMoveClick = () => {
    const newActiveUsers = users.filter(user => user.active);
    setActiveUsers(prevActiveUsers => [...prevActiveUsers, ...newActiveUsers]);

    const updatedUsers = users.map(user => {
      if (user.active) {
        return { ...user, active: false };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <input
              type="checkbox"
              checked={user.active}
              onChange={() => handleUserClick(user.id)}
            />
            {user.name}
          </li>
        ))}
      </ul>
      <button onClick={handleMoveClick}>Move</button>
      
      <h2>Active Users</h2>
      <ul>
        {activeUsers.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;

