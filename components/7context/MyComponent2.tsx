import React, { useContext } from 'react'
import { MyContext } from './MyContext2'

function MyComponent2() {
    const {count,increment,decrement}  = useContext(MyContext);
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default MyComponent2
