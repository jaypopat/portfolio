import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Section, Title, Text, Button } from "../App";
export const BlogPost = () => {
  // const { id } = useParams();
  // Fetch blog post data based on id
  // For now, we'll use dummy data
  const post = {
    title: "Sample Blog Post",
    date: "2024-07-25",
    content: "This is the full content of the blog post...",
  };

  return (
    <Section>
      <Title>{post.title}</Title>
      <Text>{post.date}</Text>
      <Text>{post.content}</Text>
      <Button as={Link} to="/blogs">
        Back to Blogs
      </Button>
    </Section>
  );
};
