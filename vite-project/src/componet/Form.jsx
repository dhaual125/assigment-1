import React from 'react'
import { useState } from 'react';
function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  return (
    <>
    <input type='name'
    value={name}
    onChange={(e) => setName(e.target.value)}/>
    <input type='email'
    value={email}
    required={tru}
    onChange={(e) => setEmail(e.target.value)}/>
    <button onClick={() => console.log(name, email)}>Submit</button>
    
    </>
   
  )
}

export default Form