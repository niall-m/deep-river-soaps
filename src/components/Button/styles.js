import styled from 'styled-components';

export const Button = styled.button`
  font-size: 1.4rem;
  font-family: 'AlwaysHere';
  letter-spacing: .1rem;
  font-weight: bold;
  border-radius: .5rem;
  color: var(--color-secondary-light-1);
  background-color: var(--color-primary-dark-2);
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: all .1s;

  &:hover {
    color: var(--color-secondary-light-2);
    background-color: var(--color-primary-dark-1);
  }

  &:active {
    transform: scale(.9);
  }

  &:focus {
    outline: none;
  }
`;