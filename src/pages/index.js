import React from 'react';

import ImgProfile1 from '../assets/images/profile-1.png';
import Layout from '../components/Layout';
import Button from '../components/Button';
import SEO from '../components/seo';

import Main from '../components/Main';

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Main>
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
      </Main>
    </Layout>
  );
};

export default IndexPage;
