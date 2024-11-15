import styled from "styled-components";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Section, Title, Button } from "./StyledComponents";
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ProjectCard = styled.div`
  background: #1a2a3d;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  color: #64ffda;
  margin-bottom: 0.5rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
  color: #8892b0;
  margin-bottom: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const TechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TechItem = styled.li`
  font-size: 0.8rem;
  color: #64ffda;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  transition: background 0.3s ease;

  &:hover {
    background: rgba(100, 255, 218, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

const ProjectLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;
`;

const ProjectLink = styled.a`
  color: #ccd6f6;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.85rem;
  transition:
    color 0.3s ease,
    transform 0.3s ease;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  background: rgba(204, 214, 246, 0.1);
  cursor: pointer;

  &:hover {
    color: #64ffda;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
    padding: 0.3rem 0.6rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  letter-spacing: 1px;
  background: #64ffda;
  color: #1a2a3d;
  border: none;
  border-radius: 20px;

  &:hover {
    background: #57e3c2;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.2rem;
  }
`;

const projects = [
  {
    title: "Eduverse",
    description:
      "An educational metaverse catering to a better and more interactive learning experience.",
    status: "Work in Progress",
    tech: ["Ink", "Rust", "WebRTC and SFUs"],
    github: "https://github.com/jaypoat/eduverse",
    live: null,
  },
  {
    title: "Brainbox",
    description:
      "An Obsidian clone for efficient note-taking and knowledge management.",
    status: "In Development",
    tech: ["Rust", "React", "TypeScript"],
    github: "https://github.com/jaypopat/BrainBox",
    live: null,
  },
  {
    title: "Warp",
    description:
      "A location-based chatroom application for connecting with nearby users.",
    status: "Completed",
    tech: ["React", "Node.js", "Firebase"],
    github: "https://github.com/jaypopat/Project",
    live: "https://warps.live/",
  },
  {
    title: "Roaming Kitchen",
    description:
      "A NextJS app for a food truck business, featuring menu management and location tracking.",
    status: "Completed",
    tech: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/jaypopat/roaming-kitchen",
    live: "https://roaming.kitchen",
  },
];

export const Projects = () => (
  <Section>
    <Title>Projects</Title>
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCard key={index}>
          <ProjectTitle>{project.title}</ProjectTitle>
          <ProjectDescription>{project.description}</ProjectDescription>
          <TechList>
            {project.tech.map((tech, techIndex) => (
              <TechItem key={techIndex}>{tech}</TechItem>
            ))}
          </TechList>
          <ProjectLinks>
            {project.github && (
              <ProjectLink
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github size={14} />
                GitHub
              </ProjectLink>
            )}
            {project.live && (
              <ProjectLink
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={14} />
                Live Demo
              </ProjectLink>
            )}
            {project.status === "Coming soon" && (
              <ProjectLink as="span">
                <ArrowRight size={14} />
                Coming Soon
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectCard>
      ))}
    </ProjectsGrid>
    <StyledButton
      as="a"
      href="https://github.com/jaypopat"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Explore more projects on GitHub"
    >
      Explore More on GitHub
    </StyledButton>
  </Section>
);
