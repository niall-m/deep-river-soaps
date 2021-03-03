import React from 'react';
import Img from 'gatsby-image';
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
      <Img fluid={file.childImageSharp.fluid} />
    </LogoWrapper>
  );
}