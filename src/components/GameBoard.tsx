import { type GameBoard } from "../App";

type GameBoardProps = {
  board: GameBoard;
  onChangeActivePlayer: (rowIndex: number, colIndex: number) => void;
};

function GameBoard({ board, onChangeActivePlayer }: GameBoardProps) {
  return (
    <section className="flex justify-center">
      <div className="w-[500px] h-[500px] bg-TicTacToe bg-no-repeat bg-cover flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-xl overflow-hidden">
          <ol className="w-full h-full">
            {board.map((row, rowIndex) => (
              <li key={rowIndex} className="w-full h-[33.3333%]">
                <ol className="w-full h-full flex items-center">
                  {row.map((playerSymbol, colIndex) => (
                    <li
                      key={colIndex}
                      className="w-[33.3333%] h-full bg-Slot bg-no-repeat bg-cover"
                    >
                      <button
                        onClick={() => onChangeActivePlayer(rowIndex, colIndex)}
                        disabled={playerSymbol !== null}
                        className="w-full h-full"
                      >
                        {playerSymbol === "Planet" ? (
                          <img
                            src="/Planet.png"
                            alt="Planet"
                            loading="lazy"
                            className="w-full h-full"
                          />
                        ) : playerSymbol === "Star" ? (
                          <img
                            src="/Star.png"
                            alt="Star"
                            loading="lazy"
                            className="w-full h-full"
                          />
                        ) : null}
                      </button>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default GameBoard;
