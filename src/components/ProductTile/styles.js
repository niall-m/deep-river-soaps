import styled from 'styled-components';

export const ProductTileWrapper = styled.div`
  border-radius: 2rem;
  transition: all .2s;

  &:hover {
    box-shadow: 1rem 1rem 1rem rgba(0,0,0,.2);
    transform: translateY(-1rem);
  }
`;

export const Details = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;

  > p {
    font-size: 2.4rem;
    font-weight: bold;
  }
`;
