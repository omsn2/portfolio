import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // ✅ Link for navigation

const BlogContainer = styled.section`
  padding: 5rem 8%;
  background: transparent;
  text-align: center;
  color: #1e293b;
`;

const SectionTitle = styled.h2`
  font-size: 3rem;
  color: #1e293b;
  margin-bottom: 2rem;
  font-weight: bold;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const BlogCard = styled.div`
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease-in-out;
  text-align: left;
  border: 1px solid #e0f2fe;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(37, 99, 235, 0.15);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  border-radius: 8px;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  color: #1e293b;
  margin: 1rem 0;
`;

const BlogDescription = styled.p`
  font-size: 1rem;
  color: #64748b;
  opacity: 0.9;
`;

const ReadMoreButton = styled(Link)`
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: #3b82f6;
  border-radius: 5px;
  text-decoration: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background: #2563eb;
  }
`;

const BlogSection = () => {
  return (
    <BlogContainer id="blog">
      <SectionTitle>My Blogs</SectionTitle>
      <BlogGrid>
        <BlogCard>
          <BlogImage src="/assets/react-native-blog.png" alt="React Native Blog" />
          <BlogTitle>Building a Phone Dialer App with React Native</BlogTitle>
          <BlogDescription>
            Learn how to build a phone dialer app using React Native, covering call history, contact management, and UI enhancements.
          </BlogDescription>
          <ReadMoreButton to="/blog/react-native-dialer">Read More</ReadMoreButton> {/* ✅ Link to full blog */}
        </BlogCard>

        <BlogCard>
          <BlogImage src="/assets/spring-boot-hospital.png" alt="Spring Boot Blog" />
          <BlogTitle>Creating a Hospital Management System with Spring Boot</BlogTitle>
          <BlogDescription>
            A complete guide to building a full-stack hospital management system using Spring Boot and React.
          </BlogDescription>
          <ReadMoreButton to="/blog/hospital-management">Read More</ReadMoreButton>
        </BlogCard>

        <BlogCard>
          <BlogImage src="/assets/ddos-attack-blog.png" alt="DDoS Attack Blog" />
          <BlogTitle>Understanding & Simulating DDoS Attacks</BlogTitle>
          <BlogDescription>
            Explore how DDoS attacks work and how to simulate and prevent them using networking techniques.
          </BlogDescription>
          <ReadMoreButton to="/blog/ddos-attacks">Read More</ReadMoreButton>
        </BlogCard>
      </BlogGrid>
    </BlogContainer>
  );
};

export default BlogSection;
