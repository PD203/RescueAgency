import Disaster from "./pages/TOD";
import Home from "./pages/Home";
import Resources from "./pages/Resources";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Reporting from "./pages/Reporting";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Agencies from "./pages/Agencies";

function App() {
  const user = false
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/agencies" element={<Agencies/>}/>
          <Route path="/Resources" element={<Resources/>}/>
          <Route path="/disasters" element={<Disaster/>}/>
          <Route path="/reports" element={<Reporting />} />
          <Route path="/login" element={user ? <Navigate to="/"/> : <Login />} />
          <Route path="/register" element={user ? <Navigate to="/"/> : <Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
