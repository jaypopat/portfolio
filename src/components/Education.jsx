import React from "react";
import styled from "styled-components";
import { Title } from "./StyledComponents";
import { BookOpen, Calendar, Award } from "lucide-react";

const EducationContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const EducationItem = styled.div`
  background: rgba(29, 45, 80, 0.7);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 8px rgba(100, 255, 218, 0.2);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(to right, #64ffda, #1d2d50);
  }
`;

const InstitutionName = styled.h3`
  color: #64ffda;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Degree = styled.h4`
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const DateRange = styled.p`
  font-style: italic;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #8892b0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Description = styled.p`
  color: #a8b2d1;
  font-size: 0.9rem;
  line-height: 1.5;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Education = () => {
  return (
    <EducationContainer>
      <Title as="h2">Education</Title>
      <EducationGrid>
        <EducationItem>
          <IconWrapper>
            <BookOpen size={24} color="#64ffda" aria-hidden="true" />
          </IconWrapper>
          <InstitutionName>
            <Award size={20} color="#64ffda" aria-hidden="true" />
            University of Galway
          </InstitutionName>
          <Degree>Bachelor of Science in Computer Science</Degree>
          <DateRange>
            <Calendar size={16} aria-hidden="true" />
            <span>2022-2026</span>
          </DateRange>
          <Description>
            Focusing on advanced algorithms, distributed systems, and blockchain
            technologies. Participating in various coding competitions and
            hackathons.
          </Description>
        </EducationItem>

        <EducationItem>
          <IconWrapper>
            <BookOpen size={24} color="#64ffda" aria-hidden="true" />
          </IconWrapper>
          <InstitutionName>
            <Award size={20} color="#64ffda" aria-hidden="true" />
            Polkadot Blockchain Academy Wave 5
          </InstitutionName>
          <Degree>Developers Track</Degree>
          <DateRange>
            <Calendar size={16} aria-hidden="true" />
            <span>May 2024 to Jun 2024</span>
          </DateRange>
          <Description>
            Intensive course on blockchain fundamentals, smart contract
            development, and decentralized applications.
          </Description>
        </EducationItem>
      </EducationGrid>
    </EducationContainer>
  );
};

export default Education;
