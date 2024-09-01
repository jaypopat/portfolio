import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Section, Title, Description, Button } from "./StyledComponents";

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching post: {error}</p>;
  if (!post) return <p>No post found.</p>;

  return (
    <Section>
      <Title>{post.title}</Title>
      <Description>Published on {post.published_at}</Description>
      <Description>
        <div dangerouslySetInnerHTML={{ __html: post.body_html }} />
      </Description>
      <div>
        <strong>Tags:</strong>{" "}
        {post.tag_list.length > 0 ? (
          post.tag_list.map((tag, index) => (
            <Link key={index} to={`/t/${tag}`} style={{ marginRight: "5px" }}>
              {tag}
            </Link>
          ))
        ) : (
          <span>No tags</span>
        )}
      </div>
      <div>
        <strong>Reading Time:</strong> {post.reading_time_minutes} minutes
      </div>
      <Button as={Link} to="/blogs">
        Back to Blogs
      </Button>
    </Section>
  );
};
