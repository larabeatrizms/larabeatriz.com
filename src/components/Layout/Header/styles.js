import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  font-size: 24px;
  background-color: #6a38b2;
  margin-bottom: 1rem;
  padding: 1rem 1.5rem 1rem 1.5rem;

  /* background-color: #7f3ea2;
  background-image: -webkit-linear-gradient(62deg, #7f3ea2 0%, #3b2385 100%);
  background-image: -moz-linear-gradient(62deg, #7f3ea2 0%, #3b2385 100%);
  background-image: -o-linear-gradient(62deg, #7f3ea2 0%, #3b2385 100%);
  background-image: linear-gradient(62deg, #7f3ea2 0%, #3b2385 100%); */

  -webkit-box-shadow: 10px 10px 60px -29px rgba(0, 0, 0, 0.43);
  -moz-box-shadow: 10px 10px 60px -29px rgba(0, 0, 0, 0.43);
  box-shadow: 10px 10px 60px -29px rgba(0, 0, 0, 0.43);
`;
