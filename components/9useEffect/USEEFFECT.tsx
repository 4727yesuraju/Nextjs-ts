import React, { useEffect, useState } from 'react'



function USEEFFECT() {
    const [data,setData] = useState< dataType | null>(null);

    useEffect( ()=>{
          const fetchData = async ()=>{
              try {
                const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
                const d = await res.json();
                setData(d);
              } catch (error) {
                console.log(error);
              }
          }
          fetchData();
    },[])
  return (
    <div>
      {
        data ? (
            <pre>{JSON.stringify(data,null,2)}</pre>
        ) : (
            <p>Loading....</p>
        )
      }
    </div>
  )
}

export default USEEFFECT
