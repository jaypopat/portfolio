import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Section,
  Title,
  Description,
  Button,
  LoadingSpinner,
} from "./StyledComponents";

const LeftAlignedDescription = styled(Description)`
  text-align: left;
`;

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `https://dev.to/api/articles/jaypopat/${slug}`,
          {
            method: "GET",
          },
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) return <LoadingSpinner />;
  if (error) return <p>Error fetching post: {error}</p>;
  if (!post) return <p>No post found.</p>;

  const createdAt = new Date(post.published_at);
  const formattedDate = createdAt.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Section>
      <Title>{post.title}</Title>
      <Description>Published on {formattedDate}</Description>
      <LeftAlignedDescription>
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </LeftAlignedDescription>
      <div>
        <strong>Reading Time:</strong> {post.reading_time_minutes} minutes
      </div>
      <Button as={Link} to="/blogs">
        Back to Blogs
      </Button>
    </Section>
  );
};
