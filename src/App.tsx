import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import ProjectInfo from "./pages/projectInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project-info" element={<ProjectInfo />} />
      </Routes>
    </Router>
  );
}

export default App;