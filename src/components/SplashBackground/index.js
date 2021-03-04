import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { TextWrapper } from './styles';

export const SplashBackground = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "deeprivermap.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      fluid={file.childImageSharp.fluid}
      style={{ 
        height: "100%",
        width: "100%",
        gridColumn: "full-start / full-end",
      }}
    >
      <TextWrapper>
        <h1>Deep</h1>
        <h1>River</h1>
        <h1>Soaps</h1>
      </TextWrapper>
    </BackgroundImage>
  );
};