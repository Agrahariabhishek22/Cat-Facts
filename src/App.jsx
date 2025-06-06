import { useState } from 'react';

function App() {
  const [fact, setFact] = useState("");

  const fetchCatFact = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");
      const data = await response.json();
      setFact(data.fact);
    } catch (error) {
      setFact("Failed to fetch fact. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 border-amber-500">
      <h1 className="text-2xl font-bold mb-6">🐱 Random Cat Fact</h1>
      <button
        onClick={fetchCatFact}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Get Cat Fact
      </button>
      {fact && (
        <p className="mt-6 text-center text-lg text-gray-800 max-w-xl">
          {fact}
        </p>
      )}
    </div>
  );
}

export default App;
