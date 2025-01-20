import React from 'react'



function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setmessage] = React.useState('');
  const [userData, setUserData] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, message };
    setUserData([...userData, data]);
    
    console.log(userData);
    setName('');
    setEmail('');
    setmessage('');
    
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
       
          Name : <input type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
       
        <br />

        
          Email : <input type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
      
        <br />

       
          Message : <input type="text"
            value={message}
            onChange={(e) => setmessage(e.target.value)} />
       
        <br />

        <button type='submit'>Submit</button>

        <ul>
          {userData.map((data, index) => {
            <li key={index}>
              <p>Name:{data.name}</p>
              <p>Email:{data.email}</p>
              <p>Message:{data.message}</p>
            </li>
          })}
        </ul>




      </form>
    </div>


  )
}

export default Form;