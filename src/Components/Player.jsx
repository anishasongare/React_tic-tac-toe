import { useState } from "react";

export default function Player({ initialName, symbol ,isActive}) {
  const [isEdit, isSetEdit] = useState(false);
  console.log("Loading Player component ", isEdit);


  const [playerName, setPlayerName] = useState(initialName);

  function togle() {
   
    isSetEdit((editing) => !editing);

  }
  function handleChange(event) {

    setPlayerName(event.target.value);



  }



  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {isEdit ? (

          <input type="text" required value={playerName} onChange={handleChange} />)
          : (<>
            <span className="player-name">{playerName}</span>

          </>)}
        <span className="player-symbol">{symbol}</span>

      </span>

      <button onClick={togle}>
        {isEdit ? "save" : "Edit"}
      </button>
    </li>

  );
}