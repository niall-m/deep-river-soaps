import React from 'react';
import styled from 'styled-components';
import { Layout, SEO, Button } from 'components';

const ContactGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  justify-items: center;
  align-items: center;
  text-align: center;

  padding: 2rem 0;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  p {
    font-family: "CalendasPlus";
    font-size: 1.2rem;
  }

  h2 {
    grid-column: 1 / -1;
    font-size: 4rem;
  }

  h4 {
    padding: 1rem;
  }

  form {
    display: grid;
    grid-gap: 1rem;

    label {
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      height: 3rem;
      font-size: 1rem;
      text-align: center;
      border: none;
      border-radius: .5rem;
      color: var(--color-secondary-light-1);
      background-color: var(--color-primary-dark-2);
      transition: all .1s;

      &:focus {
        outline: none;
        color: var(--color-secondary-light-2);
        background-color: var(--color-primary-dark-1);
      }
    }

    textarea {
      resize: vertical;
    }

    button { 
      width: 50%;
      justify-self: center;
    }
  }
`;

const Contact = () => {
  return (
    <Layout>
      <SEO title="Contact" description="Contact page"/>

      <ContactGrid>
        <h2>Contact Us</h2>
        <div>
          <h4>Inquiries? Send us a note!</h4>
          <form 
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            netlify
          >
            <input type="hidden" name="form-name" value="contact" />
            <input type="hidden" name="bot-field" />
            <label>
              Email
              <input type="email" name="email" />
            </label>
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Message
              <textarea name="message" />
            </label>
            <Button type="submit">Send</Button>
          </form>
        </div>
        <div>
          <h3>Ordering Information:</h3>
          <p>We charge a flat shipping rate of $8 on all orders.</p>
          <p>Typically arrives in 5-8 business days.</p>
          <hr />
          <h3>Bulk orders:</h3>
          <p>
            Please keep in mind that we may need some advance notice to 
            accommodate large orders depending on the quantity, as our 
            soaps take 4-6 weeks to cure, sometimes longer depending on 
            the recipe. Please reach out and we will do our best to accommodate!
          </p>
        </div>
      </ContactGrid>
    </Layout>
  );
};

export default Contact;