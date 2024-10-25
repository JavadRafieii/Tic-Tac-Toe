import { useState } from "react";
import Board from "./components/GameBoard";
import Player from "./components/Player";
import WINNING_COMBINATIONS from "./winning-of-combination";
import Winner from "./components/Winner";
import TicTacToe from "./components/TicTacToe";

export type GameBoard = [
  Array<null | "Planet" | "Star">,
  Array<null | "Planet" | "Star">,
  Array<null | "Planet" | "Star">
];

const initialGameBoard: GameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

type GameSquare = {
  square: { row: number; col: number };
  player: "Planet" | "Star";
};

type HandleChangeActivePlayer = (rowIndex: number, colIndex: number) => void;

function identificationOfActivePlayer(gameTurns: GameSquare[]) {
  let currentPlayer: "Planet" | "Star" = "Planet";

  if (gameTurns.length > 0 && gameTurns[0].player === "Planet") {
    currentPlayer = "Star";
  }
  return currentPlayer;
}

let gameCount: number = 0;
let numberOfwinsPlanet: number = 0;
let numberOfwinsStar: number = 0;

function App() {
  const [gameTurns, setGameTurns] = useState<GameSquare[]>([]);

  const activePlayer = identificationOfActivePlayer(gameTurns);

  const gameBoard = initialGameBoard.map((array) => [...array]) as GameBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner: null | "Planet" | "Star" = null;

  for (const combimation of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combimation[0].row][combimation[0].column];
    const secondSquareSymbol =
      gameBoard[combimation[1].row][combimation[1].column];
    const thirdSquareSymbol =
      gameBoard[combimation[2].row][combimation[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secondSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  const handleChangeActivePlayer: HandleChangeActivePlayer = (
    rowIndex: number,
    colIndex: number
  ) => {
    setGameTurns((prevState) => {
      const currentPlayer = identificationOfActivePlayer(prevState);

      const updateState = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevState,
      ];

      return updateState;
    });
  };

  function handleNextRound() {
    setGameTurns([]);
    gameCount += 1;
    if (winner === "Planet") {
      numberOfwinsPlanet += 1;
    } else if (winner === "Star") {
      numberOfwinsStar += 1;
    }
  }

  function handleResetGame() {
    setGameTurns([]);
    gameCount = 0;
    numberOfwinsPlanet = 0;
    numberOfwinsStar = 0;
  }

  return (
    <main className="container h-[100vh]">
      <TicTacToe />
      <section className="relative z-40 h-full flex items-center justify-center gap-10">
        <ul>
          <Player
            initialName="Player 1"
            symbol="Planet"
            isActive={activePlayer === "Planet"}
            gameCount={gameCount}
            wins={numberOfwinsPlanet}
          />
        </ul>
        <Board
          board={gameBoard}
          onChangeActivePlayer={handleChangeActivePlayer}
        />
        <ul>
          <Player
            initialName="Player 2"
            symbol="Star"
            isActive={activePlayer === "Star"}
            gameCount={gameCount}
            wins={numberOfwinsStar}
          />
        </ul>
      </section>
      {winner ? (
        <Winner
          winner={winner}
          onNextRound={handleNextRound}
          onResetGame={handleResetGame}
        />
      ) : gameTurns.length === 9 && !winner ? (
        <Winner
          winner={winner}
          onNextRound={handleNextRound}
          onResetGame={handleResetGame}
        />
      ) : null}
    </main>
  );
}

export default App;
