import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Confira Nossa Abordagem</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/jogos.jpg'
              text='Atualmente está cada vez mais difícil o relacionamento humano.'
              label='Distanciamento'
              path='/about'
            />
            <CardItem
              src='images/mental.jpg'
              text='Ajudar o paciente conquistar sucesso naquilo que considera de valor dentro da sua história.'
              label='Saúde Mental'
              path='/about'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/jogos1.jpg'
              text='Saiba mais sobre os beneficios que os jogos trazem no nosso cotidiano.'
              label='Jogos'
              path='/about'
            />
            <CardItem
              src='images/ansiedadeSintomas.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Ansiedade'
              path='/contact'
            />
            <CardItem
              src='images/img.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Tratamento'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
