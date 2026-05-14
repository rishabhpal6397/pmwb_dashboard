import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ProjectInfo from "./pages/projectInfo";
import PSR from "./pages/psr";
import Training from "./pages/training";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project-info" element={<ProjectInfo />} />
        <Route path="/psr" element={<PSR />} />
        <Route path="/training" element={<Training />} />
      </Routes>
    </Router>
  );
}

export default App;