import Card from "./Card";

function GameBoard({ pokemon, onCardClick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-6 max-w-4xl mx-auto">
      {pokemon.map((poke, index) => (
        <Card
          key={index}
          name={poke.name}
          image={poke.image}
          onClick={() => onCardClick(poke.name)}
        />
      ))}
    </div>
  );
}

export default GameBoard;
