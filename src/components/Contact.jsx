import React from "react";
import styled, { keyframes } from "styled-components";
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import {
  Description,
  Title,
  Button,
  Section,
  fadeIn,
  slideIn,
} from "./StyledComponents";

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;
  background: rgba(17, 34, 64, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  width: 100%;
  margin: 3rem 0;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 1.5rem;
  }
`;

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(100, 255, 218, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(100, 255, 218, 0);
  }
`;

const ContactItem = styled.div`
  background: rgba(29, 45, 80, 0.5);
  border-radius: 8px;
  transition: all 0.3s ease;
  animation: ${slideIn} 0.5s ease forwards, ${fadeIn} 0.5s ease forwards;
  opacity: 0;
  transform: translateY(20px);

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &:hover {
    transform: translateY(-5px);
    background: rgba(29, 45, 80, 0.8);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const ContactLink = styled.a`
  color: #8892b0;
  text-decoration: none;
  font-size: 1rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1.5rem;
  height: 100%;

  &:hover {
    color: #64ffda;
  }

  &:focus {
    outline: 2px solid #64ffda;
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background: rgba(100, 255, 218, 0.1);
  border-radius: 50%;
  margin-bottom: 1.5rem;
  animation: ${pulse} 2s infinite;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const ContactText = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 0.5rem;

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ContactSubText = styled.span`
  font-size: 0.9rem;
  color: #64ffda;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 1rem;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    background: #64ffda;
    bottom: 0;
    left: 0;
    right: 0;
    top: 100%;
    z-index: -1;
    transition: top 0.3s ease-in-out;
  }

  &:hover:before {
    top: 0;
  }

  &:hover {
    color: #0a192f;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.85rem 1.75rem;
  }
`;

const StyledTitle = styled(Title)`
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2.25rem;
  }
`;

const StyledDescription = styled(Description)`
  text-align: center;
  max-width: 600px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

export const Contact = () => {
  return (
    <Section>
      <ContactContainer>
        <StyledTitle>Get in Touch</StyledTitle>
        <StyledDescription>
          Feel free to reach out for collaborations or just to say hi! I'm
          always excited to connect with fellow developers and potential
          employers.
        </StyledDescription>
        <ContactGrid>
          <ContactItem>
            <ContactLink
              href="mailto:contact.x@gmail.com"
              aria-label="Email me"
            >
              <IconWrapper>
                <Mail size={35} color="#64ffda" aria-hidden="true" />
              </IconWrapper>
              <ContactText>Email</ContactText>
              <ContactSubText>Get in touch</ContactSubText>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink
              href="https://github.com/x"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my GitHub profile"
            >
              <IconWrapper>
                <Github size={35} color="#64ffda" aria-hidden="true" />
              </IconWrapper>
              <ContactText>GitHub</ContactText>
              <ContactSubText>
                Check my repos
                <ExternalLink
                  size={16}
                  style={{ marginLeft: "0.4rem" }}
                  aria-hidden="true"
                />
              </ContactSubText>
            </ContactLink>
          </ContactItem>
          <ContactItem>
            <ContactLink
              href="https://linkedin.com/in/x/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit my LinkedIn profile"
            >
              <IconWrapper>
                <Linkedin size={35} color="#64ffda" aria-hidden="true" />
              </IconWrapper>
              <ContactText>LinkedIn</ContactText>
              <ContactSubText>
                Let's connect
                <ExternalLink
                  size={16}
                  style={{ marginLeft: "0.4rem" }}
                  aria-hidden="true"
                />
              </ContactSubText>
            </ContactLink>
          </ContactItem>
        </ContactGrid>
        <StyledButton as="a" href="mailto:contact.x@gmail.com">
          Send a Message
        </StyledButton>
      </ContactContainer>
    </Section>
  );
};
