import styled from 'styled-components';

import ImgProfile1 from '../../assets/images/profile-1.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    min-height: 95vh;

    background-image: url(${ImgProfile1});
    background-position: 100% 45%;
    background-repeat: no-repeat;
    background-size: 60%;

    @media (max-width: 950px) {
      background-size: 0 0;
    }

    .hero-texts {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      margin-left: 5.7rem;

      p {
        font-weight: 500;
        font-size: 1.8rem;
        color: ${({ theme }) => theme.colors.title};

        strong {
          color: ${({ theme }) => theme.colors.primary};
        }
      }

      h1 {
        font-size: 7.2rem;
        color: ${({ theme }) => theme.colors.secondary};
        margin: 4px 0 45px;
      }

      button + button {
        margin-top: 22px;
      }

      @media (max-width: 950px) {
        h1 {
          font-size: 4rem;
        }
      }
    }
  }

  .about-me {
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      font-size: 3.6rem;
      padding: 60px 53px 0 53px;
    }

    .about-me-content {
      display: flex;
      /* flex-flow: row wrap; */
      flex-direction: row;
      justify-content: center;
      align-items: center;

      .about-me-text {
        display: flex;
        flex-direction: column;

        max-width: 722px;
        margin-left: 150px;

        p {
          font-weight: 500;
          font-size: 2.4rem;
          color: ${({ theme }) => theme.colors.title};
        }

        p + p {
          margin-top: 20px;
        }
      }

      @media (max-width: 950px) {
        flex-direction: column;

        .about-me-text {
          margin: 0 53px 0;
        }

        img {
        }
      }

      @media (max-width: 560px) {
        img {
          max-width: 400px;
        }
      }
    }
  }

  .experiences {
    display: flex;
    flex-direction: column;
    width: 100%;

    h2 {
      font-size: 3.6rem;
      padding: 60px 0 0 53px;
    }

    .card-list {
      padding: 60px 0 0 53px;

      display: flex;
      flex-flow: row wrap;
      justify-content: space-around;
      align-items: stretch;
    }
  }
`;
