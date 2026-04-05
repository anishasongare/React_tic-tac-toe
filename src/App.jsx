import {useState} from "react";
import Player from "./Components/Player.jsx";
import GameBoard from "./Components/GameBoard.jsx";
import Log from "./Components/Log.jsx";
function App() {

const [GameTurns,setGameTurns]=useState([]);



function handleSelectSquare(rowIndex,colIndex){

  setGameTurns((prevTurns)=>{
    let currentPlayer = 'x';

    if (prevTurns.length > 0 && prevTurns[0].player === 'x')
    {
      currentPlayer='o';
    }
    const updatedTurns=[{square:{ row : rowIndex ,col: colIndex}, player: currentPlayer },...prevTurns,];

    return updatedTurns;
  })

}

  return (  <><div id="game-container">
   
    <ol id="players" className="highlight-player">
    
     <Player initialName="player 1" symbol="x" isActive = {GameTurns[0]=== 'x' }/>
     <Player initialName="player 2" symbol="o" isActive = {GameTurns[0]=== 'o' }/>
     
    </ol>
  {<GameBoard turns={GameTurns} onSelectSquare={handleSelectSquare} />}
  </div>

   <Log turns= {GameTurns }/>
</>
   
  )
}

export default App
