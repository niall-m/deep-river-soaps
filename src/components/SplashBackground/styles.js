import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const IndexLinkWrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${StyledLink} {
    font-size: 2.2rem;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    color: var(--color-secondary-light-1);
    background-color: var(--color-primary-dark-2);
    padding: 1rem;
    border-radius: 1rem;
    transition: all .3s;

    &:hover {
      color: var(--color-secondary-light-2);
      background-color: var(--color-primary-dark-1);
      transform: scale(1.1);
    }
  }

  & div {
    height: 30%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;