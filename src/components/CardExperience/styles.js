import styled, { css } from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  width: 100%;
  max-width: 468px;

  display: flex;
  flex-direction: column;

  border: solid 1px ${({ theme }) => theme.colors.cardHomeBorder};
  border-radius: 3px;
  padding: 16px 31px;
  margin-bottom: 45px;

  .experience-time {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1.4rem;
  }

  .title {
    color: ${({ theme }) => theme.colors.cardHomeTittle};
    font-size: 1.8rem;
    margin: 5px 0 15px;
  }

  .description {
    color: ${({ theme }) => theme.colors.cardHomeDescription};
    font-size: 1.4rem;
  }

  @media (max-width: 560px) {
    margin-right: 53px;
  }
`;
