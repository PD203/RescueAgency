import styled from "styled-components";
import { categories } from "../data";
import { mobile } from "../responsive";

import { sampleAgencies } from "../data";


const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
  ${mobile({ padding: "0px", flexDirection:"column" })}
`;

const AgenciesContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const AgencyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const AgencyCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 10px;
  width: calc(33.33% - 20px); 
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const AgencyName = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
`;

const AgencyLocation = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const EmergencyNumber = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
`;

const AgencyImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  margin: 10px;
`;

const SectionHeading = styled.h2`
font-size: 24px;
margin-bottom: 20px;
text-align: center;
padding-top: 40px
`;


const Categories = () => {

  const limitedAgencies = sampleAgencies.slice(0, 3);

  return (
    <><SectionHeading>Discover Agencies</SectionHeading>
    <Container>
      
    <AgenciesContainer>
      <AgencyList>
        {limitedAgencies.map((agency, index) => (
          <AgencyCardContainer key={index}>
            <AgencyImage
              src={agency.imageUrl}
              alt={`Image of ${agency.name}`}
            />
            <AgencyName>{agency.name}</AgencyName>
            <AgencyLocation>Location: {agency.location}</AgencyLocation>
            <EmergencyNumber>
              Emergency Number: {agency.emergencyNumber}
            </EmergencyNumber>
          </AgencyCardContainer>
        ))}
      </AgencyList>
    </AgenciesContainer>
  </Container>
  </>
  );
};

export default Categories;