import { useEffect, useState } from "react";
import { Triangle } from "react-loader-spinner";

function TicTacToe() {
  const [isActive, setIsActive] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(false);
    }, 5000);
  }, []);
  
  return (
    <div
      className={`${
        isActive ? "opacity-100 z-[50]" : "opacity-0 z-[-0]"
      } w-full h-[100vh] bg-TicTacToeBackground bg-no-repeat bg-cover absolute top-0 left-0 transition-[5s] flex items-center justify-center`}
    >
      <Triangle
        visible={true}
        height="100"
        width="100"
        color="#db8f44"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default TicTacToe;
