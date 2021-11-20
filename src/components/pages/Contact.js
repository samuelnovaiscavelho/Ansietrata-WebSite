import React from 'react';
//import '../../App.css';
import '../styles/Contact.css';
import Imagem1 from './imgcontact/ansiedade-quaren.jpg';


function Contact() {
 
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Imagem1})` }}
      ></div>
      <div className="rightSide">
        <h1>Nosso contato</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome Completo</label>
          <input name="name" placeholder="Digite nome completo" type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Digite seu e-mail" type="email" />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows="6"
            placeholder="Digite sua mensagem"
            name="message"
            required
          ></textarea>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;