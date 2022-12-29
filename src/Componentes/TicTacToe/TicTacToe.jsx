import React from "react";
import { useState,useEffect } from 'react';
import "./TicTacToe.css"
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function TicTacToe() {

//player icon and current player
const [player, setPlayer] = useState(Array(9).fill(null))
const [current, setcurrent] = useState(true)
const [winner, setWinner] = useState('')


const Status = ()=>(winner === '' ? (current ? `turno de O` :'turno de X') : `el ganador es ${winner}`)

//function that decides turns
const nextPlayer = (value)=>{
    // checks if winner have not been decided or if player is already on that spot
if(winner != ''|| player[value]){
    return
}
//if current is true, current player is O, and if it is false current will be X
player[value] = current ? 'O' :'X'
setPlayer(player)

setcurrent(!current);

getwinner();
}


//function that gets the winning pattern
const getwinner= ()=>{
    // Array  that tells What patterns are the winning ones
const winninPatterns = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]
//for el cual revisa cada valor a;adido a las array, y asi encontrar al ganador
    for(let i = 0; i < winninPatterns.length; i++){
        const [a,b,c] = winninPatterns[i];
        if(player[a] == 'O' && player[a] == player[b] && player[a] == player[c]){
            setWinner('O');
            console.log(player[a], player[b],player[c])
            return winner;
        }else if (player[a] == 'X' && player[a] == player[b] && player[a] == player[c]){
            console.log(player[a], player[b],player[c])
            setWinner("X");
            return winner;
        }
    }
}


//function that generates the spaces for the game
const newSquares = ()=>{
    const squares = [];
    for (let i = 1; i <= 9; i++){
        squares.push(<button 
        className="boxes"
        onClick={()=>nextPlayer(i)}
        key={i}
        value={player[i]}
        >{player==null?"":player[i]}
        </button>
        )
    }
    return squares;
}

    return (
        <div className="TicTacToeArea">
            <h1>Tic Tac Toe</h1>
            <div className="gridArea" >
                {newSquares()}
            </div>
            <h4><Status /></h4> 
        </div>
    )
}
