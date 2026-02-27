import { BrowserRouter, Routes, Route } from "react-router-dom";
import AssignmentList from "./pages/AssignmentList";
import Attempt from "./pages/Attempt";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AssignmentList />} />
        <Route path="/attempt/:id" element={<Attempt />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;