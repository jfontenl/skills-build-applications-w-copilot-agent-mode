// https://<tu-codespace>-8000.app.github.dev/api/leaderboard


import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [leaders, setLeaders] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

  const fetchLeaders = () => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Leaderboard endpoint:', endpoint);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  };

  useEffect(() => {
    fetchLeaders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4">Leaderboard</h2>
      <button className="btn btn-custom mb-3" onClick={fetchLeaders}>Reload</button>
      <div className="table-responsive">
        <table className="table table-striped table-custom">
          <thead>
            <tr>
              <th>#</th>
              {leaders[0] && Object.keys(leaders[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {leaders.map((leader, idx) => (
              <tr key={leader.id || idx}>
                <td>{idx + 1}</td>
                {leaders[0] && Object.keys(leaders[0]).map((key) => (
                  <td key={key}>{String(leader[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
