import React from "react";
import styled, { keyframes } from "styled-components";
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

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ExperienceItem = styled.li`
  margin-bottom: 3rem;
  position: relative;
  padding-left: 3rem;
  animation: ${fadeIn} 0.5s ease-in-out;
  animation-delay: ${(props) => props.delay}s;

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
  background: rgba(29, 45, 80, 0.8);
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  border: 2px solid transparent;

  &:hover {
    transform: translateX(10px);
    box-shadow: 0 6px 8px rgba(100, 255, 218, 0.3);
    border-color: #64ffda;
  }
`;

const CompanyName = styled.h3`
  color: #64ffda;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
`;

const JobTitle = styled.h4`
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
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
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const StyledText = styled(Description)`
  font-size: 0.9rem;
  line-height: 1.5;
  margin-top: 0.5rem;
  color: #a8b2d1;

  ul {
    padding-left: 1.5rem;
    list-style-type: disc;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const WorkExperience = () => {
  return (
    <ExperienceContainer>
      <Title as="h2">Work Experience</Title>
      <ExperienceList>
        <ExperienceItem delay={0.2}>
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
              <ul>
                <li>Engaged in unit testing and benchmarking.</li>
                <li>Contributed to the Rust Substrate codebase.</li>
                <li>
                  Gained knowledge of tokenomics and Substrate technologies.
                </li>
              </ul>
            </StyledText>
          </ExperienceContent>
        </ExperienceItem>

        <ExperienceItem delay={0.4}>
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
              <ul>
                <li>Shadowed technical leaders in agile methodologies.</li>
                <li>Collaborated with developers on a SaaS platform.</li>
                <li>Developed a bot to enhance workflow efficiency.</li>
              </ul>
            </StyledText>
          </ExperienceContent>
        </ExperienceItem>

        <ExperienceItem delay={0.6}>
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
              <ul>
                <li>Tracked student progress and addressed errors.</li>
                <li>Facilitated learning and guided problem-solving.</li>
              </ul>
            </StyledText>
          </ExperienceContent>
        </ExperienceItem>
      </ExperienceList>
    </ExperienceContainer>
  );
};

export default WorkExperience;
