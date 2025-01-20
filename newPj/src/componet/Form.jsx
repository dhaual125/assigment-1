import React from 'react';
import '../index.css'
function Form() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [userData, setUserData] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, message };
    setUserData([...userData, data]);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="h-screen bg-gray-800 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-gray-700 mb-4 text-center">
          Contact Form
        </h1>
        <div className="mb-4">
          <label className="block text-gray-600 font-medium mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-medium mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-600 font-medium mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            id="message"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Submit
        </button>
        <ul className="mt-6 space-y-4">
          {userData.map((data, index) => (
            <li
              key={index}
              className="p-4 bg-gray-50 border rounded-lg shadow-sm"
            >
              <p className="text-gray-800 font-medium">Name: {data.name}</p>
              <p className="text-gray-800">Email: {data.email}</p>
              <p className="text-gray-800">Message: {data.message}</p>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Form;
