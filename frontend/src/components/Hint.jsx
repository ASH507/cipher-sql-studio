export default function Hint({ hint }) {
  return hint ? (
    <div>
      <h4>Hint:</h4>
      <p>{hint}</p>
    </div>
  ) : null;
}