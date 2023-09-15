import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { reportingData } from "../data";

// Sample images for disaster types (replace with actual image URLs)


// Styled components for improved styling
const DisasterPageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  
`;

const DisasterHeader = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

const DisasterCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  display: flex;
  align-items: flex-start; /* Align items at the start (top) */
  background-color: #f5fbfd;
`;

const DisasterImage = styled.img`
  max-width: 200px; /* Adjust image width as needed */
  height: auto;
  margin-right: 20px; /* Add spacing between image and content */
`;

const DisasterContent = styled.div`
  flex: 1; /* Allow content to take up remaining space */
`;

const DisasterTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const DisasterDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #535353;
`;

const DisasterResponse = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: teal;
`;



function TypesOfDisaster() {
  return (
    <>
      <Navbar />
      <DisasterPageContainer>
        <DisasterHeader>Types of Disasters</DisasterHeader>
        {reportingData.map((disaster, index) => (
          <DisasterCard key={index}>
            <DisasterImage
              src={disaster.image}
              alt={`Image of ${disaster.title}`}
            />
            <DisasterContent>
              <DisasterTitle>{disaster.title}</DisasterTitle>
              <DisasterDescription>{disaster.date}</DisasterDescription>
              <DisasterResponse> {disaster.content}</DisasterResponse>
            </DisasterContent>
          </DisasterCard>
        ))}
      </DisasterPageContainer>
      <Footer />
    </>
  );
}

export default TypesOfDisaster;
