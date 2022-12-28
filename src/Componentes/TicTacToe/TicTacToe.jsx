import React from "react";
import { useState,useEffect } from 'react';
import "./TicTacToe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faX} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function TicTacToe() {

//player icon and current player
const [player, setPlayer] = useState(Array(9).fill(null))
const [current, setcurrent] = useState(true)
const [winner, setWinner] = useState('')
let wcopy = '';
console.log(winner,wcopy)
const Status = ()=>(wcopy === '' ? (current ? `turno de O` :'turno de X') : `el ganador es ${wcopy}`)

// Arrays for each player
const [xArray, setXArray] = useState('')
const [circleArray, setCArray] = useState('')


//function that decides turns
const nextPlayer = (value)=>{
    console.log("odio a ti puta cosa wea fea", winner)
if(winner != ''|| player[value]){
    return
}
let valor = value.toString()

player[value] = current ? 'O' :'X'
setPlayer(player)

current ? setCArray(circleArray+value) : setXArray(xArray+value);

setcurrent(!current);

getwinner(player[value]);
}


//function that gets the winning pattern
const getwinner= (valor)=>{
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
        const [a,b,c] = winninPatterns[i]
        if(circleArray.includes(a) && circleArray.includes(b) && circleArray.includes(c)){
            setWinner('O')
            console.log('ganador es circulo',winner, a,b,c)
            return winner
        }else if (xArray.includes(a) && xArray.includes(b) && xArray.includes(c)){
            setWinner("X");
            console.log('ganador es equis')
            return winner
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
