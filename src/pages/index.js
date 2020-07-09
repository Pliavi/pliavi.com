import React from "react"
import { graphql } from "gatsby"
import { Grid } from "@chakra-ui/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/PostCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <Grid templateColumns={{ base: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}>
        {posts.map(({ node }, index) => {
          const { fields, frontmatter } = node
          const isFeaturedFirstPost = index === 0

          return (
            <PostCard
              key={fields.slug}
              slug={fields.slug}
              gridColumn={isFeaturedFirstPost ? { sm: "1 / -1" } : undefined}
              isFeaturedPost={isFeaturedFirstPost}
              frontmatter={frontmatter}
            />
          )
        })}
      </Grid>
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
