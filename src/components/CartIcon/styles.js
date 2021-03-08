import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const CartWrapper = styled(StyledLink).attrs(() => ({
  to: '/cart'
}))`

  display: flex;
  align-items: center;
  
  > svg { 
    height: 3rem;
    width: 3rem;

    @media only screen and (max-width: 50em) {
      height: 2rem;
      width: 2rem;
    }
  }
`;