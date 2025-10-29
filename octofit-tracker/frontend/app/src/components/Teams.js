// https://poisonous-spooky-graveyard-q79x9g6vp4jjhv6p-8000.app.github.dev/api/teams


import React, { useEffect, useState } from 'react';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

  const fetchTeams = () => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams endpoint:', endpoint);
        console.log('Fetched teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  };

  useEffect(() => {
    fetchTeams();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return (
    <div>
      <h2 className="mb-4">Teams</h2>
      <button className="btn btn-custom mb-3" onClick={fetchTeams}>Reload</button>
      <div className="table-responsive">
        <table className="table table-striped table-custom">
          <thead>
            <tr>
              <th>#</th>
              {teams[0] && Object.keys(teams[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {teams.map((team, idx) => (
              <tr key={team.id || idx}>
                <td>{idx + 1}</td>
                {teams[0] && Object.keys(teams[0]).map((key) => (
                  <td key={key}>{String(team[key])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Teams;
