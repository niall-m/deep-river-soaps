import React from 'react';
import styled from 'styled-components';
import { Layout, SEO, LocalImage } from 'components';

const AboutGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 37.5em) {
    grid-template-columns: 1fr;
  }

  h2 {
    grid-column: 1 / -1;
    justify-self: center;
  }

  > p {
    font-family: "CalendasPlus";
    font-size: 1.3rem;

    &:last-child {
      grid-column: 1 / -1;
    }

    > a {
      text-decoration: none;
      font-weight: bold;
      color: currentColor;
    }
  }
`;

const About = () => {
  const saveTheElephants = <a href="https://www.savetheelephants.org/">
    Save The Elephants
  </a>;

  return (
    <Layout>
      <SEO title="About" description="About page"/>

      <AboutGrid>
        <h2>Handmade @ Home</h2>
        <LocalImage src="ceo.jpg" alt="soapmaker" />
        <div>
          <p>What started as a hobby became an obsession: to make the best soap. For myself! I was tired of dry, irritable skin, so I decided to fix it. Over the years spent searching for top quality ingredients, experimenting with ratios, cutting countless batches and waiting for them to cure, I'm proud to say we've perfected a few favorite concoctions. Every bar of soap is crafted personally by me, the C.E.O.. I get a kick out of saying that, because it's really just me and sometimes some helpers.</p>
        </div>
        <LocalImage src="soaps-display.jpeg" alt="soapmaker" />
        <LocalImage src="soapbasket.jpg" alt="soapmaker" />


        <h2>A Story of Deep River</h2>
        <p>
          Quiet and quaint, tucked away in the woods by the water, 
          Deep River is classic Connecticut. A sense of community, respect 
          and volunteerism forms its cultural foundation; a bedrock as 
          beautiful as its brick walkways and colonial architecture. As 
          you walk through town, you pass an assortment of mom-and-pop 
          shops that are uniquely New England. Everything seems in its place, 
          except for a single statue of an elephant right outside Town Hall.
        </p>
        <p>
          Indeed, it may seem odd, yet this statue serves as a reminder of a 
          history more sordid than splendid. In the 19th & 20th centuries, the 
          U.S. was the world's biggest buyer of ivory. The bulk of that trade 
          went through the lower Connecticut River Valley town of Deep River 
          and the neighboring village of Ivoryton, in Essex. Up to 100,000 
          elephants were killed a year. Their carcasses were left to rot in 
          the African sun while the tusks were shipped on steamboats to be 
          cut into combs, piano keys, and billiard balls. Deep River was 
          dubbed the "Queen of the Valley", due to the prosperity  of the 
          ivory industry.
        </p>
        <LocalImage src="statue.jpg" alt="elephant statue" />
        <LocalImage src="herd-1.jpg" alt="elephant herd" />
        <p>
          It's a history from which Deep River doesn't hide. This dark past is 
          woven into school curriculums and taught to the future generations. 
          Many of the town's citizens and local companies make contributions 
          towards elephant and wildlife preservation. The last line on the 
          plaque reads, "Deep River remembers its debt to this majestic 
          creature as it looks forward to a new future as 'Queen of the 
          Valley.'"
        </p>
        <LocalImage src="herd-2.jpg" alt="elephant herd" />
        <LocalImage src="squad.jpg" alt="elephant herd" />
        <p>
          To honor the local community culture, and the powerful pachyderm that 
          helped to create it, we chose the elephant as our mascot and 
          donate a portion of all net profits to {saveTheElephants}, the world's 
          most successful orphan elephant rescue and rehabilitation program. 
          Photos taken by self on a South African safari.
        </p>
      </AboutGrid>
    </Layout>
  );
};

export default About;