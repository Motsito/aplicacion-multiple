import React from "react";
import { useState } from 'react';
import "./TicTacToe.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faX} from '@fortawesome/free-solid-svg-icons'

export default function Footer() {

    const X = <FontAwesomeIcon icon={faX} fontSize="40px" />
    const circle = <FontAwesomeIcon icon={faCircle} fontSize="40px" />
    const [XCircle, setCount] = useState(circle);




    return (
        <div className="back">
            <div className="dangerWindowZone">
            <div className="dangerWindow">
                <div className="topSide">
                    <button><FontAwesomeIcon icon={faX} fontSize="20px" /></button>
                </div>
                <h2>Pick first move</h2>
                <div className="firstMoveZ">
                    <div className="firstMoveB">
                        <button className="buttons" ><FontAwesomeIcon icon={faX} fontSize="90px" /></button>
                        <button className="buttons" ><FontAwesomeIcon icon={faCircle} fontSize="90px"/></button>
                    </div>
                </div>
            </div>
            </div>
            <h1>Tic Tac Toe</h1>
            <div className="bigOne" >
                <div className="topLeft boxFlex"><buttom></buttom></div>
                <div className="top boxFlex"><h1>2</h1></div>
                <div className="topRight boxFlex"><h1>3</h1></div>
                <div className="middleLeft boxFlex"><h1>4</h1></div>
                <div className="middle boxFlex"><h1>5</h1></div>
                <div className="middleRight boxFlex"><h1>6</h1></div>
                <div className="bottomLeft boxFlex"><h1>7</h1></div>
                <div className="bottom boxFlex"><h1>8</h1></div>
                <div className="bottomRight boxFlex"><h1>9</h1></div>
            </div>
        </div>
    )
}