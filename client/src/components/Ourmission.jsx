import styled from "styled-components";

const img =
  "https://www.stlouis-mo.gov/government/departments/public-safety/emergency-management/images/EMcycle_large_1.jpg";

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
`;

const MissionSection = styled.section`
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const MissionHeading = styled.h3`
  font-size: 28px;
  color: #007bff;
  margin-bottom: 10px;
`;

const MissionDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const MissionImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-top: 20px;
`;

const Products = () => {
  return (
    <Container>
      <MissionSection>
        <MissionHeading>Our Mission</MissionHeading>
        <MissionDescription>
          Our mission is to facilitate communication between users and disaster
          response agencies, ensuring timely assistance and valuable resources
          reach those in need during emergencies.
        </MissionDescription>
        <MissionImage src={img} alt="Mission Image" />
      </MissionSection>
    </Container>
  );
};

export default Products;
