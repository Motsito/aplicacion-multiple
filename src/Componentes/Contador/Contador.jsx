import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useState } from 'react';

export default function Footer() {
    const [num, setnum] = useState([24,25]);
    const operadores ={
        'suma' : function(num1, num2){
            return num1 + num2;
        },
        'resta': function(num1, num2){
            return num1 - num2;
        },
        'multiplicar':function(num1, num2){
            return num1 * num2;
        },
        'division':function(num1, num2){
            return num1 / num2;
        }}


    return (
        <div>
            <h1>el primer numero es: {num[0]} y el segundo numero es: {num[1]} y la   es de: {operadores.division(num[0],num[1])} :</h1>
        </div>
    )
}
