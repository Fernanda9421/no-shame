import React from 'react';
import Iframe from 'react-iframe';
import './mapsLocation.css';

export default function MapsLocation() {
  return (
    <Iframe
        url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3727.41673291781!2d-45.29266848562621!3d-20.895547086070685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b53e2e31a2aab1%3A0xc872c0a5c562b2ad!2sR.%20Elza%20Alvarenga%20Vilela%2C%2035%20-%20Campo%20Belo%2C%20MG%2C%2037270-000!5e0!3m2!1spt-BR!2sbr!4v1650385713947!5m2!1spt-BR!2sbr"
        className='address-location'
        width="50%"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
  )
}
