// https://poisonous-spooky-graveyard-q79x9g6vp4jjhv6p-8000.app.github.dev/api/activities


import React, { useEffect, useState } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

  useEffect(() => {
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Activities endpoint:', endpoint);
        console.log('Fetched activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, [endpoint]);

  const handleShowModal = (activity) => {
    setSelected(activity);
    setShowModal(true);
  };
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <h2 className="mb-4">Activities</h2>
      <button className="btn btn-custom mb-3" onClick={() => alert('Add Activity (form pending)')}>Add Activity</button>
      <div className="table-responsive">
        <table className="table table-striped table-custom">
          <thead>
            <tr>
              <th>#</th>
              {activities[0] && Object.keys(activities[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity, idx) => (
              <tr key={activity.id || idx}>
                <td>{idx + 1}</td>
                {activities[0] && Object.keys(activities[0]).map((key) => (
                  <td key={key}>{String(activity[key])}</td>
                ))}
                <td>
                  <button className="btn btn-sm btn-primary me-2" onClick={() => handleShowModal(activity)}>View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Modal Bootstrap */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Activity Details</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <pre>{JSON.stringify(selected, null, 2)}</pre>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;

