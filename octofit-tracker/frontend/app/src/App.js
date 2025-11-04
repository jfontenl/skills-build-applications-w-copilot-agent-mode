// Cambio menor para relanzar GitHub Action




import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';



function App() {
  return (
    <Router>
      <div className="container mt-4">
        <nav className="navbar navbar-expand-lg navbar-light mb-4">
          <Link className="navbar-brand d-flex align-items-center justify-content-start" to="/" style={{ minWidth: 220 }}>
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="OctoFit Logo" className="App-logo me-2" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.12)', background: '#fff', borderRadius: '12px', padding: '4px' }} />
            <span className="ms-2 fw-bold" style={{ color: '#007bff', fontSize: '1.5rem', letterSpacing: '1px' }}>OctoFit Tracker</span>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item"><NavLink className="nav-link" to="/activities">Activities</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/leaderboard">Leaderboard</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/teams">Teams</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/users">Users</NavLink></li>
              <li className="nav-item"><NavLink className="nav-link" to="/workouts">Workouts</NavLink></li>
            </ul>
          </div>
        </nav>
        <div className="card shadow-sm p-4 mb-4 bg-white rounded">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={<div className="text-center"><h1 className="display-4 mb-4">Bienvenido a OctoFit Tracker</h1><p className="lead">¡Lleva el control de tu actividad física y compite con tu equipo!</p></div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}



export default App;
