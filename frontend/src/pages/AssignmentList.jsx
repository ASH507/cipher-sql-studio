import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/assignments")
      .then((res) => setAssignments(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>SQL Assignments</h1>

      {assignments.map((a) => (
        <div key={a._id}>
          <h3>{a.title}</h3>
          <p>{a.description}</p>
          <p>Difficulty: {a.difficulty}</p>
          <button onClick={() => navigate(`/attempt/${a._id}`)}>
            Start
          </button>
        </div>
      ))}
    </div>
  );
}