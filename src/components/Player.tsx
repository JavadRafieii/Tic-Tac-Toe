import { type ChangeEvent, useState } from "react";

type PlayerProps = {
  initialName: string;
  symbol: "Planet" | "Star";
  isActive: boolean;
  gameCount: number;
  wins: number;
};

type HandleChangeEditing = () => void;
type HandleChangePlayerName = (event: ChangeEvent<HTMLInputElement>) => void;

function Player({
  initialName,
  symbol,
  isActive,
  gameCount,
  wins,
}: PlayerProps) {
  const [playerName, setPlayerName] = useState<string>(initialName);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleChangeEditing: HandleChangeEditing = () => {
    setIsEditing((prveState) => !prveState);
  };

  const handleChangePlayerName: HandleChangePlayerName = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setPlayerName(event.target.value);
  };

  return (
    <li
      className={`${
        isActive && symbol === "Planet"
          ? "bg-orange"
          : isActive && symbol === "Star"
          ? "bg-blue"
          : undefined
      } rounded-[30px] py-2 px-1`}
    >
      {symbol === "Planet" ? (
        <span
          className={`${
            isActive ? "bg-PlanetIcon scale-[1.4]" : "bg-HollowPlanet"
          } block w-[80px] h-[80px] bg-no-repeat bg-cover mx-auto`}
        ></span>
      ) : (
        <span
          className={`${
            isActive ? "bg-StarIcon scale-[1.4]" : "bg-HollowStar"
          } block w-[80px] h-[80px] bg-no-repeat bg-cover mx-auto`}
        ></span>
      )}

      {isEditing ? (
        <input
          onChange={handleChangePlayerName}
          type="text"
          required
          value={playerName}
          className="w-[80px] h-[30px] rounded-md my-2 border border-blue-gray p-2 inter-bold text-green-gray text-xl"
        />
      ) : (
        <span className="block inter-bold text-green-gray text-xl text-center my-2">
          {playerName}
        </span>
      )}

      <div className="flex justify-center">
        <button
          onClick={handleChangeEditing}
          className="inter-light text-blue-gray text-sm text-center"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
      </div>

      <span className="flex items-center justify-center gap-1">
        <span className="inter-bold text-green-gray text-2xl">{wins}</span>
        <span className="inter-light text-blue-gray text-lg">/</span>
        <span className="inter-light text-blue-gray text-lg">{gameCount}</span>
      </span>
    </li>
  );
}

export default Player;
