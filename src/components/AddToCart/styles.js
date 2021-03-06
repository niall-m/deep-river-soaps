import styled from 'styled-components';

export const AddToCartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
  padding: 1rem 0;
`;

export const Input = styled.input`
  height: 100%;
  width: 50%;
  font-size: 2rem;
  font-family: 'AlwaysHere';
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: .5rem;
  color: var(--color-secondary-light-1);
  background-color: var(--color-primary-dark-2);
  transition: all .1s;

  &:focus {
    outline: none;
    color: var(--color-secondary-light-2);
    background-color: var(--color-primary-dark-1);
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 100%;
  font-size: 1.4rem;
  font-family: 'AlwaysHere';
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