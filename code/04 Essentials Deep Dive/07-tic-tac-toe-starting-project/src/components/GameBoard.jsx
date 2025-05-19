import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({onSelectSquare, activePlayerSymbol}) {
    const [gameBoard, setGameboard] = useState(initialGameBoard);

    function HandleClick(rowIndex, colIndex){
        setGameboard((prevGameBoard) => {
            const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
            return updatedBoard
        });
        onSelectSquare();
    }

    return <ol id="game-board" >
        {gameBoard.map((row, rowIndex) =>
        <li key={rowIndex}>
            <ol>{row.map((playerSymbol, colIndex) => <li key={colIndex}><button onClick={() => HandleClick(rowIndex, colIndex)}>{playerSymbol}</button></li>)}
            </ol>
        </li>)}
    </ol>
}