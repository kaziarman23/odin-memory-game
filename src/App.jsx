import { useEffect, useState } from "react";
import Scoreboard from "./components/Scoreboard";
import GameBoard from "./components/GameBoard";
import Loader from "./components/Loader";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [clicked, setClicked] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(12); // Default number of Pokémon to fetch

  // Fetch Pokémon data from API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
        const data = await res.json();

        // Fetch detailed image data
        const promises = data.results.map(async (poke) => {
          const res = await fetch(poke.url);
          const details = await res.json();
          return {
            name: details.name,
            image: details.sprites.other["official-artwork"].front_default,
          };
        });

        const results = await Promise.all(promises);
        setPokemon(results);
        setClicked([]);
        setScore(0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, [limit]); // Re-fetch whenever limit changes

  // Shuffle cards when mounted or clicked
  const shuffleCards = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  const handleCardClick = (name) => {
    if (clicked.includes(name)) {
      // Lose round
      setScore(0);
      setClicked([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClicked([...clicked, name]);
      setPokemon(shuffleCards([...pokemon]));
      if (newScore > bestScore) setBestScore(newScore);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-100 to-sky-200 text-gray-800">
      <header className="py-6 text-center">
        <h1 className="text-4xl font-bold mb-2">Pokémon Memory Game</h1>
        <p className="text-gray-600 mb-4">Don’t click the same Pokémon twice!</p>

        {/* Limit Selector */}
        <div className="flex justify-center items-center gap-3">
          <label htmlFor="limit" className="text-gray-700 font-medium">
            Select number of Pokémon:
          </label>
          <select
            id="limit"
            value={limit}
            onChange={(e) => setLimit(Number(e.target.value))}
            className="border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring focus:ring-sky-200 bg-white"
          >
            <option value={8}>8</option>
            <option value={12}>12</option>
            <option value={16}>16</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
        </div>
      </header>

      <Scoreboard score={score} bestScore={bestScore} />

      {loading ? (
        <Loader />
      ) : (
        <GameBoard pokemon={pokemon} onCardClick={handleCardClick} />
      )}

      <hr className="text-gray-400 my-5" />
      <footer className="text-center text-gray-500 p-2">
        All Rights © Kazi Arman
      </footer>
    </div>
  );
}

export default App;
