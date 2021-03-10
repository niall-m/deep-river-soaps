import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { TextWrapper } from './styles';
import styled from 'styled-components';

// const StyledBackground = styled(BackgroundImage)`
//   &::before,
//   &::after {
//     border-radius: 1rem;
//   }
// `;

export const SplashBackground = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: {eq: "map.png"}) {
        childImageSharp {
          fluid(maxWidth: 1200) {
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
        // borderRadius: "1rem", // doesn't work
      }}
    >
      {/* <TextWrapper>
        <h1>Deep</h1>
        <h1>River</h1>
        <h1>Soaps</h1>
      </TextWrapper> */}
    </BackgroundImage>
  );
};