import { useContext } from "react"; 
import { MyContext } from "./MyContext";
import React from 'react'

function MyComponent() {
    const context = useContext(MyContext);

    if(!context) {
        throw new Error("MyCompoment must be used with in a MyContextProvider");
    }
    const {value,setValue} = context;
  return (
    <div>
      <p>value : {value}</p>
      <input 
         type="text"
         value={value}
         onChange={e=>setValue(e.target.value)}
       />
    </div>
  )
}

export default MyComponent
