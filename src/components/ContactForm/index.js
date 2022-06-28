import React, { useState } from 'react';
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

  return (
    <form
      id="form"
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
        required
        onChange={ handleNameChange }
      />
      <input
        className="form-fields"
        name="email"
        type="email"
        id="email"
        placeholder="Email"
        value={ email }
        required
        onChange={ handleEmailChange }
      />
      <textarea
        className="form-fields"
        name="message"
        id="message"
        placeholder="Message"
        value={ message }
        required
        onChange={ handleMessageChange }
        rows="5"
      />
      <button
        type="submit"
        className="custom-button"
      >
        Send message
      </button>
    </form>
  );
}

export default ContactForm;
