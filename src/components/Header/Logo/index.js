import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

export function Logo() {
  const data = useStaticQuery(graphql`
    {
      file(relativePath: {eq: "logo.png"}) {
        childImageSharp {
          fixed(width: 160) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  `);
  console.log('logo data', data);
  return <Img fixed={data.file.childImageSharp.fixed} />;
}