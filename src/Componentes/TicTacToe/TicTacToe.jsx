import React from "react";
import { useState } from 'react';
import "./TicTacToe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faX} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css'; 

export default function TicTacToe() {

//player icon and current player
const [player, setPlayer] = useState(<FontAwesomeIcon icon={faCircle} />)
const [current, setcurrent] = useState(true)

// Arrays for each player
const [xArray, setXArray] = useState('')
const [circleArray, setCArray] = useState('')


//function that decides turns
const nextPlayer = value=>{
let valor = value.toString()
if(current){
    setCArray(circleArray+value)
    setPlayer(<FontAwesomeIcon icon={faX} />);
    setcurrent(false)
}else{
    setXArray(xArray+value)
    setPlayer(<FontAwesomeIcon icon={faCircle} />);
    setcurrent(true)
    }

    console.log('vamos bien',circleArray)
for(let i = 0; i < winninPatterns.length; i++){
    const [a,b,c] = winninPatterns[i]
    if(circleArray.includes(a)){
        console.log('circulo gano')
    }
}
}


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

//function that generates the spaces for the game
const newSquares = ()=>{
    const squares = [];
    for (let i = 1; i <= 9; i++){
        squares.push(<button 
        className="boxes" 
        onClick={nextPlayer}
        key={i}
        > 
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
                {player}
            </div>
        </div>
    )
}