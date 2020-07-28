import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a style={{textDecoration:"none", fontSize:"25px", color:"var(--primary)", fontWeight:"bolder"}} href="https://github.com/LucasBolela">
        Lucas Bolela 
      </a>
      <p>
        Criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
