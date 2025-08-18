import GenealogyGame from "@jhbhan/genealogy-games";
import KingsQuiz from "@jhbhan/kings-quiz";
import { ParablesQuiz } from "@jhbhan/parable-quiz";
import { useParams, useNavigate } from "react-router-dom";

interface PlayGroundProps {
  type?: string;
}

const gameList = [
  { url: "/playground/genealogy", label: "Genealogy Game" },
  { url: "/playground/parable", label: "Parables Quiz" },
  { url: "/playground/kings", label: "Kings Quiz" }, 
];

interface GameSelectionButtonProps {
  url: string;
  label: string;
}


const GameSelectionButton = ({ url, label }: GameSelectionButtonProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate(url)}
      className="px-6 py-3 my-1 text-[1.15rem] rounded-md border-2 border-green-300 bg-gradient-to-r from-[#20241c] to-[#232b1a] text-green-300 font-mono font-bold tracking-wide shadow-md shadow-green-200/20 outline-none transition-all duration-150 hover:scale-[1.03] hover:bg-gradient-to-l hover:from-[#232b1a] hover:to-[#20241c] focus:ring-2 focus:ring-green-300 focus:shadow-lg active:scale-95 hover:cursor-pointer"
      type="button"
    >
      {label}
    </button>
  );
};

const PlayGround = ({ type }: PlayGroundProps) => {
  if (!type) {
    return (
      <div
        className="min-h-[60vh] flex flex-col items-center justify-center rounded-md shadow-lg shadow-green-200/20 p-8 max-w-[440px] mx-auto my-10 border-2 border-green-300 bg-[repeating-linear-gradient(135deg,_#20241c_0_20px,_#232b1a_20px_40px)]"
      >
        <h1 className="text-[2.1rem] mb-2 text-green-300 font-mono font-black tracking-wide drop-shadow-[0_0_4px_#7be97b80]">
          Welcome to the Playground!
        </h1>
        <div className="flex flex-col gap-5 w-full">
          {gameList.map((game, index) => (
            <GameSelectionButton key={index} url={game.url} label={game.label} />
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <>
      {type === "genealogy" && <GenealogyGame />}
      {type === "parable" && <ParablesQuiz />}
      {type === "kings" && <KingsQuiz />}
    </>
  );
};


const PlayGroundWrapper = () => {
  const { type } = useParams(); // type will be undefined, "genealogy", or "parable"
  return <PlayGround type={type} />;
};

export default PlayGroundWrapper;
