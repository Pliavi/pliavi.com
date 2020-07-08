import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/_parts/PostCard"

import styled from "styled-components"

const Posts = styled.main`
  display: grid;
  width: 100%;
  margin: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Posts>
        {posts.map(({ node }) => {
          const { fields, frontmatter } = node;
          // TODO: remove this after add cover to frontmatter
          frontmatter.cover = frontmatter.cover ? frontmatter.cover : "/assets/code.png"
          return <PostCard {...frontmatter} slug={fields.slug}/>
        })}
      </Posts>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
