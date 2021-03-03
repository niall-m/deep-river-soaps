import React from 'react';
import { Link } from 'gatsby';
import { HeaderWrapper } from './styles';
import { Logo } from './Logo';

export function Header() {
  return (
    <HeaderWrapper>
      <div>
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
    </HeaderWrapper>
  );
}