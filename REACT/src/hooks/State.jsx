import React from 'react'
import { useState } from 'react';

const State = () => {
    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount(count+3);
    }
     const handleDecrement=()=>{
        setCount(count-3);
    }
      const handleReset=()=>{
        setCount(0);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default State