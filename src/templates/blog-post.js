import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import styled from "@emotion/styled"

const Post = styled.div`
  margin: auto;
  font-size: 1.3rem;
  line-height: 1.4;

  table {
    width: 100%;
  }

  thead {
    background-color: #2a69ac;
    font-weight: bold;
    color: white;
  }

  thead tr {
    border: 1px solid #21406d;
  }

  tr {
    border: 1px solid #ddddd5;
  }

  th,
  td {
    padding: 1rem;
    &:not(:last-child) {
      border-right: 1px solid #ddddd5;
    }
  }
  th:not(:last-child) {
    border-right: 1px solid #21406d;
  }

  article {
    width: 700px;
    margin: 4rem auto;
    min-height: 400px;
  }

  img {
    margin: auto;
    max-height: 60vh;
  }

  video {
    margin: 2rem 0;
    border: 1px solid #ddd;
  }

  /* Typography
-------------------------------------------------------- */

  h1 {
    margin-top: 0;
    font-weight: normal;
  }

  h2 {
    font-weight: normal;
  }

  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
    font-style: italic;
  }

  p {
    margin-top: 0;
    hyphens: auto;
  }
  ul {
    list-style: disc;
    padding-left: 1.2em;
  }
  ol {
    list-style: decimal;
    padding-left: 1.2em;
  }

  blockquote {
    border-left: 6px solid #2a69acdd;
    margin-left: 1rem;
    padding: 1rem;
    font-style: italic;
    color: #777;
    background: #f9f9f9;
  }

  pre {
    border-left: 6px solid #2a69acdd;
    background-color: #f9f9f9;
  }

  code {
    font-family: "Cascadia Code", monospace, serif;
    font-variant-ligatures: normal;
    font-size: 1rem;
  }

  pre,
  code {
    line-height: 1.2 !important;
  }

  a {
    color: #2484c1;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  a img {
    border: none;
  }

  h1 a,
  h1 a:hover {
    color: #333;
    text-decoration: none;
  }
  hr {
    color: #ddd;
    height: 1px;
    margin: 2em 0;
    border-top: solid 1px #ddd;
    border-bottom: none;
    border-left: 0;
    border-right: 0;
  }
`

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article>
        <header>
          <h1
            style={{
              marginBottom: 0,
            }}
          >
            {post.frontmatter.title}
          </h1>
          <p
            style={{
              display: `block`,
            }}
          >
            {post.frontmatter.date}
          </p>
        </header>
        <Post dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <footer></footer>
      </article>

      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
