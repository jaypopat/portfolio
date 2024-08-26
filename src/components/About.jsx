import React, { useState } from "react";
import styled from "styled-components";
import {
  Section,
  Title,
  Description,
  List,
  ListItem,
  fadeIn,
  slideIn,
} from "./StyledComponents";
import WorkExperience from "./WorkExperience";
import Education from "./Education";
import Hackathons from "./Hackathons";

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  background: #1d2d50;
  padding: 0.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    overflow-x: auto;
  }
`;

const Tab = styled.button`
  background: ${(props) => (props.active ? "#64ffda" : "transparent")};
  color: ${(props) => (props.active ? "#0a192f" : "#64ffda")};
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;
  font-family: "Fira Code", monospace;
  font-size: 0.9rem;
  white-space: nowrap;

  &:hover {
    background: ${(props) =>
      props.active ? "#64ffda" : "rgba(100, 255, 218, 0.1)"};
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #64ffda;
  }

  @media (max-width: 768px) {
    margin: 0.25rem;
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  margin-top: 2rem;
`;

const Content = styled.div`
  animation: ${fadeIn} 0.5s ease-out, ${slideIn} 0.5s ease-out;
  display: ${(props) => (props.active ? "block" : "none")};
  width: 100%;
`;

const SkillList = styled(List)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 600px;
  margin: 1rem auto 0;
  padding: 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  }
`;

const SkillItem = styled(ListItem)`
  background-color: #1d2d50;
  border: 1px solid #64ffda;
  padding: 0.5rem;
  border-radius: 4px;
  text-align: center;
  transition: all 0.3s ease;
  list-style-type: none;

  &:hover {
    background-color: #64ffda;
    color: #0a192f;
    transform: translateY(-5px) scale(1.05);
  }
`;

export const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <Section>
      <Title>About Me</Title>
      <Description>
        I'm a computer science student (based out of Ireland) passionate about
        Web3 technologies. I specialize in Rust development, working with
        Polkadot technologies such as FRAME and Substrate.
      </Description>

      <TabContainer>
        <Tab
          active={activeTab === "skills"}
          onClick={() => setActiveTab("skills")}
        >
          Skills
        </Tab>
        <Tab
          active={activeTab === "experience"}
          onClick={() => setActiveTab("experience")}
        >
          Experience
        </Tab>
        <Tab
          active={activeTab === "education"}
          onClick={() => setActiveTab("education")}
        >
          Education
        </Tab>
        <Tab
          active={activeTab === "hackathons"}
          onClick={() => setActiveTab("hackathons")}
        >
          Hackathons
        </Tab>
      </TabContainer>

      <ContentContainer>
        <Content active={activeTab === "skills"}>
          <Title as="h2">Skills</Title>
          <SkillList>
            <SkillItem>Rust</SkillItem>
            <SkillItem>Substrate</SkillItem>
            <SkillItem>FRAME</SkillItem>
            <SkillItem>JavaScript</SkillItem>
            <SkillItem>Typescript</SkillItem>
            <SkillItem>React</SkillItem>
            <SkillItem>Node.js</SkillItem>
            <SkillItem>NextJS</SkillItem>
            <SkillItem>Java</SkillItem>
            <SkillItem>Docker</SkillItem>
            <SkillItem>SQL</SkillItem>
            <SkillItem>Git</SkillItem>
          </SkillList>
        </Content>
        <Content active={activeTab === "experience"}>
          <WorkExperience />
        </Content>
        <Content active={activeTab === "education"}>
          <Education />
        </Content>
        <Content active={activeTab === "hackathons"}>
          <Hackathons />
        </Content>
      </ContentContainer>
    </Section>
  );
};
