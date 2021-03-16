import styled from 'styled-components';

export const AddToCartWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5rem, 1fr));
  align-items: center;
  justify-items: center;
  padding: 1rem;
`;

export const Input = styled.input`
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