import styled from 'styled-components';

export const Title = styled.h2`
  grid-column: full-start / full-end;
  justify-self: center;
  text-align: center;

  color: var(--color-primary-dark-2);
`;

export const ImgWrapper = styled.div`
  grid-column: col-start 4 / col-end 8;

  > div {
    border-radius: 2rem;
    box-shadow: 1rem 1rem 2rem rgba(0,0,0, .2);
  }

  @media only screen and (max-width: 50em) {
    grid-column: col-start 1 / col-end 8;

    order: 1;
  }
`;

export const LeftColumn = styled.div`
  grid-column: col-start 1 / col-end 3;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  padding: 1rem;

  p { 
    text-align: center;
    padding: 1rem;
  }

  @media only screen and (max-width: 50em) {
    grid-column: col-start 1 / col-end 8;

    order: 2;
  }
`;

export const Price = styled.div`
  text-align: center;
  font-size: 2.2rem;
  font-weight: bold;
  letter-spacing: .1rem;
`;
