"use client"
import React, { FormEvent, useRef, useState } from 'react'
import { getString } from '../3ReusableTypes/UserInfo';

interface formInterface{
    name : string,
    email : string,
    password : string
}

function Form() {
    const [formData,setFormData] = useState<formInterface>({
        name : "",
        email : "",
        password : ""
    });

    const name = useRef<HTMLInputElement>(null);
    const email = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);

    function handleSubmit(event : FormEvent<HTMLFormElement>){
         event.preventDefault();
         const nameVal = name.current!.value;   //! - means prefix value is neither null nor undefined
         const emailVal = email.current!.value;
         const passwordVal = password.current!.value;

         setFormData({name : nameVal,email:emailVal,password:passwordVal});

    }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter your name" ref={name} />
      <input type="email" placeholder="Enter your email" ref={email} />
      <input type="password" placeholder="Enter your password" ref={password} />
      <button type="submit">Submit </button>
      <pre>{JSON.stringify(formData,null,2)}</pre>
    </form>
  )
}

export default Form
