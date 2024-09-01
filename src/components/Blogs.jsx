import { useEffect, useState } from "react";
import { Calendar, ArrowRight, Tag, Clock } from "lucide-react";
import styled, { keyframes } from "styled-components";
import {
  CardTitle,
  CardExcerpt,
  Section,
  Title,
  Description,
  LoadingSpinner,
} from "./StyledComponents";
import { Link } from "react-router-dom";

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  width: 100%;
  max-width: 800px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Card = styled.article`
  background: linear-gradient(135deg, #112240, #1d2d50);
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  animation: ${slideUp} 0.6s ease-out ${(props) => props.index * 0.1}s backwards;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const CardContent = styled.div`
  padding: 1.25rem;
`;

const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  color: #64ffda;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const CardLink = styled(Link)`
  color: #64ffda;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
    color: #9be1d4;
  }

  svg {
    margin-left: 0.3rem;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

const TagItem = styled.span`
  background-color: rgba(100, 255, 218, 0.1);
  color: #64ffda;
  padding: 0.2rem 0.4rem;
  border-radius: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.2rem;
`;

const ErrorMessage = styled.div`
  background-color: #ff6b6b;
  color: #fff;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
  max-width: 90%;
  margin: 2rem auto;
`;

export const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const url = "https://dev.to/api/articles/me";
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "User-Agent": "portfolio website",
            "api-key": import.meta.env.VITE_DEVTO_API_KEY,
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage>{error}</ErrorMessage>;

  return (
    <Section>
      <Title>Latest Posts</Title>
      <Description>
        Explore my thoughts and experiences in blockchains and web development
      </Description>
      <Grid>
        {blogPosts.map((post, index) => {
          const createdAt = new Date(post.published_at);
          const formattedDate = createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return (
            <Card key={post.id} index={index}>
              <CardContent>
                <CardTitle>{post.title}</CardTitle>
                <CardMeta>
                  <MetaItem>
                    <Calendar size={14} />
                    {formattedDate}
                  </MetaItem>
                  <MetaItem>
                    <Clock size={14} />
                    {post.reading_time_minutes} min read
                  </MetaItem>
                </CardMeta>
                <TagList>
                  {post.tag_list.slice(0, 3).map((tag, i) => (
                    <TagItem key={i}>
                      <Tag size={10} />
                      {tag}
                    </TagItem>
                  ))}
                </TagList>
                <CardExcerpt>{post.description}</CardExcerpt>
                <CardLink to={`/blogs/${post.slug}`}>
                  Read more <ArrowRight size={14} />
                </CardLink>
              </CardContent>
            </Card>
          );
        })}
      </Grid>
    </Section>
  );
};

export default Blogs;
