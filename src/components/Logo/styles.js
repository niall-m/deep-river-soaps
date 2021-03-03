import styled from 'styled-components';
import { StyledLink } from '../StyledLink';

export const LogoWrapper = styled(StyledLink).attrs(() => ({
  to: '/'
}))`
  min-width: 5rem;
  width: 8rem;
  transition: transform .2s;

  &:hover {
    transform: scale(1.1);
  }
`;