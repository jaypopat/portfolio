import { Button, Section, Title, List, ListItem } from "./StyledComponents";
export const Projects = () => (
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
