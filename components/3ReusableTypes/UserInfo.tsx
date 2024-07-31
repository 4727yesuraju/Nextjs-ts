import React from 'react'

export type Info = {
    username : string,
    email : string,
    age : number,
    location : string[];
}


//function UserInfo({username,email,age,location} : Info) {
function UserInfo(props: Info) {
  return (
    <div>
        <h1>User Info</h1>
        {getString(props)}
    </div>
  )
}

//output : 
// User Info
// {
//   "username": "yesu",
//   "email": "yesu@gmail.com",
//   "age": 20,
//   "location": [
//     "ind",
//     "ap"
//   ]
// }

export function getString(obj : Info){
    return <pre>{JSON.stringify(obj,null,2)}</pre>;
}

export default UserInfo
