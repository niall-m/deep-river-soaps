import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 8rem 1fr;
`;

export const Grid = styled.main`
  min-height: calc(100vh - 8rem);
  display: grid;
  grid-template-columns: 
    [full-start] minmax(4vw, 1fr)
    repeat(8, [col-start] minmax(min-content, 20rem) [col-end]) 
    minmax(4vw, 1fr) [full-end];
  align-items: center;
  background-color: var(--color-secondary-light-1);
`;