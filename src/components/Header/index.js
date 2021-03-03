import React from 'react';
import { HeaderWrapper } from './styles';
import { Logo } from '../Logo';
import { Cart } from '../Cart';
import { StyledLink } from '../StyledLink';

export function Header() {
  return (
    <HeaderWrapper>
      <Logo />

      <ul>
        <li><StyledLink to={"/about"}>About</StyledLink></li>
        <li><StyledLink to={"/soaps"}>Soaps</StyledLink></li>
        <li><StyledLink to={"/contact"}>Contact</StyledLink></li>
        <li><Cart /></li>
      </ul>
    </HeaderWrapper>
  );
}