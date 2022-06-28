import React from 'react';
import ContactForm from '../../components/ContactForm';
import Title from '../../components/Title';
import './index.css';

function Contact() {
  return (
    <main className="contact-main">
      <section className="contact-container">
        <Title title="Contact" />
        <ContactForm />
      </section>
    </main>
  );
}

export default Contact;
