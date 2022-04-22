import React from 'react';
import ContactForm from '../../components/ContactForm';
import Icon from '../../components/Icon';
import Title from '../../components/Title';
import './index.css';

function Contact() {
  return (
    <main className="contact-main">
      <section className="contact-container">
        <section className="contact-card">
          <Title title="Contact" />
          <section className="contact-info">
            <h3>Want to contact me?</h3>
            <p>Please, choose some of the channels below.</p>
            <section className="contact-icons">
              <Icon
                href="https://t.me/tainnaps"
                className="fa-brands fa-telegram"
              />
              <Icon
                href="#contact-form-section"
                blankTarget={ false }
                className="fa-solid fa-envelope"
              />
              <Icon
                href="https://wa.me/5571991360512"
                className="fa-brands fa-whatsapp"
              />
            </section>
          </section>
        </section>
      </section>
      <section id="contact-form-section">
        <Title title="Email" />
        <ContactForm />
      </section>
    </main>
  );
}

export default Contact;
