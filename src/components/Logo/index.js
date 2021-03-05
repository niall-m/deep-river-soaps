import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { LogoWrapper } from './styles';

export function Logo() {
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <LogoWrapper>
      <Image fluid={file.childImageSharp.fluid} />
    </LogoWrapper>
  );
}