"use client"
import React, { useState } from 'react'

function Counter() {
    const [counter,setCounter] = useState<number>(0);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <button onClick={()=>setCounter(counter-1)}> - </button>
      <p>{counter}</p>
      <button onClick={()=>setCounter(counter+1)}> + </button>
    </div>
  )
}

export default Counter
