import React, { useEffect, useState } from "react";
import { Calendar, ArrowRight, Tag, Clock } from "lucide-react";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Section = styled.section`
  padding: 4rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #ccd6f6;
`;

const Description = styled.p`
  text-align: center;
  color: #8892b0;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
`;

const Card = styled.article`
  background: linear-gradient(135deg, #112240, #1d2d50);
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  animation: ${slideUp} 0.6s ease-out ${(props) => props.index * 0.1}s backwards;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  color: #e6f1ff;
  margin-bottom: 1rem;
`;

const CardMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  color: #64ffda;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const MetaItem = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
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
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const CardExcerpt = styled.p`
  color: #a8b2d1;
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardLink = styled(Link)`
  color: #64ffda;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  font-size: 0.95rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateX(5px);
    color: #9be1d4;
  }

  svg {
    margin-left: 0.3rem;
  }
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;

  &::after {
    content: "";
    width: 50px;
    height: 50px;
    border: 5px solid #64ffda;
    border-top: 5px solid #112240;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
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

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  background-color: #1d2d50;
  color: #64ffda;
  border: none;
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2a3f6d;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const url = `https://dev.to/api/articles?username=jaypopat`;
        const response = await fetch(url, {
          method: "GET",
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

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  console.log(blogPosts);

  return (
    <Section>
      <Title>Latest Posts</Title>
      <Description>
        Explore my thoughts and experiences in blockchains and web development
      </Description>
      <Grid>
        {currentPosts.map((post, index) => {
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
      <PaginationContainer>
        <PaginationButton
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <PaginationButton
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationContainer>
    </Section>
  );
};

export default Blogs;
