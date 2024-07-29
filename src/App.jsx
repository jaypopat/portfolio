import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import styled, { createGlobalStyle, keyframes } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Fira Code', monospace;
    background-color: #0a192f;
    color: #8892b0;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
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
  margin-top: 60px; // To account for the fixed header
  text-align: center;
`;

const Section = styled.section`
  animation: ${fadeIn} 0.5s ease-in;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #ccd6f6;
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  font-size: 1.75rem;
  color: #64ffda;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;
`;

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  max-width: 600px;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
  background-color: #112240;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Button = styled(Link)`
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

const KeyboardShortcut = styled.span`
  display: inline-block;
  background-color: #112240;
  color: #64ffda;
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const Home = () => (
  <Section>
    <Title>Jay Popat</Title>
    <Subtitle>Web3 Developer & Rust Enthusiast</Subtitle>
    <Text>
      Welcome to my digital playground. Explore my projects and thoughts on Web3
      and Rust development.
    </Text>

    <Button to="/about">Explore More</Button>
  </Section>
);

const About = () => (
  <Section>
    <Title>About Me</Title>
    <Text>
      I'm a computer science student (based out of Ireland) passionate about
      Web3 technologies. I specialize in Rust development, working with Polkadot
      technologies such as FRAME and Substrate.
    </Text>
    <Subtitle>Skills</Subtitle>
    <List>
      <ListItem>Rust</ListItem>
      <ListItem>Substrate</ListItem>
      <ListItem>FRAME</ListItem>
      <ListItem>JavaScript</ListItem>
      <ListItem>React</ListItem>
      <ListItem>Node.js</ListItem>
      <ListItem>NextJS</ListItem>
      <ListItem>Java</ListItem>
      <ListItem>Docker</ListItem>
      <ListItem>Git</ListItem>
    </List>
  </Section>
);

const Projects = () => (
  <Section>
    <Title>Projects</Title>
    <List>
      <ListItem>
        Decentralised Supply Chain Management Appchain - Coming soon
      </ListItem>
      <ListItem>Brainbox - Obsidian clone - Coming soon</ListItem>
      <ListItem>Warp - Location based chatroom</ListItem>
      <ListItem>
        Roaming Kitchen - NextJS App for a Food truck Business
      </ListItem>
    </List>
    <Button
      as="a"
      href="https://github.com/jaypopat"
      target="_blank"
      rel="noopener noreferrer"
    >
      View on GitHub
    </Button>
  </Section>
);

const Contact = () => (
  <Section>
    <Title>Contact</Title>
    <Text>Feel free to reach out for collaborations or just to say hi!</Text>
    <List>
      <ListItem>Email: contact.jaypopat@gmail.com</ListItem>
      <ListItem>GitHub: github.com/jaypopat</ListItem>
      <ListItem>LinkedIn: linkedin.com/in/jaypopat1/</ListItem>
    </List>
    <Button as="a" href="mailto:jay.popat@example.com">
      Get in Touch
    </Button>
  </Section>
);

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
