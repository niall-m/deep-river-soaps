import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 10rem 1fr;
`;

export const Grid = styled.main`
  min-height: calc(100vh - 10rem);
  display: grid;
  grid-template-columns: 
    [full-start] minmax(4vw, 1fr)
    repeat(8, [col-start] minmax(min-content, 20rem) [col-end]) 
    minmax(4vw, 1fr) [full-end];
  grid-row-gap: 1rem;
  align-items: center;

  color: var(--color-primary-dark-2);
  background-color: var(--color-grey-light);
`;