import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: 8rem 1fr;
  grid-template-columns: 
  [full-start] minmax(5vw, 1fr) 
  [center-start] repeat(8, minmax(min-content, 14rem)) [center-end] 
  minmax(5vw, 1fr) [full-end];

  main {
    grid-column: center-start / center-end;
  }
`;