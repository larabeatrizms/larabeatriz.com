import styled from 'styled-components';

export const Container = styled.div`
  .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;

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
    }
  }
`;
