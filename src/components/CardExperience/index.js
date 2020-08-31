import React from 'react';

import { Container } from './styles';

const CardExperience = ({ children, ...rest }) => {
  console.log(rest);
  return (
    <Container>
      <span className="experience-time">jun 2019 - out 2019</span>
      <h3 className="title">Desenvolvedor Fullstack</h3>
      <p className="description">
        Projeto da CAPES em parceria com a Universidade Federal do Rio Grande do
        Norte para desenvolvimento de um sistema pedagógico para professores e
        alunos. Nesse projeto, utilizam-se as tecnologias: NodeJS, ReactJs e
        para banco de dados MongoDB. Para o desenvolvimento ágil do projeto, foi
        implantado a metodologia SCRUM.
      </p>
    </Container>
  );
};

export default CardExperience;
