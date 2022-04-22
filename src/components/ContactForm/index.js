import React, { useState } from 'react';
import Button from '../Button';
import './index.css';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = ({ target }) => {
    const { value } = target;
    setName(value);
  };

  const handleEmailChange = ({ target }) => {
    const { value } = target;
    setEmail(value);
  };

  const handleMessageChange = ({ target }) => {
    const { value } = target;
    setMessage(value);
  };

  const handleButtonClick = () => {
    // setName('');
    // setEmail('');
    // setMessage('');
    console.log('submitted');
  };

  return (
    <form
      id="contact-form"
      action="https://formsubmit.io/send/tainnaps@gmail.com"
      method="POST"
    >
      <input
        className="form-fields"
        name="name"
        type="text"
        id="name"
        placeholder="Name"
        value={ name }
        onChange={ handleNameChange }
      />
      <input
        className="form-fields"
        name="email"
        type="email"
        id="email"
        placeholder="Email"
        value={ email }
        onChange={ handleEmailChange }
      />
      <textarea
        className="form-fields"
        name="message"
        id="message"
        placeholder="Message"
        value={ message }
        onChange={ handleMessageChange }
        rows="5"
      />
      <Button
        type="submit"
        handleClick={ handleButtonClick }
        content="Submit"
      />
    </form>
  );
}

export default ContactForm;
