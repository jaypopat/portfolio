import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaCalendar, FaArrowRight } from "react-icons/fa";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3rem 1rem;
  background-color: #0a192f;
`;

const StyledTitle = styled.h1`
  font-size: 2.5rem;
  color: #ccd6f6;
  margin-bottom: 2rem;
  text-align: center;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1000px;
`;

const BlogPost = styled.article`
  background-color: #112240;
  border-radius: 8px;
  overflow: hidden;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const BlogContent = styled.div`
  padding: 1.25rem;
`;

const BlogTitle = styled.h3`
  color: #e6f1ff;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 1.4;
`;

const BlogDate = styled.div`
  color: #64ffda;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`;

const BlogExcerpt = styled.p`
  color: #a8b2d1;
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const ReadMoreLink = styled(Link)`
  color: #64ffda;
  font-size: 0.9rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateX(5px);
  }
`;

const LinkText = styled.span`
  margin-right: 0.5rem;
`;

export const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with Rust",
      date: "Jul 15, 2024",
      excerpt:
        "A beginner's guide to Rust programming language and its unique features.",
      link: "/blog/getting-started-with-rust",
    },
    {
      id: 2,
      title: "Web3 Development Overview",
      date: "Jul 20, 2024",
      excerpt: "Exploring decentralized applications and the world of Web3.",
      link: "/blog/web3-development-overview",
    },
    {
      id: 3,
      title: "Blockchain: Future Trends",
      date: "Jul 25, 2024",
      excerpt: "Emerging trends and predictions in blockchain technology.",
      link: "/blog/blockchain-future-trends",
    },
    {
      id: 4,
      title: "Optimizing Rust Performance",
      date: "Aug 1, 2024",
      excerpt: "Advanced techniques for writing high-performance Rust code.",
      link: "/blog/optimizing-rust-performance",
    },
    // Add more blog posts as needed
  ];

  return (
    <StyledSection>
      <StyledTitle>Latest Posts</StyledTitle>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogPost key={post.id}>
            <BlogContent>
              <BlogTitle>{post.title}</BlogTitle>
              <BlogDate>
                <FaCalendar style={{ marginRight: "0.5rem" }} />
                {post.date}
              </BlogDate>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <ReadMoreLink to={post.link}>
                <LinkText>Read more</LinkText>
                <FaArrowRight size={12} />
              </ReadMoreLink>
            </BlogContent>
          </BlogPost>
        ))}
      </BlogGrid>
    </StyledSection>
  );
};
