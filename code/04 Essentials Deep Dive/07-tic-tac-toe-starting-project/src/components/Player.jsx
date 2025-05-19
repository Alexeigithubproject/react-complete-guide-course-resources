import { useState } from "react";


export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [ isEditing, setisEditing ] = useState(false);

    function HandleEditClick() {
      setisEditing(prev => !prev)
    }

    function HandleChange(event) {
      console.log(event.target.value)
      setPlayerName(event.target.value)

    }
    
    return (
        <li className ={isActive ? "active" :undefined}>
          <span className="player">
            {!isEditing ? <span className="player-name">{playerName}</span> : <input className="player-name" onChange={HandleChange} value={playerName} required />}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={HandleEditClick}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}