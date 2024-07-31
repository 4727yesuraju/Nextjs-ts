import React, { FC } from 'react'

//1. using props
// function User(props : {name : string, age : string}) {
//   return (
//     <main>
//       <h1>name : {props.name}</h1>
//       <h1>age : {props.age}</h1>
//       <pre>{JSON.stringify(props,null,2)}</pre>
//     </main>
//   )
// }

// output 
// name : yesu
// age : 20
// {
//   "age": 20,
//   "name": "yesu"
// }


//2. props destructuring
// function User({name, age} : {name : string, age : string}) {
//   return (
//     <main>
//       <h1>name : {name}</h1>
//       <h1>age : {age}</h1>
//       <pre>{JSON.stringify({age, name},null,2)}</pre>
//     </main>
//   )
// }

// output 
// name : yesu
// age : 20
// {
//   "age": 20,
//   "name": "yesu"
// }


// 3 using type

// type userShape = {
//     name : string,
//     age : number
// }


// 4 using inteface

interface userShape{
    name : string,
    age : number
}

// function User({name, age} : userShape) {
//   return (
//     <main>
//       <h1>name : {name}</h1>
//       <h1>age : {age}</h1>
//       <pre>{JSON.stringify({age, name},null,2)}</pre>
//     </main>
//   )
// }


// 5 using FC

const  User : FC<userShape> =  ({name, age}) => {
  return (
    <main>
      <h1>name : {name}</h1>
      <h1>age : {age}</h1>
      <pre>{JSON.stringify({age, name},null,2)}</pre>
    </main>
  )
}
export default User
