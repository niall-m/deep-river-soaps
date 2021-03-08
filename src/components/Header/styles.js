import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const HeaderWrapper = styled.header`
  background-color: var(--color-primary-dark-2);
  padding-left: 3vw;

  display: grid;
  grid-template-columns: min-content 1fr;
  grid-column-gap: 1rem;
  align-items: center;

  > ul {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(6rem, 1fr));
    align-items: center;
    justify-items: center;

    ${StyledLink} {
      color: var(--color-secondary-light-1);
      font-size: 2.2rem;
      text-decoration: none;
      text-transform: uppercase;
      padding: 1rem;
      border-radius: 1rem;
      transition: all .3s;

      &:hover {
        color: var(--color-secondary-light-2);
        background-color: var(--color-primary-dark-1);
        transform: scale(1.1);
      }

      @media only screen and (max-width: 50em) {
        font-size: 1.4rem;
        padding: .5rem;
      }
    }
  }
`;