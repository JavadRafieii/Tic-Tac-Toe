type WinnerProps = {
  winner: "Star" | "Planet" | null;
  onNextRound: () => void;
  onResetGame: () => void;
};

function Winner({ winner, onNextRound, onResetGame }: WinnerProps) {
  return (
    <div className="bg-[#000c] absolute z-50 top-0 left-0 w-full h-full flex items-center justify-center">
      <div
        className={`${
          winner === "Star"
            ? "bg-StarWins"
            : winner === "Planet"
            ? "bg-PlanetWins"
            : "bg-Draw"
        } w-[600px] h-[300px] bg-no-repeat bg-[length:100%] relative`}
      >
        <div className="w-full absolute bottom-[80px] inter-bold text-sm flex items-center justify-center gap-x-2">
          <button
            onClick={onNextRound}
            className="py-1 px-2 rounded-lg bg-green-gray text-gold"
          >
            NEXT ROUND
          </button>
          <button
            onClick={onResetGame}
            className="py-1 px-2 rounded-lg bg-green-gray text-gold"
          >
            RESTAET
          </button>
        </div>
      </div>
    </div>
  );
}

export default Winner;
