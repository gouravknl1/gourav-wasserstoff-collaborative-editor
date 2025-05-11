import { useState } from "react";
import Editor from "./components/Editor";

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;

function App() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f3f4f6", // Tailwind gray-100
        padding: "1.5rem",
      }}
    >
      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          style={{
            maxWidth: "28rem", // Tailwind max-w-md
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <h1
            style={{
              fontSize: "1.25rem", // text-xl
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Enter your name
          </h1>
          <input
            style={{
              padding: "0.5rem",
              border: "1px solid #d1d5db", // Tailwind border
              borderRadius: "0.375rem", // rounded
            }}
            placeholder="e.g., Alice"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button
            type="submit"
            style={{
              backgroundColor: "#3b82f6", // Tailwind blue-500
              color: "white",
              padding: "0.5rem 0",
              borderRadius: "0.375rem",
              cursor: "pointer",
              transition: "background-color 0.2s",
            }}
            onMouseOver={
              (e) => (e.currentTarget.style.backgroundColor = "#2563eb") // blue-600 on hover
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#3b82f6")
            }
          >
            Start Editing
          </button>
        </form>
      ) : (
        <Editor user={{ name: username, color: getRandomColor() }} />
      )}
    </div>
  );
}

export default App;
