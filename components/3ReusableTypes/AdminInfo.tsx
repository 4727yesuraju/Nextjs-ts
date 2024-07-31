import React from 'react'
import {Info} from './UserInfo';
import { getString } from './UserInfo';

function AdminInfo(props : Info & {isAdmin : boolean}) {
  return (
    <div>
      <h1>AdminInfo : </h1>
      {getString(props)}
    </div>
  )
}

//output 
// AdminInfo :
// {
//   "username": "raju",
//   "email": "raju@gmail.com",
//   "age": 22,
//   "location": [
//     "usa",
//     "newYork"
//   ],
//   "isAdmin": true
// }

export default AdminInfo
