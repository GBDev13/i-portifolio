import styled from 'styled-components';

export const Container = styled.div`
     width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10rem;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.primary};
    font-size: 3.5rem;
    font-family: 'Poiret One', cursiva;
  }
  h2 {
    color: ${({ theme }) => theme.secondary};
    font-weight: 300;
    font-size: 2rem;
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 500px) {
    h1 {
      font-size: 1.8rem;
    }
    h2 {
      font-size: 1.2rem;
    }
  }
`;
