import React from 'react';

import ImgProfile1 from '../assets/images/profile-1.png';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SEO from '../components/seo';

import { Container } from './index-styles';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Container>
        <div className="hero">
          <div className="hero-texts">
            <p>
              Olá, meu nome é <strong>Lara Beatriz</strong> e sou
            </p>
            <h1>Desenvolvedora Fullstack</h1>
            <Button>Conhecer meus projetos</Button>
          </div>

          <img src={ImgProfile1} alt="Lara Beatriz" />
        </div>
      </Container>
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  );
};

export default IndexPage;
