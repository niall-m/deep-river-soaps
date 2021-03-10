import React from 'react';
import styled from 'styled-components';
import { Layout, SEO, LocalImage, StyledLink } from 'components';

const AboutGrid = styled.div`
  grid-column: col-start 1 / col-end 8;
  
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(26rem, 1fr));
  grid-gap: 2rem;
  padding: 2rem 0;

  > p {
    font-family: "CalendasPlus";
    font-size: 1.4rem;
  }

  ${StyledLink} {
    text-decoration: none;
    font-weight: bold;
    color: currentColor;
  }
`;

const About = () => {
  const theElephants = <StyledLink to="https://www.savetheelephants.org/">Save The Elephants</StyledLink>;

  return (
    <Layout>
      <SEO title="About" description="About page"/>

      <AboutGrid>
        <LocalImage src="river.jpg" alt="Connecticut River" />
        <p>Quiet and quaint, tucked away in the woods by the water, 
          Deep River is classic Connecticut. A sense of community, respect 
          and volunteerism forms its cultural foundation; a bedrock as 
          beautiful as its brick walkways and colonial architecture. As 
          you walk through town, you pass an assortment of mom-and-pop 
          shops that are uniquely New England. Everything seems in its place, 
          except for a single statue of an elephant right outside Town Hall.
        </p>
        <p>Indeed, it may seem odd, yet this statue serves as a reminder of a 
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
        <p>It's a history from which Deep River doesn't hide. This dark past is 
          woven into school curriculums and taught to the future generations. 
          Many of the town's citizens and local companies make contributions 
          towards elephant and wildlife preservation. The last line on the 
          plaque reads, "Deep River remembers its debt to this majestic 
          creature as it looks forward to a new future as 'Queen of the 
          Valley.'"
        </p>
        <p>In keeping with our community culture, we at Deep River Soaps 
          proudly volunteer a portion of all net profits to be donated 
          to {theElephants}, the world's most successful orphan elephant 
          rescue and rehabilitation program.
        </p>
        <LocalImage src="herd-2.jpg" alt="elephant herd" />
        <LocalImage src="squad.jpg" alt="elephant herd" />
      </AboutGrid>
    </Layout>
  );
};

export default About;