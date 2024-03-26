import React from 'react'
import './Calculator.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import { useState } from 'react';

export default function Calculator() {
    const [num, setNum] = useState (0);
    const [oldNum, setOldNum] = useState (0);
    const [operator, setOperator] = useState (0);

    function inputNum(a) {
        var input = a.target.value
        if(num===0){
            setNum(input)
        }
        else{
        setNum(num + input);
    }
    }
    
    function clear() {
        setNum(0)
        setOldNum(0)
    }
    
    function inverse() {
        if(num > 0){
            setNum(-num)

        }
        else{
            setNum(-1*num)
        }
    }

    function point() {
        setNum(num +".")
    }

    function porcent() {
        setNum(num/100)
    }



    function setOperatorHandler(a) {
        var operatorNum = a.target.value
        setOperator(operatorNum)
        setOldNum(num)
        setNum(0)
        
    }


    function calc() {

        switch (operator) {
            case "+":
                setNum(parseFloat(oldNum) + parseFloat(num))
                break;
            case "-":
                setNum(oldNum - num)
                break;
            case "*":
                setNum(oldNum * num)
                break;
            case "/":
                setNum(oldNum / num)
                break;
            case "x(":
                setNum(parseFloat(oldNum) * parseFloat(num))
                break;
            default:
                break;
        }

    }
  return (

    <Container maxWidth="xs">
        <Box m={5} />
    <div className="wrapper">

        <h1 className='result'>{num}</h1>
        <h1 className='line'>_______________________</h1>
      <button className='clean' onClick={clear}>C</button>
      <button onClick={setOperatorHandler}value="x(" >()</button>
      <button onClick={porcent} >%</button>
      <button onClick={setOperatorHandler} value="/">/</button>
      <button onClick={inputNum} value="7">7</button>
      <button onClick={inputNum} value="8">8</button>
      <button onClick={inputNum} value="9">9</button>
      <button onClick={setOperatorHandler} value="*" >x</button>
      <button onClick={inputNum} value="4">4</button>
      <button onClick={inputNum} value="5">5</button>
      <button onClick={inputNum} value="6">6</button>
      <button onClick={setOperatorHandler} value="-" >-</button>
      <button onClick={inputNum} value="1">1</button>
      <button onClick={inputNum} value="2">2</button>
      <button onClick={inputNum} value="3">3</button>
      <button onClick={setOperatorHandler} value="+">+</button>
      <button onClick={inverse}>+/- </button>
      <button onClick={inputNum} value="0">0</button>
      <button onClick={point} >,</button>
      <button className='equal' onClick={calc} >=</button>
    </div>
      </Container>
      
  )
}
