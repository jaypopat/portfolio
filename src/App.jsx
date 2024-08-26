import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { BlogPost } from "./components/BlogPost";
import { Blogs } from "./components/Blogs";
import { About } from "./components/About";
import {
  Description,
  Button,
  Section,
  Title,
  Subtitle,
} from "./components/StyledComponents";
import { Contact } from "./components/Contact";
import { Projects } from "./components/Projects";

// Styles
const GlobalStyle = createGlobalStyle`
    body {
      margin: 0;
      padding: 0;
      font-family: 'Fira Code', monospace;
      background-color: #0a192f;
      color: #8892b0;
    }
  `;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
  background-color: rgba(10, 25, 47, 0.9);
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  max-width: 800px;
  width: 100%;
`;

const NavLink = styled(Link)`
  color: #8892b0;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;

  &:hover,
  &.active {
    color: #64ffda;
  }
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  padding: 2rem;
  margin-top: 60px;
  text-align: center;
`;

const KeyboardShortcut = styled.span`
  display: inline-block;
  background-color: #112240;
  color: #64ffda;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

// Components
const Home = () => (
  <Section>
    <Title>Jay Popat</Title>
    <Subtitle>Web3 Developer & Rust Enthusiast</Subtitle>
    <Description>
      Welcome to my digital playground. Explore my projects and thoughts on Web3
      and Rust development.
    </Description>
    <Button to="/about">Explore More</Button>
  </Section>
);

// Main App Component
const App = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "h") navigate("/");
      if (e.key === "a") navigate("/about");
      if (e.key === "p") navigate("/projects");
      if (e.key === "c") navigate("/contact");
      if (e.key === "b") navigate("/blogs");
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [navigate]);

  return (
    <Container>
      <GlobalStyle />
      <Header>
        <Nav>
          <NavLink to="/" className={location.pathname === "/" ? "active" : ""}>
            Home<KeyboardShortcut>H</KeyboardShortcut>
          </NavLink>
          <NavLink
            to="/about"
            className={location.pathname === "/about" ? "active" : ""}
          >
            About<KeyboardShortcut>A</KeyboardShortcut>
          </NavLink>
          <NavLink
            to="/projects"
            className={location.pathname === "/projects" ? "active" : ""}
          >
            Projects<KeyboardShortcut>P</KeyboardShortcut>
          </NavLink>
          <NavLink
            to="/blogs"
            className={location.pathname === "/blogs" ? "active" : ""}
          >
            Blogs<KeyboardShortcut>B</KeyboardShortcut>
          </NavLink>
          <NavLink
            to="/contact"
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact<KeyboardShortcut>C</KeyboardShortcut>
          </NavLink>
        </Nav>
      </Header>
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Main>
    </Container>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
