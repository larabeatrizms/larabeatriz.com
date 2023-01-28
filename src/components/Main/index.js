import React from 'react';

import Button from '../Button';
import CardExperience from '../CardExperience';

import ImgProfile2 from '../../assets/images/profile-2.png';

import { Container } from './styles';

const Main = ({ children }) => {
  return (
    <Container>
      <div className="hero">
        <div className="hero-texts">
          <p>
            Hi, my name is <strong>Lara Beatriz</strong> and I'm a
          </p>
          <h1>
            Software <br /> Engineer
          </h1>
          <Button><a href="https://github.com/larabeatrizms">My projects</a></Button>
          {/* <Button variant="outlined" size="medium">
            Blog e artigos
          </Button> */}
        </div>
      </div>

      <div className="about-me">
        <h2>About me</h2>
        <div className="about-me-content">
          <img src={ImgProfile2} alt="Lara Beatriz" />
          <div className="about-me-text">
            <p>
              I build cool applications with JavaScript and Typescript. Lately,
              I'm making many useful things with ReactJS, React Native, Go and Node.js.
              Passionate about technology and Graduated from the University of
              Rio Grande do Norte in computer engineering.
            </p>
            <p>
              Currently, I am working at <a href='https://smartenvios.com/'>Smartenvios</a> as a Lead Backend Engineer.
              If you would like to discuss these things, you can send me a message
              on <a href='https://twitter.com/larabeatrizms'>Twitter</a>. Looking forward to connecting with you 👋🏻.
            </p>
          </div>
        </div>
      </div>

      {/* <div className="experiences">
        <h2>Experiences</h2>
        <div className="card-list">
          <CardExperience />
          <CardExperience />
          <CardExperience />
        </div>
      </div> */}
    </Container>
  );
};

export default Main;
