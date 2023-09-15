import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


// Styled components for improved styling
const ResourcesPageContainer = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  margin-top: 60px;
  background-color: #f5fbfd;
`;

const ResourcesHeader = styled.h1`
  background-color: teal;
  color: white;
  text-align: center;
  padding: 20px;
`;

const ResourceRequestForm = styled.form`
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 20px;
  background-color: #fff;
`;

const FormLabel = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
  color: #555;
`;

const FormInput = styled.input`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%;
  
  &:focus {
    border-color: none; 
    outline: none; 
  }
`;

const FormTextarea = styled.textarea`
  font-size: 16px;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  resize: vertical;
  width: 100%;

  &:focus {
    border-color: none; 
    outline: none; 
  }
`;

const FormSubmitButton = styled.button`
  font-size: 18px;
  padding: 10px 20px;
  background-color: teal;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #006161;
  }
`;

function ResourcesNeeded() {

  const [resourceType, setResourceType] = useState('');
  const [resourceDescription, setResourceDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log('Resource Type:', resourceType);
    console.log('Resource Description:', resourceDescription);
  };

  return (
    <>
    <Navbar />
    <ResourcesPageContainer>
      <ResourcesHeader>Resources Needed</ResourcesHeader>
      <ResourceRequestForm onSubmit={handleSubmit}>
        <FormLabel htmlFor="resourceType">Resource Type:</FormLabel>
        <FormInput
          type="text"
          id="resourceType"
          value={resourceType}
          onChange={(e) => setResourceType(e.target.value)}
          required
        />
        <FormLabel htmlFor="resourceDescription">Resource Description:</FormLabel>
        <FormTextarea
          id="resourceDescription"
          value={resourceDescription}
          onChange={(e) => setResourceDescription(e.target.value)}
          rows="4"
          required
        />
        <FormSubmitButton type="submit">Submit Request</FormSubmitButton>
      </ResourceRequestForm>
    </ResourcesPageContainer>
    <Footer />
    </>
  );
}

export default ResourcesNeeded;
