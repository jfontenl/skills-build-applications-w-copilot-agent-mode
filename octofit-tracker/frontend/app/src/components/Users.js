// https://poisonous-spooky-graveyard-q79x9g6vp4jjhv6p-8000.app.github.dev/api/users


import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/users/`;

  const fetchUsers = () => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setUsers(results);
        console.log('Users endpoint:', endpoint);
        console.log('Fetched users:', results);
      })
      .catch(err => console.error('Error fetching users:', err));
  };

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4">Users</h2>
      <button className="btn btn-custom mb-3" onClick={fetchUsers}>Reload</button>
      <div className="table-responsive">
        <table className="table table-striped table-custom">
          <thead>
            <tr>
              <th>#</th>
              {users[0] && Object.keys(users[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id || idx}>
                <td>{idx + 1}</td>
                {users[0] && Object.keys(users[0]).map((key) => (
                  <td key={key}>{String(user[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
