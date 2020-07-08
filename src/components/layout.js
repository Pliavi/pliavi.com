import "../styles/reset.css"
import "../styles/global.css"
import React from "react"
import styled from "styled-components"

const Header = styled.header`
  background-color: var(--base-bg);
  font-size: 2rem;
  padding: 1rem 5rem;
  color: #fff;
  font-weight: bold;
  margin-bottom: 3rem;
`

const PageWrapper = styled.div`
  margin: auto;
  max-width: 63rem;
  padding: 2rem;
`

const Footer = styled.div`
  background-color: var(--light-gray);
  padding: 1rem 5rem;
  > small {
    display: block;
    font-size: var(--text-sm)
  }
`

const Layout = ({ title, children }) => {
  return (
    <>
      <Header>{title}</Header>
      <PageWrapper>
        <main>{children}</main>
      </PageWrapper>
      <Footer>
        <small>
          © {new Date().getFullYear()} {title},
        </small>
        <small>
          Built with <a href="https://www.gatsbyjs.org">Gatsby</a> and based on{" "}
          <a href="https://blog.elementary.io">Elementary Blog</a>
        </small>
      </Footer>
    </>
  )
}

export default Layout
