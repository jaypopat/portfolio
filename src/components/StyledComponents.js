import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
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
`;

export const Title = styled.h1`
  font-size: 3rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

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

export const Button = styled(Link)`
  display: inline-block;
  background-color: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  border-radius: 4px;
  padding: 0.75rem 1.5rem;
  margin-top: 2rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

export const Description = styled.p`
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

export const ListItem = styled.li`
  margin-bottom: 0.5rem;
  background-color: #112240;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// Add any other styled components you're using across multiple files
