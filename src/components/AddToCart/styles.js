import styled from 'styled-components';

export const AddToCartWrapper = styled.div`
  > form { 
    display: flex;
    justify-content: space-evenly;
    padding: 1rem;
  }
`;

export const Input = styled.input`
  width: 20%;
  font-size: 2rem;
  font-family: 'AlwaysHere';
  font-weight: bold;
  text-align: center;
  border: none;
  border-radius: .5rem;
  color: currentColor;
  background-color: var(--color-tertiary-light-2);
  transition: all .1s;

  &:focus {
    outline: none;
    box-shadow: 1rem 1rem 1rem rgba(0,0,0,.2);
  }
`;

export const Button = styled.button`
  width: 50%;
  font-size: 1.4rem;
  font-family: 'AlwaysHere';
  font-weight: bold;
  border-radius: .5rem;
  color: currentColor;
  background-color: var(--color-tertiary-light-2);
  border: none;
  padding: 1rem;
  cursor: pointer;
  transition: all .1s;

  &:hover {
    box-shadow: 1rem 1rem 1rem rgba(0,0,0,.2);
  }

  &:active {
    box-shadow: .5rem .5rem .5rem rgba(0,0,0,.3);
  }

  &:focus {
    outline: none;
  }
`;