import { useState } from "react";
import Editor from "./components/Editor";

const getRandomColor = () =>
  `hsl(${Math.floor(Math.random() * 360)}, 70%, 70%)`;

function App() {
  const [username, setUsername] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-blue-100 p-6 ">
      {!submitted ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
          className="max-w-md mx-auto flex flex-col gap-4"
        >
          <h1 className="text-xl font-semibold text-center">Enter your name</h1>
          <input
            className="p-2 border border-gray-300 rounded"
            placeholder="e.g., Alice"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition-colors"
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
