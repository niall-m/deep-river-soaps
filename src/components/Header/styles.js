import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const HeaderWrapper = styled.header`
  padding: 0 2rem;
  background-color: var(--color-primary-dark-2);

  display: flex;
  align-items: center;
  justify-content: space-between;

  > ul {
    display: grid;
    grid-template-columns: repeat(4, min-content);
    grid-column-gap: 2rem;
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
        transform: scale(1.2);
      }
    }
  }
`;