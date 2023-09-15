import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { sampleAgencies } from "../data";

// Define your styled components
const PageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding-top: 60px;
`;

const Header = styled.header`
  background-color: #008080;
  color: white;
  text-align: center;
  padding: 20px;
`;

const Main = styled.main`
  padding: 20px;
`;

const FilterSection = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const FilterHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const FilterForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

const FilterLabel = styled.label`
  font-size: 16px;
`;

const FilterSelect = styled.select`
  font-size: 16px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const FilterButton = styled.button`
  background-color: teal;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  /* border-radius: 5px; */
  cursor: pointer;
`;

const AgencyFilter = styled.section`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const AgenciesContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const AgencyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: -10px; /* To compensate for card margins */
`;

const AgencyCardContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px;
  width: calc(33.33% - 20px); /* Three cards in one row */
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
`;



function Agencies() {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Header>
          <h1>Rescue Agencies</h1>
        </Header>
        <Main>
          <AgencyFilter>
            <FilterSection>
              <FilterHeader>Filter Agencies</FilterHeader>
              <FilterForm>
                <FilterLabel htmlFor="location">Location:</FilterLabel>
                <FilterSelect id="location">
                  <option value="all">All</option>
                  <option value="city1">City 1</option>
                  <option value="city2">City 2</option>
                  {/* Add more location options as needed */}
                </FilterSelect>

                <FilterLabel htmlFor="services">Services:</FilterLabel>
                <FilterSelect id="services">
                  <option value="all">All</option>
                  <option value="service1">Service 1</option>
                  <option value="service2">Service 2</option>
                  {/* Add more service options as needed */}
                </FilterSelect>

                <FilterButton type="submit">Apply Filters</FilterButton>
              </FilterForm>
            </FilterSection>
          </AgencyFilter>
          <AgenciesContainer>
            <AgencyList>
              {sampleAgencies.map((agency, index) => (
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
        </Main>
      </PageContainer>
      <Footer />
    </>
  );
}

export default Agencies;
