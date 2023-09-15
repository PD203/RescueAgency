import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/home/Home';
import Kvc from './pages/KVC/Kvc';
import TeamCom from './pages/Team/teamCom';
import Alert from './pages/Alert/Alert';
import NearbyHospitals from './pages/Nearbyhospital/nearbyHospital';
import Emergencylead from './pages/Emergency-lead/Emergencylead';
import User from './pages/User/User';
import Agency from './pages/Agencies/Agency';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/KVCresources" element={<Kvc/>} />
          <Route exact path="/communication" element={<TeamCom/>} />
          <Route exact path="/alerts" element={<Alert />} />
          <Route exact path="/nearbyhospitals" element={<NearbyHospitals/>} />
          <Route exact path="/emergency-leads" element={<Emergencylead/>} />
          <Route exact path="/users" element={<User/>} />
          <Route exact path="/agencies" element={<Agency/>} />

        </Routes>
      </Router>
    </div>
  )
}

export default App