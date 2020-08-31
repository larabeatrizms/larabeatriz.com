import React from 'react';

import Button from '../Button';
import CardExperience from '../CardExperience';

import ImgProfile2 from '../../assets/images/profile-2.png';
import ImgProfile1 from '../../assets/images/profile-1.png';

import { Container } from './styles';

const Main = ({ children }) => {
  return (
    <Container>
      <div className="hero">
        <div className="hero-texts">
          <p>
            Olá, meu nome é <strong>Lara Beatriz</strong> e sou
          </p>
          <h1>
            Desenvolvedora <br /> Fullstack
          </h1>
          <Button>Conhecer meus projetos</Button>
          <Button variant="outlined" size="medium">
            Blog e artigos
          </Button>
        </div>
      </div>

      <div className="about-me">
        <h2>Sobre mim</h2>
        <div className="about-me-content">
          <img src={ImgProfile2} alt="Lara Beatriz" />
          <div className="about-me-text">
            <p>
              Projeto e construo várias aplicações interessantes utilizando as
              tecnologias que eu acho mais importantes (Nodejs, ReactJS e React
              Native) e dessa forma englobo várias ferramentas que serão úteis
              no dia a dia de um desenvolvedor. Atualmente, trabalho como
              desenvolvedora fullstack na
              <a href="https://smartenvios.com/"> SmartEnvios</a>.
            </p>
            <p>
              Sou estudante de Engenharia da Computação(nono período) na
              Universidade Federal do Rio Grande do Norte(UFRN), graduada em
              Ciência e Tecnologia na UFRN e embaixadora da{' '}
              <a href="rocketseat.com.br">Rocketseat</a>. Como Soft Skills tenho
              adaptabilidade e curiosidade, comunicação assertiva, entre outros.
            </p>
          </div>
        </div>
      </div>

      <div className="experiences">
        <h2>Experiências</h2>
        <div className="card-list">
          <CardExperience />
          <CardExperience />
          <CardExperience />
        </div>
      </div>
    </Container>
  );
};

export default Main;
