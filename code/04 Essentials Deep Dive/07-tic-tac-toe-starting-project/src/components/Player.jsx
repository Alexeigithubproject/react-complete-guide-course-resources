import { useState } from "react";


export default function Player({name, symbol}) {
    const [ isEditing, setisEditing ] = useState(false);

    function HandleEditClick() {
        setisEditing(true)

    }

    
    return (
        <li>
          <span className="player">
            {!isEditing ? <span className="player-name">{name}</span> : <input className="player-name"></input>}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={HandleEditClick}>Edit</button>
        </li>
    );
}