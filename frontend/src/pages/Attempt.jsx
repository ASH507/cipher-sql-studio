import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Editor from "../components/Editor";
import Result from "../components/Result";
import Hint from "../components/Hint";

export default function Attempt() {
  const { id } = useParams();

  const [assignment, setAssignment] = useState(null);
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [hint, setHint] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch assignment details
  useEffect(() => {
    const fetchAssignment = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/assignments/${id}`
        );
        setAssignment(res.data);
      } catch {
        setError("Failed to load assignment.");
      }
    };

    fetchAssignment();
  }, [id]);

  // Execute SQL Query
  const executeQuery = async () => {
    if (!query.trim()) {
      setError("Please enter a SQL query.");
      return;
    }

    setLoading(true);
    setError("");
    setHint("");
    setResult([]);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/query/execute",
        { query }
      );
      setResult(res.data);
    } catch (err) {
      setError(
        err.response?.data?.error || "Something went wrong while executing."
      );
    }

    setLoading(false);
  };

  // Get Hint
  const getHint = async () => {
    if (!assignment) return;

    setError("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/hint",
        {
          question: assignment.question,
          userQuery: query,
        }
      );
      setHint(res.data.hint);
    } catch {
      setError("Unable to generate hint.");
    }
  };

  if (!assignment) {
    return <p style={{ padding: "20px" }}>Loading assignment...</p>;
  }

  return (
    <div className="container">
      {/* Question Section */}
      <div className="question-section">
        <h2>{assignment.title}</h2>
        <p>{assignment.question}</p>
      </div>

      {/* SQL Editor */}
      <div className="editor-section">
        <Editor setQuery={setQuery} />
      </div>

      {/* Buttons */}
      <div className="button-section">
        <button onClick={executeQuery} disabled={loading}>
          {loading ? "Running..." : "Execute Query"}
        </button>

        <button onClick={getHint}>Get Hint</button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="error-box">
          <p>{error}</p>
        </div>
      )}

      {/* Result Section */}
      <div className="result-section">
        <Result data={result} />
      </div>

      {/* Hint Section */}
      {hint && (
        <div className="hint-section">
          <Hint hint={hint} />
        </div>
      )}
    </div>
  );
}