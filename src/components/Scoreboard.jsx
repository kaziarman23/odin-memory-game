function Scoreboard({ score, bestScore }) {
  return (
    <div className="flex justify-center gap-8 text-lg mb-6">
      <div className="bg-white border shadow rounded-lg px-4 py-2">
        <strong>Score:</strong> {score}
      </div>
      <div className="bg-white border shadow rounded-lg px-4 py-2">
        <strong>Best Score:</strong> {bestScore}
      </div>
    </div>
  );
}

export default Scoreboard;
