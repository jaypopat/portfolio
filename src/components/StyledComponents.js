import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// Keyframe animations
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideIn = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const Section = styled.section`
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 4rem 2rem;
  background-color: #0a192f;
`;

// Title
export const Title = styled.h1`
  font-size: 3rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
  text-align: center; /* Centered title */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Added text shadow for depth */

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Responsive font size */
  }

  @media (max-width: 480px) {
    font-size: 2rem; /* Smaller font size for mobile */
  }
`;

// Subtitle
export const Subtitle = styled.h2`
  font-size: 1.75rem;
  color: #64ffda;
  margin-bottom: 1rem;
  text-align: center; /* Centered subtitle */
`;

// Description
export const Description = styled.p`
  line-height: 1.6;
  max-width: 800px; /* Increased max width for better readability */
  margin: 0 auto 2rem;
  color: #8892b0; /* Added color for contrast */
  font-size: 1.1rem; /* Base font size */

  @media (max-width: 768px) {
    font-size: 1rem; /* Responsive font size */
  }
`;

// List Component
export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

// List Item
export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  background-color: #112240;
  padding: 0.75rem 1.5rem; /* Increased padding for better touch targets */
  border-radius: 8px; /* Rounded corners */
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease; /* Added box shadow transition */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); /* Shadow effect on hover */
  }
`;

// Button Component
export const Button = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: #64ffda;
  border: 2px solid #64ffda; /* Thicker border for better visibility */
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  text-decoration: none;
  font-weight: bold; /* Bold text for emphasis */
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.2); /* Light background on hover */
    transform: scale(1.05); /* Slight scale effect */
  }
`;

// Additional Styled Components
export const Card = styled.article`
  background: linear-gradient(
    135deg,
    #1e2a78,
    #112240
  ); /* Gradient background */
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%; /* Full width for responsive design */

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
`;

export const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #64ffda;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.3rem; /* Responsive font size */
  }
`;

export const CardExcerpt = styled.p`
  color: #ccd6f6;
  margin-bottom: 1rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Responsive font size */
  }
`;

export const LoadingSpinner = styled.div`
  border: 3px solid #112240;
  border-top: 3px solid #64ffda;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1s linear infinite;
  margin: 2rem auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
