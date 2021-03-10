import React from 'react';
import styled from 'styled-components';
import { Layout, SEO, LocalImage } from 'components';

const ContactGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  grid-template-rows: repeat(auto-fit, minmax(min-content, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;
`;

const Contact = () => {

  return (
    <Layout>
      <SEO title="Contact" description="Contact page"/>

      <ContactGrid>
        <LocalImage src="ceo.jpg" alt="soapmaker" />
        <LocalImage src="soaps-display.jpeg" alt="soapmaker" />
        <LocalImage src="soapbasket.jpg" alt="soapmaker" />
      </ContactGrid>
    </Layout>
  );
};

export default Contact;