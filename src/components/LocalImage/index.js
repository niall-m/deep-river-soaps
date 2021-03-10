import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

export const LocalImage = ({ src, ...rest }) => {
  const { images } = useStaticQuery(graphql`
    query {
      images: allFile(
        filter: { sourceInstanceName: {regex: "/images/"} }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxHeight: 800, quality: 100) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `);

  const match = React.useMemo(
    () => images.edges.find(({ node }) => src === node.relativePath),
    [images, src]
  );

  if (!match) return null;

  const { node: { childImageSharp } = {} } = match;
  
  return <Image fluid={childImageSharp.fluid} {...rest} />;
};