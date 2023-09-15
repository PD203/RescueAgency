import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

// Styled components for the footer
const FooterContainer = styled.div`
  display: flex;
  ${mobile({ flexDirection: 'column' })}
  background-color: #fcf5f5;
`;

const LeftFooter = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
`;

const Description = styled.p`
  margin: 20px 0;
`;



const CenterFooter = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: 'none' })}
`;

const FooterTitle = styled.h3`
  margin-bottom: 30px;
`;

const FooterList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const FooterListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const RightFooter = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: '#fff8f8' })}
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <LeftFooter>
        <Logo>Rescue Connect</Logo>
        <Description>
        Rescue Connect is your dedicated platform for connecting individuals and communities with essential disaster response agencies. Our mission is to bridge the gap between those in need and the agencies that provide life-saving services during emergencies. We strive to ensure timely communication and access to valuable resources, empowering you to respond effectively to disasters and crises.
        </Description>
        
      </LeftFooter>
      <CenterFooter>
        <FooterTitle>Useful Links</FooterTitle>
        <FooterList>
          <FooterListItem>Home</FooterListItem>
          <FooterListItem>Agencies</FooterListItem>
          <FooterListItem>Resources</FooterListItem>
          
        </FooterList>
      </CenterFooter>
      <RightFooter>
        <FooterTitle>Contact</FooterTitle>
        <ContactItem>
          
          622 Dixie Path, South Tobinchester 98336
        </ContactItem>
        <ContactItem>
         
          +1 234 56 78
        </ContactItem>
        
      </RightFooter>
    </FooterContainer>
  );
};

export default Footer;
