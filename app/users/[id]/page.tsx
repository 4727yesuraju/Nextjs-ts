import React from 'react'

type userShape = {
    params : {id : number}
}

function page({params : {id}} : userShape) {
  return (
    <div>
      {id}
    </div>
  )
}

export default page
