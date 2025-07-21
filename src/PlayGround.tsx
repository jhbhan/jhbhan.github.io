import GenealogyGame from "@jhbhan/genealogy-games"
import { ParablesQuiz } from "@jhbhan/parable-quiz";
import { useParams } from "react-router-dom"

const PlayGround = () => {
  const params = useParams();
  const appType = params.type || 'genealogy-game'; // Default to genealogy-game if no type is provided
  if (appType === 'genealogy-game') {
    return (
      <GenealogyGame />
    )
  }
  else {
    return (
      <ParablesQuiz />
    )
  }
}

export default PlayGround