import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { IndexLinkWrapper } from './styles';
import { StyledLink } from 'components';

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
      }}
    >
      <IndexLinkWrapper>
        <div>
          <h4>currently whipping up new batches!</h4>
          <p>be back soon...</p>
        </div>
        {/* <StyledLink to={'/soaps'}>Shop Now</StyledLink> */}
      </IndexLinkWrapper>
    </BackgroundImage>
  );
};