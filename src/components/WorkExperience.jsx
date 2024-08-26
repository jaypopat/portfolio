import React from "react";
import styled from "styled-components";
import { Title, Description } from "./StyledComponents";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

const ExperienceContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ExperienceList = styled.ul`
  list-style: none;
  padding: 0;
  position: relative;
`;

const ExperienceItem = styled.li`
  margin-bottom: 3rem;
  position: relative;
  padding-left: 3rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: linear-gradient(to bottom, #64ffda, transparent);
  }

  &:last-child::before {
    background: #64ffda;
  }
`;

const ExperienceContent = styled.div`
  background: rgba(29, 45, 80, 0.7);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 6px 8px rgba(100, 255, 218, 0.2);
  }
`;

const CompanyName = styled.h3`
  color: #64ffda;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
`;

const JobTitle = styled.h4`
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const DateRange = styled.p`
  font-style: italic;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #8892b0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: -1rem;
  top: 0;
  background: #0a192f;
  border: 2px solid #64ffda;
  border-radius: 50%;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled(Description)`
  font-size: 0.9rem;
  line-height: 1.5;
`;

const WorkExperience = () => {
  return (
    <ExperienceContainer>
      <Title as="h2">Work Experience</Title>
      <ExperienceList>
        <ExperienceItem>
          <IconWrapper>
            <Briefcase size={24} color="#64ffda" aria-hidden="true" />
          </IconWrapper>
          <ExperienceContent>
            <CompanyName>
              Unit Network
              <ChevronRight
                size={16}
                color="#64ffda"
                style={{ marginLeft: "0.5rem" }}
              />
            </CompanyName>
            <JobTitle>Blockchain Engineer - Trainee</JobTitle>
            <DateRange>
              <Calendar size={16} aria-hidden="true" />
              <span>July 2024 to Present</span>
            </DateRange>
            <StyledText>
              Worked on developing smart contracts using Rust for a
              decentralized finance platform. Implemented and tested various
              features using the Substrate framework.
            </StyledText>
          </ExperienceContent>
        </ExperienceItem>

        <ExperienceItem>
          <IconWrapper>
            <Briefcase size={24} color="#64ffda" aria-hidden="true" />
          </IconWrapper>
          <ExperienceContent>
            <CompanyName>
              Cisco
              <ChevronRight
                size={16}
                color="#64ffda"
                style={{ marginLeft: "0.5rem" }}
              />
            </CompanyName>
            <JobTitle>Software Developer Intern</JobTitle>
            <DateRange>
              <Calendar size={16} aria-hidden="true" />
              <span>June 2024 - June 2024</span>
            </DateRange>
            <StyledText>
              Worked on various projects using React and Node.js. Collaborated
              with the team to develop and maintain web applications. Gained
              experience in agile development methodologies.
            </StyledText>
          </ExperienceContent>
        </ExperienceItem>
        <ExperienceItem>
          <IconWrapper>
            <Briefcase size={24} color="#64ffda" aria-hidden="true" />
          </IconWrapper>
          <ExperienceContent>
            <CompanyName>
              Kumon
              <ChevronRight
                size={16}
                color="#64ffda"
                style={{ marginLeft: "0.5rem" }}
              />
            </CompanyName>
            <JobTitle>Team Mentor</JobTitle>
            <DateRange>
              <Calendar size={16} aria-hidden="true" />
              <span>December 2022 - Present</span>
            </DateRange>
            <StyledText>
              * Collaboratively recording students' progress and collectively
              addressing any errors in their worksheets. * As a team, we
              actively facilitated student learning in Kumon by closely
              monitoring progress, correcting errors, and guiding them through
              problem-solving, fostering independent, skill-driven growth.
            </StyledText>
          </ExperienceContent>
        </ExperienceItem>
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default WorkExperience;
