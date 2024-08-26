import React from "react";
import styled, { keyframes } from "styled-components";
import { Title } from "./StyledComponents";
import { Award, Calendar, Code, Zap } from "lucide-react";

const HackathonsContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HackathonsList = styled.ul`
  list-style: none;
  padding: 0;
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

const HackathonItem = styled.li`
  background: rgba(29, 45, 80, 0.8);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 12px rgba(100, 255, 218, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(to bottom, #64ffda, #1d2d50);
  }
`;

const HackathonName = styled.h3`
  color: #64ffda;
  margin-bottom: 0.5rem;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ProjectTitle = styled.h4`
  color: #ccd6f6;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
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
  animation: ${fadeIn} 0.5s ease-in-out;
`;

const Hackathons = () => {
  return (
    <HackathonsContainer>
      <Title as="h2">Hackathons</Title>
      <HackathonsList>
        <HackathonItem>
          <IconWrapper>
            <Zap size={24} color="#64ffda" aria-hidden="true" />
          </IconWrapper>
          <HackathonName>
            <Award size={20} color="#64ffda" aria-hidden="true" />
            ETH London 2023 - Hacker
          </HackathonName>
          <ProjectTitle>
            <Code size={16} color="#64ffda" aria-hidden="true" />
            NFT Gated AI Chatbot 1UP
          </ProjectTitle>
          <DateRange>
            <Calendar size={16} aria-hidden="true" />
            <span>October 2023</span>
          </DateRange>
          <Description>
            Developed a dapp on the Tezos Blockchain that lets you buy NFTs to
            talk to the corresponding NFT character. Won the Tezos track!
          </Description>
        </HackathonItem>

        <HackathonItem>
          <HackathonName>
            <Award size={20} color="#64ffda" aria-hidden="true" />
            ETH Dublin - Volunteer
          </HackathonName>
          <DateRange>
            <Calendar size={16} aria-hidden="true" />
            <span>May 2023</span>
          </DateRange>
          <Description>
            Networked with devs and web3 founders. Learned about the space
            through presentations and helped hackers with issues.
          </Description>
        </HackathonItem>

        <HackathonItem>
          <IconWrapper>
            <Zap size={24} color="#64ffda" aria-hidden="true" />
          </IconWrapper>
          <HackathonName>
            <Award size={20} color="#64ffda" aria-hidden="true" />
            Encode Polkadot Hackathon - Hacking Next week!
          </HackathonName>
          <DateRange>
            <Calendar size={16} aria-hidden="true" />
            <span>Sept 2024 - October 2024</span>
          </DateRange>
          <Description>
            {/* Placeholder for future description */}
            Excited to participate in this upcoming hackathon!
          </Description>
        </HackathonItem>
      </HackathonsList>
    </HackathonsContainer>
  );
};

export default Hackathons;
