import React, { useState } from 'react';
import axios from 'axios';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [message, setMessage] = useState('');
  const [emailErrorMessage, setemailErrorMessage] = useState('');
  const [usernameErrorMessage, setusernameErrorMessage] = useState('');
  const [messageErrorMessage, setmessageErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
      if (!validateEmail(email)) {
        setemailErrorMessage('Email is invalid');
      } else {
        setemailErrorMessage('');
      };   
    } else if (inputType === 'userName') {
      setUserName(inputValue);
      if (userName === '') {
        setusernameErrorMessage('Your Name is Required');
      } else {
        setusernameErrorMessage('');
      }; 
    } else {
      setMessage(inputValue);
      if (message === '') {
        setmessageErrorMessage('A message is required.');
      } else {
        setmessageErrorMessage('');
      }; 
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const contactmessage = JSON.stringify({userName,email,message})

    alert(`Hello ${userName}\n${email}\nMessage:\n--------\n${message}`);

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
    setemailErrorMessage('');
    setusernameErrorMessage('');
    setmessageErrorMessage('');

    const postMessage = async (body) => axios.post('http://localhost:5000/');

    postMessage(contactmessage);

  };

  return (
    <div>
      <p>Hello {userName}</p>
      <form className="form">
      <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Name"
          required
        /><br />
        {usernameErrorMessage !== '' ? (
          <div>
            <p className="error-text">{usernameErrorMessage}</p>
          </div>
        ):(<div></div>)}
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="email"
          required
        /><br />
        {emailErrorMessage !== '' ? (
          <div>
            <p className="error-text">{emailErrorMessage}</p>
          </div>
        ):(<div></div>)}
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
          placeholder="Message"
          required
        /><br/>
        {messageErrorMessage !== '' ? (
          <div>
            <p className="error-text">{messageErrorMessage}</p>
          </div>
        ):(<div></div>)}
           <button type="button" onClick={handleFormSubmit}>Submit</button>
        </form>
    </div>
  );
}

export default Contact;
