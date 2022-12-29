import React from 'react'
import { useState} from 'react';
import "./Calculadora.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft} from '@fortawesome/free-solid-svg-icons'

export default function Calculadora() {

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState('');
    const operators = ['+', '-', '*', '/', '.'];

//funcion para establecer el calculo
const calculate = value=>{
    if  (
        (operators.includes(value) && operators.includes(operation.slice(-1)))||
        (operators.includes(value) && operation === '')
        )
    {
        return;
    }
    
        setOperation(operation+value)
                
        if(!operators.includes(value)){
            setResult(eval(operation+value).toString())
        }
    
}


// Funcion la cual determina los valores de los botones de los numeros del 1 al 9 
const createDigits =()=>{
    const digits = []
    for(let i = 1; i < 10; i++){
        digits.push(
            <button 
            className='box' 
            onClick={()=>{calculate(i.toString());}}
            key={i}>{i}</button>
        )
    }
    return digits;
};

// Funcion la cual otorga el resultado final

const finalResult = ()=>{
    setOperation(eval(operation).toString())
}

// Funcion para borrar el ultimo digito del string

const deleteLast = ()=>{
    console.log('borrar')
    if (operation === ''){
        return;
    }
    const value = operation.slice(0, -1)
    setOperation(value)
}

//function restart button
const restartBtn=()=>{
    setResult('')
    setOperation('')
}


return (
    <div className="wallpaper">
        <div className='calculatorArea'>
            <div className='boxWriteZone'>
                <div className="restartB">
                    <button className="box" onClick={restartBtn}>C</button>
                </div>
                <div>
                <div className="possresult">
                    {!result ?<span>(0)</span>:"("+result+")"}
                </div>
                <div className="resultZone">
                    {operation || 0}
                </div>
                </div>
            </div>
            <div className='NandOperatorArea'>    
                <div className='operatorArea'>
                    <button className='box' onClick={()=>{calculate('+')}}>+</button>
                    <button className='box' onClick={()=>{calculate('-')}}>-</button>
                    <button className='box' onClick={()=>{calculate('*')}}>*</button>
                    <button className='box' onClick={()=>{calculate('/')}}>/</button>
                    <button className='box' onClick={deleteLast}>
                        <FontAwesomeIcon icon={faDeleteLeft} /> 
                    </button>
                </div>
                <div className="numbersArea">
                        {createDigits()}
                        <button className='box' onClick={()=>{calculate('.')}}>.</button>
                        <button className='box' onClick={()=>{calculate('0')}}>0</button>
                        <button className='box' onClick={finalResult}>=</button>
                </div>
            </div>
        </div>
    </div>
)
}